import OpenAI from 'openai';
import { loadPlanExamples } from './loadExamples.ts';
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // 환경변수에서 API 키 가져오기
  dangerouslyAllowBrowser: true,
});

export async function generateDetailedPlan(
  goal: string,
  startDate: string,
  duration: number,
) {
  // 예제 데이터 로드
  const planExamples = loadPlanExamples();
  const example = planExamples[goal] || null; // 해당 목표의 예제 찾기

  const messages: ChatCompletionMessageParam[] = [
    {
      role: 'system',
      content:
        'You are a helpful assistant that creates highly detailed and structured plans.',
    },
    {
      role: 'user',
      content: `나는 "${goal}"라는 목표를 이루고 싶어. 이 목표를 ${startDate}부터 시작해서 총 ${duration}일 동안 완료할 거야.
      
      만약 이 목표와 유사한 계획을 참고할 필요가 있다면 아래의 예제를 참고해 줘:
      ${example ? JSON.stringify(example, null, 2) : '이 목표에 대한 예제가 없습니다.'}

      네가 만들어줄 계획은 하루하루 실행 가능한 작은 단위로 쪼개진 구체적인 일정이어야 해. 계획을 짤 때 다음 사항을 고려해 줘:
      
      1. 각 하루의 작업은 매우 구체적이고 실용적이어야 해.*
         예를 들어, "중복 사진 삭제"라고만 쓰지 말고,  
         "사진 1,000장 중 200장 확인 후 중복 제거" 같은 방식으로 작성해 줘.
      2. "매일 반복할 행동"을 적으면 안 돼.
         예: "매일 물 2리터 마시기", "매일 운동하기", "매일 식단 기록하기"는 올바른 대답이 아니야.  
         대신, "첫째 날: 목표 체중 설정", "둘째 날: 기초 대사량 계산"처럼 매일 구체적이고 다른 작업이 주어져야 해.
      3. 진행률이 최대한 일정하도록 배분해 줘. 
         예를 들어, 전체 작업량을 ${duration}일 동안 균등하게 나눠 줘. 어느 정도는 차이가 있어도 돼.
         배열의 길이는 정확히 ${duration}개여야 해. 절대 ${duration}개 이상 또는 이하를 생성하지 마.
         반드시 ${duration}개만 반환해야 해.
      4. 불필요한 단계나 모호한 표현을 제외해 줘. 
         "책 읽기" 대신 "첫 30페이지 읽기", "중요 개념 정리"처럼 작성해 줘.
      5. 반환 형식은 무조건 JSON 배열로 해야 해.  
         형식 예시:
         [
           "아이클라우드 로그인 및 사진 개수 확인",
           "전체 사진 중 1/10 검토, 중복 삭제",
           "전체 사진 중 2/10 검토, 불필요 사진 삭제"
         ]
      6. "1일차:" 같은 날짜 정보는 절대 포함하지 마.  
         오직 JSON 배열로만 출력해 줘.
      7. 추가 설명 없이, 순수 JSON 배열만 반환해 줘.
      8. 글머리 기호나 굵은 글씨는 절대 포함하지 마.
      9. 모든 답변은 한국어로 작성해.
      10. 매 항목은 공백 포함 20자 이하로 작성해야 해. 
         ⚠️ "공백 제외"가 아니라 "공백 포함 20자 이하"야!  
         ⚠️ 한 항목이라도 20자를 초과하면 잘못된 거야.  
         ⚠️ 각 항목의 길이를 반드시 확인해 줘.`,
    },
  ];

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // 사용할 모델 - 이게 반응속도가 제일 빠름
      messages: messages,
      max_tokens: 400, // 응답 길이 제한
      temperature: 0.5, // 창의성 조정
    });

    // AI 응답 출력
    const content = response.choices?.[0]?.message?.content?.trim();

    if (!content) {
      throw new Error('AI 응답이 비어 있습니다.');
    }
    let parsedPlan;
    try {
      parsedPlan = JSON.parse(content);
    } catch {
      parsedPlan = [];
    }

    if (!Array.isArray(parsedPlan)) {
      console.warn('AI 응답이 배열이 아닙니다. 강제 변환을 시도합니다.');
      parsedPlan = [content]; // AI 응답을 강제로 배열로 변환
    }

    // AI가 duration 개수를 초과한 경우 잘라서 반환
    const finalPlan = parsedPlan.slice(0, duration);

    return finalPlan;
  } catch (error) {
    console.error('계획 생성 오류:', error);
    return [];
  }
}

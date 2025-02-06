import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // 환경변수에서 API 키 가져오기
  dangerouslyAllowBrowser: true,
});

// 날짜 추천 함수
export async function autoDuration(goal: string) {
  const messages: ChatCompletionMessageParam[] = [
    {
      role: 'system',
      content:
        'You are a helpful assistant that estimates realistic durations for goals.',
    },
    {
      role: 'user',
      content: `나는 "${goal}"라는 목표를 이루고 싶어. 이 목표를 완성하는 데 얼마나 걸릴지 알려줘. 
      
      현실적으로 가능한 소요 기간(일수)만 알려줘. 예를 들어:
      "5kg 감량하기"는 30일,
      "책 1권 읽기"는 7일,
      "아이클라우드 사진 정리하기"는 8일.
      
      현실적으로 가능한 소요 기간(일수)만 숫자로만 반환해줘. 숫자 외에 어떤 단어나 설명도 하지 마. 숫자만 반환해.`,
    },
  ];

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages,
      max_tokens: 10, // 간단한 숫자만 반환
      temperature: 0.5,
    });

    // GPT 응답에서 숫자 추출
    const content = response.choices?.[0]?.message?.content?.trim();
    console.log('AI 예상 소요 기간 응답:', content); // AI 응답 확인

    if (!content || isNaN(parseInt(content, 10))) {
      console.error('AI가 올바른 숫자를 반환하지 않았습니다.');
      return null;
    }

    const duration = parseInt(content, 10);
    return duration > 0 ? duration : null;
  } catch (error) {
    console.error('추천 기간 생성 오류:', error);
    return null;
  }
}

autoDuration('운동 루틴 만들기');

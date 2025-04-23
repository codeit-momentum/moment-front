import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { generateDetailedPlan } from '../../../../apis/AI/autoPlanning';
import { ModeType } from '../../../../types/moment/create';
import useToast from '../../../../hooks/common/useToast';
import PlanContainer from '../../ContainerLayout/ContainerLayout';
import PlanItem from '../../CheckList/CheckListItem/CheckListItem';
import EditConfirmButtons from '../EditConfirmButtons/EditConfirmButtons';
import Toast from '../../../common/Toast/Toast';
import Divider from '../../../common/Divider/Divider';
import IcLoading from '../../../../assets/svg/common/IcLoading';
import * as S from './MomentPlanSetup.style';

interface MomentPlanSetupLayoutProps {
  goal: string;
  mode: ModeType;
  duration: number;
  onSave: (plan: string[]) => void;
}

const MomentPlanSetup = ({
  goal,
  mode,
  duration,
  onSave,
}: MomentPlanSetupLayoutProps) => {
  const [isEditing, setIsEditing] = useState(mode === 'manual'); // 수정 상태
  const [isLoadingAI, setIsLoadingAI] = useState(mode === 'auto');
  const [plan, setPlan] = useState<string[]>([]);
  const { openToast, setIsToastOpen, isToastOpen, toastMessage } = useToast();

  useEffect(() => {
    const getGeneratedPlan = async () => {
      setIsLoadingAI(true);
      try {
        const AIplan = await generateDetailedPlan(
          goal,
          new Date().toISOString().split('T')[0],
          duration,
        );
        setPlan(AIplan);
      } catch (error) {
        console.error(error);
        alert('투두 리스트 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
      } finally {
        setIsLoadingAI(false);
      }
    };

    if (mode === 'auto') {
      getGeneratedPlan();
    } else {
      setPlan(new Array(duration).fill(''));
    }
  }, [goal, mode, duration]);

  const handleEditPlan = (index: number, value: string) => {
    const updatedPlan = plan.map((item, i) => (i === index ? value : item));
    setPlan(updatedPlan);
  };

  const handleConfirmPlan = () => {
    if (plan.some((item) => item.trim() === '')) {
      openToast('내용을 작성해주세요!');
      return false;
    }

    onSave([...plan]);
    return true;
  };

  return (
    <S.MomentPlanSetupLayout>
      <Divider />
      <S.PlanTitle>
        {duration}일 동안 진행할 모멘트는
        <br />
        다음과 같습니다!
      </S.PlanTitle>
      {isLoadingAI ? (
        <S.PlanLoadingWrapper>
          <IcLoading />
        </S.PlanLoadingWrapper>
      ) : (
        <>
          <PlanContainer
            title="방법"
            containerStyle={{ margin: '2rem 0rem', padding: '1rem 2.2rem' }}
            titleStyle={{ fontSize: '16px', padding: '0.5rem 2.4rem' }}
          >
            {plan.map((item, index) => (
              <PlanItem
                key={uuidv4()}
                id={index}
                type="생성형"
                state={index + 1}
                value={item}
                editState={isEditing}
                onUpdateItem={handleEditPlan}
              />
            ))}
          </PlanContainer>
          <EditConfirmButtons
            mode={mode}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            onConfirm={handleConfirmPlan}
          />
        </>
      )}
      {isToastOpen && <Toast setToast={setIsToastOpen}>{toastMessage}</Toast>}
    </S.MomentPlanSetupLayout>
  );
};

export default MomentPlanSetup;

import { useQuery } from '@tanstack/react-query';
import { generateDetailedPlan } from '../../../apis/AI/autoPlanning';
import { ModeType } from '../../../types/moment/create';

interface getAIPlanParams {
  goal: string;
  duration: number;
  mode: ModeType;
}

const useGetAIPlan = ({ goal, duration, mode }: getAIPlanParams) => {
  const startDate = new Date().toISOString().split('T')[0];

  return useQuery({
    queryKey: ['plan', goal, startDate, duration],
    queryFn: () => generateDetailedPlan(goal, startDate, duration),
    enabled: mode === 'auto',
  });
};

export default useGetAIPlan;

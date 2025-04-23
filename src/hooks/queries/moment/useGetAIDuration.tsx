import { useQuery } from '@tanstack/react-query';
import { autoDuration } from '../../../apis/AI/autoDuration';
import { ModeType } from '../../../types/moment/create';

interface getAIDurationParams {
  goal: string;
  mode: ModeType;
}

const useGetAIDuration = ({ goal, mode }: getAIDurationParams) =>
  useQuery({
    queryKey: ['duration', goal],
    queryFn: () => autoDuration(goal),
    enabled: mode === 'auto',
  });

export default useGetAIDuration;

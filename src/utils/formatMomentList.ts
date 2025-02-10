import { MomentItemType } from '../types/home';

const MOMENT_MAX_LENGTH = 3;

const formatMomentList = (moments: MomentItemType[]) => {
  const cnt = MOMENT_MAX_LENGTH - moments.length;

  return moments.concat(
    [...Array(cnt)].map((_, index) => ({
      id: `empty-${index + moments.length}`,
      title: '-',
      isCompleted: false,
    })),
  );
};

export default formatMomentList;

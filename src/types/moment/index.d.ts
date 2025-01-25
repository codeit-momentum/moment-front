export type StateType = 'completed' | 'inProgress' | 'pending';

export interface BucketListType {
  id: number;
  title: string;
  state: StateType;
}

export type CheckListType = '반복형' | '달성형';
export type ListItemType = '생성형' | CheckListType;

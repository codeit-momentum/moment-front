export type StateType = 'completed' | 'inProgress' | 'pending';

export interface BucketListType {
  id: number;
  title: string;
  state: StateType;
}

export type CheckListVariant = '반복형' | '달성형';

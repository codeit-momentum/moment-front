export type StateType = 'completed' | 'inProgress' | 'pending';

export interface BucketListType {
  id: number;
  title: string;
  state: StateType;
}

export type CheckListType = 'recurring' | 'achievement';
export type ListItemType = 'create' | CheckListType;

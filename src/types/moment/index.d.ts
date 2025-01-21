export interface BucketListType {
  id: number;
  title: string;
  state: 'completed' | 'inProgress' | 'pending';
}

export type CheckListVariant = '반복형' | '달성형';

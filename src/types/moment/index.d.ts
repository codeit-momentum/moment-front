export type StateType = 'completed' | 'inProgress' | 'pending';

export interface BucketListType {
  id: string;
  title: string;
  state: StateType;
}

export type BucketType = 'REPEAT' | 'ACHIEVEMENT';

interface Bucket {
  bucketID: string;
  completedMomentsCount: number;
  content: string;
  createdAt: string;
  endDate: null;
  isChallenging: boolean;
  isCompleted: boolean;
  momentsCount: number;
  photoUrl: null;
  startDate: null;
  type: BucketType;
  updatedAt: string;
  userID: string;
}

interface PostBucketResponse {
  bucket: Bucket;
  message: string;
  success: boolean;
}

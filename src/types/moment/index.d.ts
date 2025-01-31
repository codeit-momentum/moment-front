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
  endDate: string;
  isChallenging: boolean;
  isCompleted: boolean;
  momentsCount: number;
  photoUrl: null | string;
  startDate: string;
  type: BucketType;
  updatedAt: string;
  userID: string;
}

export interface BucketResponse {
  bucket: Bucket;
  message: string;
  success: boolean;
}

interface BucketDetail extends Bucket {
  moments: [];
}

export interface BucketDetailResponse {
  bucket: BucketDetail;
  success: boolean;
  momentsCount: number;
  completedMomentsCount: number;
}

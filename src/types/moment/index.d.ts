export type StateType = 'completed' | 'inProgress' | 'pending';

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

interface BucketDetail extends Bucket {
  moments: [];
}

export interface BucketItemType {
  bucketID: string;
  content: string;
  isCompleted: boolean;
  isChallenging: boolean;
}

export interface UpdateBucketResponse {
  bucket: Bucket;
  message: string;
  success: boolean;
}

export interface GetBucketDetailResponse {
  bucket: BucketDetail;
  success: boolean;
  momentsCount: number;
  completedMomentsCount: number;
}

export interface GetBucketResponse {
  success: boolean;
  user: string;
  count: number;
  type: string;
  buckets: BucketItemType[];
}

export type StateType = 'completed' | 'inProgress' | 'pending';

export type BucketType = 'REPEAT' | 'ACHIEVEMENT';

export type UploadType = 'moment' | 'bucket';

export interface UploadParams {
  id: string;
  imageFile: File;
}

export interface Bucket {
  bucketID: string;
  completedMomentsCount: number;
  content: string;
  createdAt: string;
  endDate: null | string;
  isChallenging: boolean;
  isCompleted: boolean;
  momentsCount: number;
  photoUrl: null | string;
  startDate: null | string;
  type: BucketType;
  updatedAt: string;
  userID: string;
}

export interface Moment {
  momentID: string;
  content: string;
  isCompleted: boolean;
  photoUrl: null | string;
  createdAt: string;
  updatedAt: string;
  startDate: string;
  endDate: string;
  bucketID: string;
  userID: string;
}

export interface BucketDetail extends Bucket {
  moments: Moment[];
}

export interface MomentDetail extends Moment {
  bucket: Bucket;
}

export type BucketItemType = Pick<
  Bucket,
  'bucketID' | 'content' | 'isCompleted' | 'isChallenging'
>;

export type ChallengingMoment = Pick<
  Moment,
  'photoUrl' | 'content' | 'momentID' | 'bucketID'
>;

export interface ChallengingBucket
  extends Pick<Bucket, 'bucketID' | 'content' | 'completedMomentsCount'> {
  momentCount: number;
  moments: ChallengingMoment[];
}

export interface UploadMoment {
  updatedMoment: Moment;
  updatedBucket: null | string;
  totalMoments: number;
  completedMoments: number;
}

// Response 타입

export interface UpdateBucketResponse {
  bucket: Bucket;
  message: string;
  success: boolean;
}

export interface DeleteBucketResponse {
  success: boolean;
  message: string;
  type: BucketType;
  bucketID: string;
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

export interface GetMomentDetailResponse {
  success: boolean;
  moment: MomentDetail;
}

export interface UploadMomentResponse {
  success: boolean;
  message: string;
  result: UploadMoment;
}

export interface GetChallengingMomentResponse {
  success: boolean;
  count: number;
  data: ChallengingBucket[];
}

export interface GetChallengingCountResponse {
  success: boolean;
  challengingCount: number;
}

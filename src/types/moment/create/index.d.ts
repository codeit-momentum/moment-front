import { Bucket, Moment } from '..';

export type ModeType = 'auto' | 'manual';
export type FrequencyType = 'daily' | 'every2days' | 'weekly' | 'monthly';

export interface CreatedMoment {
  content: string;
  startDate: string;
  endDate: string;
}

export interface CreateStateType {
  goal: string;
  mode: ModeType;
  bucketId: string;
}

export interface CompleteStateType {
  bucketId: string;
  frequency: FrequencyType;
  moments: CreatedMoment[];
}

export interface CreateMomentPayload {
  duration: number;
  todoList: string[];
  frequency: FrequencyType;
}

export interface PostMomentsPayload {
  startDate: string;
  endDate: string;
  moments: CreatedMoment[];
  frequency: FrequencyType;
}

// 응답 타입
export interface PostMomentsResponse {
  success: boolean;
  message: string;
  bucket: Bucket;
  moments: Moment[];
}

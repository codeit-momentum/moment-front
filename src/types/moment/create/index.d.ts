export type ModeType = 'auto' | 'manual';
export type FrequencyType = 'daily' | 'every2days' | 'weekly' | 'monthly';

export interface LocationStateType {
  goal: string;
  mode: ModeType;
  id: string;
}

export interface CreateMomentPayload {
  duration: number;
  todoList: string[];
  frequency: FrequencyType;
}

export interface CreatedMoment {
  content: string;
  startDate: string;
  endDate: string;
}

// 요청 타입

export interface PostMomentsPayload {
  startDate: string;
  endDate: string;
  moments: CreatedMoment[];
  frequency: string;
}

// 응답 타입
export interface CreateMomentResponse {
  id: string;
  duration: number;
  todoList: string[];
  frequency: FrequencyType;
  createdAt: string;
}

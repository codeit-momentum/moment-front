export type ModeType = 'auto' | 'manual';
export type FrequencyType = 'daily' | 'every2days' | 'weekly' | 'monthly';

// 요청 타입
export interface CreateMomentPayload {
  duration: number | null;
  todoList: string[];
  frequency: string | null;
}

// 응답 타입
export interface CreateMomentResponse {
  id: string;
  duration: number;
  todoList: string[];
  frequency: string;
  createdAt: string;
}

import { Bucket } from '.';

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

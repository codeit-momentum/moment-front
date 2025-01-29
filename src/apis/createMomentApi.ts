import axiosInstance from './client'; // 공통 axios 인스턴스 가져오기
import {
  CreateMomentPayload,
  CreateMomentResponse,
} from '../types/moment/createMomentTypes';

// Moment 생성 API
export const createMoment = async (
  payload: CreateMomentPayload,
): Promise<CreateMomentResponse> => {
  const { data } = await axiosInstance.post<CreateMomentResponse>(
    '/moment',
    payload,
  );
  return data;
};

// Moment 목록 가져오기 (옵션)
export const getMoments = async (): Promise<CreateMomentResponse[]> => {
  const { data } = await axiosInstance.get<CreateMomentResponse[]>('/moments');
  return data;
};

// Moment 상세 정보 가져오기 (옵션)
export const getMomentById = async (
  id: string,
): Promise<CreateMomentResponse> => {
  const { data } = await axiosInstance.get<CreateMomentResponse>(
    `/moments/${id}`,
  );
  return data;
};

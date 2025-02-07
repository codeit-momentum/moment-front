import { useQuery } from '@tanstack/react-query';
import instance from '../../../apis/client';

// 알림 목록 API 응답 타입 정의
interface Notification {
  notificationID: string;
  type: 'FRIEND' | 'CHEER' | 'KNOCK';
  content: string;
  createdAt: string;
  isRead: boolean;
}

interface NotificationsResponse {
  success: boolean;
  messages: string;
  user: string;
  notifications: Notification[];
}

// API 호출 함수
const fetchNotifications = async (): Promise<NotificationsResponse> => {
  const response = await instance.get('/api/home/notifications', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};

// React Query 훅
export const useGetNotifications = () => {
  return useQuery(['notifications'], fetchNotifications);
};

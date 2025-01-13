import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import instance from '../../apis/client';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

const fetchKakaoLogin = async (code: string): Promise<LoginResponse> => {
  const response = await instance.get(`${code}`);
  return response.data;
};

const useLogin = (code: string | null) => {
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: (code: string) => fetchKakaoLogin(code),
    onSuccess: (data) => {
      // 토큰을 로컬 스토리지에 저장
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      // 로그인 성공 시 페이지 완전 리로드
      window.location.replace('/');
    },
    onError: (error) => {
      console.error('Login failed:', error);

      // 에러 메세지 확인을 위해 navigate 사용
      navigate('/');
    },
  });

  useEffect(() => {
    if (code) {
      loginMutation.mutate(code);
    }
  }, [code]);
};

export default useLogin;

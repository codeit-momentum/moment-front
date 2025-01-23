import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import instance from '../../apis/client';

interface UserResponse {
  user: {
    id: string;
    userID: string;
    email: string;
    nickname: string;
    friendCode: string;
    profileImageUrl: string;
  };
  accessToken: string;
}

const fetchUser = async (token: string): Promise<UserResponse> => {
  const response = await instance.post('/auth/kakao-login/user', {
    kakaoAccessToken: token,
  });
  return response.data;
};

const fetchKakaoLogin = async (code: string): Promise<UserResponse> => {
  const response = await instance.post('/auth/kakao-login', {
    code: code,
  });
  const kakaoToken = response.data.access_token;
  return fetchUser(kakaoToken);
};

const useLogin = (code: string | null) => {
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: (code: string) => fetchKakaoLogin(code),
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.accessToken);
      // 콜백 페이지 기록 삭제
      navigate('/home', { replace: true });
    },
    onError: (error) => {
      console.error('Login failed:', error);
      navigate('/login');
    },
  });

  useEffect(() => {
    if (code) {
      loginMutation.mutate(code);
    }
  }, [code]);
};

export default useLogin;

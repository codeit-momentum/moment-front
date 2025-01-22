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
  const userResponse = await instance.post('/auth/kakao-login/user', {
    kakaoAccessToken: token,
  });

  return userResponse.data;
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
      // 토큰을 로컬 스토리지에 저장
      localStorage.setItem('accessToken', data.accessToken);

      // 로그인 성공 시 페이지 완전 리로드
      window.location.replace('/home');
    },
    onError: (error) => {
      console.error('Login failed:', error);

      // 에러 메세지 확인을 위해 navigate 사용
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

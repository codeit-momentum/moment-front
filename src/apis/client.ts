import axios from 'axios';

const BASE_URL: string = import.meta.env.VITE_BASE_URL;

export const getAccessToken = () => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken ? `Bearer ${accessToken}` : '';
};

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = getAccessToken();
  return config;
});

instance.interceptors.response.use(
  (res) => {
    // undefined 출력.. 서버에서 접근 가능하도록 처리해주셔야 할듯
    // console.log('x-access-token:', res.headers['x-access-token']);

    // access 토큰 만료된 경우 서버에서 'X-Access-Token' 헤더로 재발급된 토큰 전송
    if ('x-access-token' in res.headers) {
      const newToken = res.headers['x-access-token'];
      localStorage.setItem('accessToken', newToken);
    }
    return res;
  },
  (error) => {
    // 401: access 토큰이 없는 경우, 403: refresh 토큰이 없는 경우
    if (error.response?.status === 401) {
      localStorage.removeItem('accessToken');

      // 로그인 페이지로 리다이렉트
      alert('로그인이 필요합니다.');
      window.location.replace('/login');
    }
    return Promise.reject(error);
  },
);

export default instance;

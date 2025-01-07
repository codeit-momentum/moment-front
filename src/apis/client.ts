import axios from 'axios';

const BASE_URL = '';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;

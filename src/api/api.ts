import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8002/test',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  response => response,
  error => {
    // Обработка ошибок
    console.error('Error:', error);
    return Promise.reject(error);
  }
)

export default api;

export const userId = 100; // Заглушка для запросов
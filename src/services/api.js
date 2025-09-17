import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.pagos-bob-subastas.com/v1', // Reemplazar con la URL real de tu API
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;

import api from './api';

export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    // Simulación de respuesta de la API para la demo
    const { token, user } = response.data || {
      token: 'fake-token-12345',
      user: {
        id: 'user-1',
        name: credentials.username,
        role: credentials.username === 'admin' ? 'admin' : 'user',
      },
    };
    localStorage.setItem('token', token);
    return user;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

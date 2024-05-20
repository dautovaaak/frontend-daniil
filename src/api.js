import axios from 'axios';

const baseURL = 'http://localhost:3001';

const api = axios.create({
  baseURL,
});

export const createUser = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await api.post('/login', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
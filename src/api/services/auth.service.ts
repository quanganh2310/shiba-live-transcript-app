import axios from 'axios';

const API_URL = 'https://reqres.in/api/';

const register = async (email: string, password: string) => {
  const response = await axios.post(API_URL + 'register', {
    email,
    password,
  });
  return response.data;
};

const login = async (email: string, password: string) => {
  const response = await axios.post(API_URL + 'login', {
    email,
    password,
  });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify({ email, token: response.data.token }));
  }
  return { email, token: response.data.token };
};

const logout = (): void => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;

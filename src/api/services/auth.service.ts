import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
  async login(username: string, password: string): Promise<any> {
    const response = await axios.post(API_URL + 'signin', {
      username,
      password,
    });
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  register(username: string, email: string, password: string): Promise<any> {
    return axios.post(API_URL + 'signup', {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();

import axios from 'axios';
const API_URL = 'https://web-demo.online/login';

class AuthService {
  login(user) {
    return axios
      .post(API_URL, {
        email: user.email,
        password: user.password
      },
      {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
})
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();
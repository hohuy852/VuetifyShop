import axios from 'axios';
import api from './api'

 import TokenService from './token.service'
const API_URL = 'https://web-demo.online/'
class AuthService {
  login(user) {
    return api
      .post('login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.access_token) {
          TokenService.setUser(response.data)
          // localStorage.setItem('user', JSON.stringify(response.data));
          //console.log(localStorage)
         
        }
        return response.data;
      });
    // .then(function (response) {
    //   console.log(response);
    // })
  }
  logout() {
    return axios
      .post(API_URL + 'logout')
      .then(TokenService.removeUser())
    //   .then(localStorage.removeItem('user'))
    
  }

  register(user) {
    return axios
      .post(API_URL + 'register', {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password
      })
  }
}

export default new AuthService();
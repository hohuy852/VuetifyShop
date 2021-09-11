export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.access_token) {
        return { 'x-access-token': user.access_token };
    } else {
      return {};
    }
  }
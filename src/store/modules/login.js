import axios from "axios";
const state = {
  
}
const actions = {
    
}
const mutations = {
    login() {
        axios.post("https://demo-tttn.herokuapp.com/login", {
            email: this.email,
            password: this.password,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
}
const getters = {
    users: state => state.users
}
export default {
    
    state,
    actions,
    mutations,
    getters
}
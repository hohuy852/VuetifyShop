import axios from "axios"
const API_URL = 'https://web-demo.online/'

const state = {
    sendSuccess: false,
}
const actions = {
    sendRequest({commit}, email){
        return axios
        .post(API_URL + 'resetPassword', {
            email: email
        })
        .then(commit('SEND_SUCCESS'))
        .catch(error => console.log(error))
    }
}
const mutations = {
    SEND_SUCCESS(state){
       state.sendSuccess = true
    }
}
const getters = {

  
  
}
export default {
    state,
    actions,
    mutations,
    getters
}
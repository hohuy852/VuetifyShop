import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import SocketIO from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

// export const SocketInstance = socketio('https://web-demo.online/');

Vue.use(new VueSocketIO({
  connection: SocketIO('https://web-demo.online/'), //options object is Optional
  vuex: {
    store,
    actionPrefix: "SOCKET_",
    mutationPrefix: "SOCKET_"
  }
}))

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

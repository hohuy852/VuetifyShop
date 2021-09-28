import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import { Tabs, Tab } from 'vue-tabs-component';
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
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

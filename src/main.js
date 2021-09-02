import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import {Tabs, Tab} from 'vue-tabs-component';

Vue.component('tabs', Tabs);
Vue.component('tab', Tab);

// Vue.config.productionTip = false
// Vue.http.options.credentials = true;

// Vue.http.options.xhr = {
//   withCredentials: true
// }
// Vue.http.options.emulateJSON = true
// Vue.http.options.emulateHTTP = true
// Vue.http.options.crossOrigin = true

// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
// Vue.http.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
// Vue.http.headers.common['Accept'] = 'application/json, text/plain, */*'
//Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'
new Vue({
  
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

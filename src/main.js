import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vuelidate from 'vuelidate'
import axios from 'axios'

import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import GoogleLogin from 'vue-google-login';
//import FBSignInButton from 'vue-facebook-signin-button'
import facebookLogin from 'facebook-login-vuejs';


Vue.use(Vuelidate);
Vue.use(DatePicker)
Vue.use(GoogleLogin)
//Vue.use(FBSignInButton)
Vue.use(facebookLogin)
//Vue.use(VueCtkDateTimePicker);
Vue.config.productionTip = false
// Vue.config.devtools = true
window.onerror = function(message, source, line, column, error) {
  console.log('ONE ERROR HANDLER TO RULE THEM ALL:', message);
}
Vue.config.productionTip = false;
Vue.config.devtools = false;

Vue.config.errorHandler = function(err, vm, info) {
  console.log(`Error: ${err.toString()}\nInfo: ${info}`);
}
Vue.config.warnHandler = function(msg, vm, trace) {
  console.log(`Warn: ${msg}\nTrace: ${trace}`);
}

axios.defaults.headers.get['Accepts'] = 'application/json';
axios.defaults.baseURL = 'https://i-gofer.herokuapp.com';
axios.interceptors.request.use(config => {
  return config
})
axios.interceptors.response.use(response => {
  return response
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

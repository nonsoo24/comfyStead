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
import FBSignInButton from 'vue-facebook-signin-button'


Vue.use(Vuelidate);
Vue.use(DatePicker)
Vue.use(GoogleLogin)
Vue.use(FBSignInButton)
//Vue.use(VueCtkDateTimePicker);
Vue.config.productionTip = false

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

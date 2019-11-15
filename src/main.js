import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vuelidate from 'vuelidate'
import axios from 'axios'


Vue.use(Vuelidate);
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

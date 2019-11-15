import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Services from '../views/Services.vue'
import LogIn from '../components/LogIn.vue'
import SignUp from '../components/SignUp.vue'
import JoinAsPro from '../components/JoinAsPro.vue'
import Store from '../views/Store.vue'
import  Request from '../components/Request.vue'
import Customer from '../components/IgoferAccount/CustomerAccount/Customer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: HomePage
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/store',
    name: 'store',
    component: Store
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/join',
    name: 'join',
    component: JoinAsPro
  },

  {
    path: '/request',
    name: 'request',
    component: Request
  },

  // User Account
  {
    path: '/customer',
    name: 'customer',
    component: Customer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

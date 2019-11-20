import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Services from '../views/Services.vue'
import LogIn from '../components/LogIn.vue'
import SignUp from '../components/SignUp.vue'
import JoinAsPro from '../components/JoinAsPro.vue'
import Store from '../views/Store.vue'
import  TaskDescription from '../components/TaskDescription.vue'
import  RequestQuote from '../components/RequestQuote.vue'
import Customer from '../components/IgoferAccount/CustomerAccount/Customer.vue'
import VerifyEmail from '../components/VerifyEmail.vue'
import CompleteBooking from '../components/CompleteBooking.vue'

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
    path: '/task-description',
    name: 'task-description',
    component: TaskDescription
  },

  {
    path: '/request-a-quote',
    name: 'request-a-quote',
    component: RequestQuote
  },

  {
    path: '/complete-booking',
    name: 'complete-booking',
    component: CompleteBooking
  },

  // User Account
  {
    path: '/customer',
    name: 'customer',
    component: Customer
  },

  {
    path: '/verify-email',
    name: 'verify-email',
    component: VerifyEmail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

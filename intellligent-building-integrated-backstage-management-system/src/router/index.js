import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/loginBg.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})

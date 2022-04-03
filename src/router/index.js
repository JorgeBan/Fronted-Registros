import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: SignIn
  },
  {
    path: '/register',
    name: 'register',
    component: SignUp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  let authenticated = to.matched.some(record => record.meta.requiresAuth)
  if(authenticated && !token) {
    next('/login')
  }else if(!authenticated && token) {
    next('/')
  }else {
    next()
  }
})

export default router

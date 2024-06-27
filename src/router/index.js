import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    // name: 'DefaultLayout',
    component: () => import('../layouts/BlankLayout'),
    children: [
      {
        path: '/',
        name: 'LoginPage',
        component: () => import('../views/auth/Login')
      }
    ] 
  },
  {
    path: '',
    // name: 'DefaultLayout',
    component: () => import('../layouts/DefaultLayout'),
    children: [
      {
        path: '/home',
        name: 'HomePage',
        component: () => import('../views/HomeView')
      },
      {
        path: '/about',
        name: 'AboutPage',
        component: () => import('../views/AboutView')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

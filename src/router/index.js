import Vue from 'vue'
import VueRouter from 'vue-router'

// Import Admin LTE CSS and JS files
import 'admin-lte/plugins/jquery/jquery.min.js'
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js'
import 'admin-lte/plugins/fontawesome-free/css/all.min.css'
import 'admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
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
    component: () => import('../layouts/DefaultLayout'),
    children: [
      {
        path: '/role',
        name: 'RolePage',
        component: () => import('../views/RoleView')
      },
      {
        path: 'dashbord',
        name: 'DashboardPage',
        component: () => import('../views/DashboardView')
      },
      {
        path: 'Create',
        name: 'CreatePage',
        component: () => import('../views/Create')
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

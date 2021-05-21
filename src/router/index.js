import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '@/views/Register.vue'
import Dashboard from '@/views/Dashboard.vue'
import Users from '@/views/Users/Users.vue'
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile/Profile.vue'
import AddUser from '@/views/Users/AddUser.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requriesAuth: true }
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    meta: { requriesAuth: true }
  },
  {
    path: '/addUser',
    name: 'AddUser',
    component: AddUser,
    meta: { requriesAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requriesAuth: true },
    children: [
      {
        path: ':id',
        component: Profile
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.requriesAuth)) {
    if (!loggedIn) {
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router

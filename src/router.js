import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PublicLayout from './views/layouts/PublicLayout'
import BlankPage from './views/BlankPage'
import Credit from './views/pages/Credit'
import Loan from './views/pages/Loan'
import Member from './views/pages/Member'
import User from './views/pages/User'
import Login from './views/pages/Login'
import WxLogin from './views/pages/WxLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/blankpage',
      component: BlankPage
    },
    {
      path: '',
      component: PublicLayout,
      children: [
        {
          path: '/credit', component: Credit, name: 'Credit', meta: { key: 0 }
        },
        { path: '/loan', component: Loan, name: 'Loan', meta: { key: 1 }
        },
        { path: '/member', component: Member, name: 'Member', meta: { key: 2 }
        },
        { path: '/user', component: User, name: 'User', meta: { key: 3 }
        }
      ]
    },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/wxlogin', component: WxLogin, name: 'WxLogin' },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

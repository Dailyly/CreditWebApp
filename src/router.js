import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PublicLayout from './views/layouts/PublicLayout'
import BlankPage from './views/BlankPage'
import Credit from './views/pages/Credit'
import Loan from './views/pages/Loan'
import Member from './views/pages/Member'
import User from './views/pages/User'

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
          path: '/credit',
          component: Credit,
          name: 'Credit'
        },
        {
          path: '/loan',
          component: Loan,
          name: 'Loan'
        },
        {
          path: '/loan',
          component: Member,
          name: 'Member'
        },
        {
          path: '/user',
          component: User,
          name: 'User'
        }
      ]
    },
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

import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/msite.vue'
import Order from '../pages/Order/order.vue'
import Profile from '../pages/Profile/profile.vue'
import Search from '../pages/Search/search.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/login',
      component: Login
    }
  ]

})

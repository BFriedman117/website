import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Admin from '@/components/Admin/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:tagType',
      name: 'Section',
      component: Home
    },
    {
      path: '/top-secret-admin-page',
      name: 'Admin',
      component: Admin
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/index.vue'
import Detail from '@/views/Detail/index.vue'
import Category from '@/views/Category/index.vue'
import Search from '@/views/Search/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
    },{
      path: '/test',
      name: 'detail',
      component: Detail
    },{
      path: '/category/:selected',
      name: 'category',
      component: Category
    },{
      path: '/search',
      name: 'search',
      component: Search
    },
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'frontpage',
    component: () => import('@/views/frontpage')
  },
  {
    path: '/scan',
    name: 'scan',
    component: () => import('@/views/scan')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('@/views/add')
  },
  {
    path: '/link',
    name: 'link',
    component: () => import('@/views/link')
  },
  {
    path: '/ota',
    name: 'ota',
    component: () => import('@/views/ota')
  },
  {
    path: '/date',
    name: 'date',
    component: () => import('@/views/date')
  },
  {
    path: '/lang',
    name: 'lang',
    component: () => import('@/views/lang')
  },
  {
    path: '*',
    name: 'frontpage',
    component: () => import('@/views/frontpage')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

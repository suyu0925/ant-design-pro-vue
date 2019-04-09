import Vue from 'vue'
import Router from 'vue-router'
import { BasicLayout, UserLayout } from '@/layouts'

Vue.use(Router)

const constantRouterMap = [
  {
    path: '/user',
    redirect: '/user/login',
    component: UserLayout,
    children: [{
      path: 'login',
      name: 'login',
      component: () => import(/* webpackChunkName: "user" */ '@views/user/Login')
    }]
  },
  {
    path: '/',
    name: 'index',
    redirect: '/dashboard/workplace',
    component: BasicLayout,
    meta: { title: '首页' },
    children: [
      {
        path: '/dashboard/workplace',
        name: 'workplace',
        component: () => import('@/views/dashboard/Workplace'),
        meta: { title: '工作台' }
      }
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@views/exception/404'),
    hidden: true
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

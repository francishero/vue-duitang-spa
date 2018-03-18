import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/article/:id',
      component: () => import('@/page/article/article')
    },
    {
      path: '/',
      name: 'Index',
      component: () => import('@/page/index.vue'),
      redirect: '/firstpage',
      children: [{
        path: '/firstpage',
        name: 'firstpage',
        component: () => import('@/page/home/firstpage'),
      }, {
        path: '/discovery',
        name: 'discovery',
        component: () => import('@/page/home/discovery'),
        
      }, {
        path: '/shop',
        name: 'shop',
        component: () => import('@/page/home/shop'),
      }, {
        path: '/mine',
        name: 'Mine',
        component: () => import('@/page/home/mine'),
      },{
        path: '/all',
        name: 'all',
        component: () => import('@/components/discovery/all'),
      }]
    }
  
  ],
  mode: 'history'
})

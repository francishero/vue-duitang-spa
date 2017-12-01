import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/article-video/:id',
    //   component: resolve => require(['@/page/article/article-video'], resolve)
    // },
    {
      path: '/article/:id',
      component: resolve => require(['@/page/article/article'], resolve)
    },
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/page/index.vue'], resolve),
      redirect: '/firstpage',
      children: [{
        path: '/firstpage',
        name: 'firstpage',
        component: resolve => require(['@/page/home/firstpage'], resolve),
      }, {
        path: '/discovery',
        name: 'discovery',
        component: resolve => require(['@/page/home/discovery'], resolve),
      }, {
        path: '/shop',
        name: 'shop',
        component: resolve => require(['@/page/home/shop'], resolve),
      }, {
        path: '/mine',
        name: 'Mine',
        component: resolve => require(['@/page/home/mine'], resolve),
      }]
    }

  ],
  mode: 'history'
})

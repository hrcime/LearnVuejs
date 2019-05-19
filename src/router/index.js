import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: () => import('@/views/Home.vue')
    // },
    { path: '/', redirect: '/getlink' },
    {
      path: '/getlink',
      name: 'Getlink',
      component: () => import('@/views/Getlink.vue')
    }
  ]
})

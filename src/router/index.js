import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', redirect: '/getlink' },
    {
      path: '/getlink',
      component: () => import('@/views/Getlink.vue'),
      children: [
        {
          path: '',
          name: 'getlink',
          component: () => import('@/components/Getlink/GetlinkForm')
        },
        {
          path: 'download/:id',
          name: 'download',
          component: () => import('@/components/Getlink/Download')
        }
      ]
    }
  ]
})

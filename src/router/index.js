import Vue from 'vue'
import Router from 'vue-router'
import storageService from '@/services/storage.service';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/getlink'
    },
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
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('@/views/Login'),
      meta:{
        public: true,
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '*',
      name: 'page-not-found',
      component: ()=> import('@/views/Notfound'),
      meta:{
        public: true
      }
    }
  ]
});

router.beforeEach((to, from, next)=>{
  const isPublic = to.matched.some(record => record.meta.public);
  const loggedIn = !!storageService.getToken();
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut);

  if(!isPublic && !loggedIn){
    return next({
      name: 'login',
      query: {
        redirect: to.fullPath
      }
    })
  }

  if (loggedIn && onlyWhenLoggedOut) {
    return next('/')
  }

  next()
});

export default router;

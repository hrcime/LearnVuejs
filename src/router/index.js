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
          component: () => import('@/components/Getlink/GetlinkForm'),
          meta: {
            title: "Get Link"
          }
        },
        {
          path: 'download/:id',
          name: 'download',
          component: () => import('@/components/Getlink/Download'),
          meta : {
            title: "Download"
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('@/views/Login'),
      meta:{
        public: true,
        onlyWhenLoggedOut: true,
        title: "Sign In"
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: ()=> import('@/views/Dashboard'),
      meta: {
        title: "Dashboard"
      }
    },
    {
      path: '*',
      name: 'page-not-found',
      component: ()=> import('@/views/Notfound'),
      meta:{
        public: true,
        meta: {
          title: "Page Not Found"
        }
      }
    }
  ]
});

router.beforeEach((to, from, next)=>{
  const isPublic = to.matched.some(record => record.meta.public);
  const loggedIn = !!storageService.getToken();
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut);
  if(to.meta.title){
    document.title = to.meta.title + " | Chiu^2";
  }

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

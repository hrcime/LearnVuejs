import Vue from 'vue'
import App from './App'
import router from './router';
import Vue_FB from '@/plugins/fb-sdk.js';
import ApiService from './services/api.service';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';

ApiService.init(process.env.API_SERVER);

Vue.use(Vue_FB, {
  appId: process.env.FB_APP_ID,
  version: process.env.FB_APP_VERSION
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

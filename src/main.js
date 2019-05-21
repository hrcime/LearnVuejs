import Vue from 'vue'
import App from './App'
import router from './router';
import ApiService from './services/api.service';
import firebase from 'firebase';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';

ApiService.init(process.env.API_SERVER);

const firebaseConfig = {
  apiKey: "AIzaSyATC0auIoPidiff203PH6VctcHPzyTaJV4",
  authDomain: "auth-4c86d.firebaseapp.com",
  databaseURL: "https://auth-4c86d.firebaseio.com",
  projectId: "auth-4c86d",
  storageBucket: "auth-4c86d.appspot.com",
  messagingSenderId: "216843255015",
  appId: "1:216843255015:web:263b353f6e859acf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

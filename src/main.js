import Vue from 'vue';
import './registerServiceWorker';
import NavBar from '@/components/NavBar.vue';
import router from './router';
import store from './store';
import '@/fontAwesomeIcons';
import App from './App.vue';

Vue.component('NavBar', NavBar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

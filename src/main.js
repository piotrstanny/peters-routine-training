import Vue from 'vue';
import './registerServiceWorker';
import NavBar from '@/components/NavBar.vue';
import SmallTextWithIcon from '@/components/SmallTextWithIcon.vue';
import router from './router';
import store from './store/store';
import '@/fontAwesomeIcons';
import App from './App.vue';
import 'nprogress/nprogress.css';

Vue.component('NavBar', NavBar);
Vue.component('SmallTextWithIcon', SmallTextWithIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

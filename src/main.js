import Vue from 'vue';
import './registerServiceWorker';
import NavBar from '@/components/NavBar.vue';
import SmallTextWithIcon from '@/components/SmallTextWithIcon.vue';
import router from './router';
import '@/fontAwesomeIcons';
import App from './App.vue';
import 'nprogress/nprogress.css';

Vue.component('NavBar', NavBar);
Vue.component('SmallTextWithIcon', SmallTextWithIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

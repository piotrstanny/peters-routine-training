import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlay,
  faRedoAlt,
  faBackspace,
  faStepForward,
  faStepBackward,
  faMinusSquare,
  faPlusSquare,
  faHome,
  faStopwatch,
  faUserAlt,
  faUsers,
  faPause,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import NavBar from '@/components/NavBar.vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

library.add(
  faPlay,
  faRedoAlt,
  faBackspace,
  faStepForward,
  faStepBackward,
  faMinusSquare,
  faPlusSquare,
  faHome,
  faStopwatch,
  faUserAlt,
  faUsers,
  faPause,
);

Vue.component('fa-icon', FontAwesomeIcon);
Vue.component('NavBar', NavBar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

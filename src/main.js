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
  faPause,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

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
  faPause,
);

Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

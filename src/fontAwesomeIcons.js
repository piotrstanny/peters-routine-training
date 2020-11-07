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
  faPlus,
  faHome,
  faStopwatch,
  faUserAlt,
  faUsers,
  faPause,
  faClock,
  faCalendarDay,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faPlay,
  faRedoAlt,
  faBackspace,
  faStepForward,
  faStepBackward,
  faMinusSquare,
  faPlusSquare,
  faPlus,
  faHome,
  faStopwatch,
  faUserAlt,
  faUsers,
  faPause,
  faClock,
  faCalendarDay,
  faList,
);
Vue.component('fa-icon', FontAwesomeIcon);

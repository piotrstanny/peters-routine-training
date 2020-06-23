import Vue from 'vue';
import Vuex from 'vuex';
import * as user from '@/store/modules/user';
import * as event from '@/store/modules/event';
import * as notifications from '@/store/modules/notifications';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    event,
    notifications,
  },
  state: {
    categories: [
      'socializing',
      'crossfit',
      'bike ride',
      'running',
    ],
  },
});

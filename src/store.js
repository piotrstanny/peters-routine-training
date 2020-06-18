import Vue from 'vue';
import Vuex from 'vuex';
import EventService from '@/services/EventService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: 'abc123',
      name: 'Piotr',
    },
    categories: [
      'socializing',
      'crossfit',
      'bike ride',
      'running',
    ],
    events: [],
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event);
      commit('ADD_EVENT', event);
    },
  },
  getters: {
    getEventById: (state) => (id) => state.events.find((event) => event.id === id),
  },
});

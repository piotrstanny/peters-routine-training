import Vue from 'vue';
import Vuex from 'vuex';
import EventService from '@/services/EventService';
import * as user from '@/store/modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
  },
  state: {
    categories: [
      'socializing',
      'crossfit',
      'bike ride',
      'running',
    ],
    events: [],
    event: {},
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_EVENT(state, event) {
      state.event = event;
    },
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event);
      });
    },
    fetchEvents({ commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then((response) => {
          commit('SET_EVENTS', response.data);
        })
        .catch((error) => {
          console.log(`There was an error: ${error}`);
        });
    },
    fetchEvent({ commit }, id) {
      EventService.getEvent(id)
        .then((response) => {
          commit('SET_EVENT', response.data);
        })
        .catch((error) => {
          console.log(`There was an error: ${error}`);
        });
    },
  },
  getters: {
    getEventById: (state) => (id) => state.events.find((event) => event.id === id),
  },
});

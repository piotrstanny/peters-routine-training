import EventService from '@/services/EventService';

export const namespaced = true;

/* eslint-disable import/prefer-default-export */
/* eslint-disable no-shadow */

export const state = {
  categories: [
    'socializing',
    'crossfit',
    'bike ride',
    'running',
  ],
  events: [],
  event: {},
};
export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event);
  },
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENT(state, event) {
    state.event = event;
  },
};
export const actions = {
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
};
export const getters = {
  getEventById: (state) => (id) => state.events.find((event) => event.id === id),
};

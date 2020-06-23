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
  createEvent({ commit, dispatch }, event) {
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event);
      const notification = {
        type: 'success',
        message: 'Your event has been created!',
      };
      dispatch('notifications/add', notification, { root: true });
    }).catch((error) => {
      const notification = {
        type: 'error',
        message: `There was a problem creating event: ${error.message}`,
      };
      dispatch('notifications/add', notification, { root: true });
      throw error;
    });
  },
  fetchEvents({ commit, dispatch }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then((response) => {
        commit('SET_EVENTS', response.data);
      })
      .catch((error) => {
        const notification = {
          type: 'error',
          message: `There was a problem fetching events: ${error.message}`,
        };
        dispatch('notifications/add', notification, { root: true });
      });
  },
  fetchEvent({ commit, dispatch }, id) {
    return EventService.getEvent(id)
      .then((response) => {
        commit('SET_EVENT', response.data);
        return response.data;
      })
      .catch((error) => {
        const notification = {
          type: error,
          message: `There was a problem fetching event: ${error.message}`,
        };
        dispatch('notifications/add', notification, { root: true });
      });
  },
};
export const getters = {
  getEventById: (state) => (id) => state.events.find((event) => event.id === id),
};

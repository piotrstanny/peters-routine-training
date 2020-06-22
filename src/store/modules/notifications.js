/* eslint-disable import/prefer-default-export */
/* eslint-disable no-shadow */
export const namespaced = true;

export const state = {
  notifictions: [],
};

const nextId = 1;

export const mutations = {
  PUSH(state, notification) {
    state.notifications.push({
      ...notification,
      id: nextId + 1,
    });
  },
  DELETE(state, notificationToRemove) {
    state.notifications = state.notifications.filter(
      (notification) => notification.id !== notificationToRemove.id,
    );
  },
};

export const actions = {
  add({ commit }, notification) {
    commit('PUSH', notification);
  },
  remove({ commit }, notificationsToRemove) {
    commit('DELETE', notificationsToRemove);
  },
};

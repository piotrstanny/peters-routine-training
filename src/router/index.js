/* eslint-disable no-param-reassign */

import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '*', redirect: '/' },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: ':details',
      name: 'SingleTimer',
      component: () => import(/* webpackChunkName: "timers" */ '../views/timers/SingleTimer.vue'),
    },
    {
      path: '/instant-timer',
      name: 'InstantTimer',
      component: () => import(/* webpackChunkName: "timers" */ '../views/timers/InstantTimer.vue'),
    },
    {
      path: '/thank-you',
      name: 'ThankYou',
      component: () => import(/* webpackChunkName: "timers" */ '../views/timers/ThankYou.vue'),
    },
    {
      path: '/timers-list',
      name: 'TimersList',
      component: () => import(/* webpackChunkName: "timers-list" */ '../views/timers/TimersList.vue'),
    },
  ],
});

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;

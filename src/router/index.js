import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import User from '../views/User.vue';

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
      path: '/user/:username',
      name: 'User',
      component: User,
      props: true,
    },
    {
      path: '/timers',
      name: 'Timers',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "timers" */ '../views/timers/Timers.vue'),
      children: [
        {
          path: '',
          name: 'TimersList',
          component: () => import(/* webpackChunkName: "timers" */ '../views/timers/TimersList.vue'),
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
      ],
    },
    {
      path: '/events-list',
      name: 'EventsList',
      component: () => import(/* webpackChunkName: "events" */ '../views/events/EventsList.vue'),
    },
    {
      path: '/event/:id',
      name: 'EventShow',
      component: () => import(/* webpackChunkName: "events" */ '../views/events/EventShow.vue'),
      props: true,
    },
    {
      path: '/create-event',
      name: 'EventCreate',
      component: () => import(/* webpackChunkName: "events" */ '../views/events/EventCreate.vue'),
    },
  ],
});

export default router;

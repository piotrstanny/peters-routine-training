import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/timers',
    name: 'Timers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "timers" */ '../views/Timers.vue'),
  },
  {
    path: '/single-timer',
    name: 'Single Timer',
    component: () => import(/* webpackChunkName: "timers" */ '../views/SingleTimer.vue'),
  },
  {
    path: '/my-stats',
    name: 'My Stats',
    component: () => import(/* webpackChunkName: "my-stats" */ '../views/MyStats.vue'),
  },
  { path: '*', redirect: '/' },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;

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
    component: () => import(/* webpackChunkName: "timers" */ '../views/timers/Timers.vue'),
    children: [
      {
        path: '',
        name: 'TimersList',
        component: () => import(/* webpackChunkName: "timers" */ '../views/timers/TimersList.vue'),
      },
      {
        path: ':id',
        name: 'SingleTimer',
        component: () => import(/* webpackChunkName: "timers" */ '../views/timers/SingleTimer.vue'),
      },
    ],
  },
  {
    path: '/my-stats',
    name: 'MyStats',
    component: () => import(/* webpackChunkName: "my-stats" */ '../views/MyStats.vue'),
  },
  { path: '*', redirect: '/' },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;

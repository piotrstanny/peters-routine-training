<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <router-link
      v-for="item in navbarItems"
      :key="item.id"
      :to="item.path"
      class="nav-item nav-link">
        <fa-icon :icon="item.icon" size="lg"></fa-icon>
        <div>{{ item.title }}</div>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarItems: [
        {
          id: '1',
          title: 'Home',
          icon: 'home',
          path: '/',
        },
        {
          id: '2',
          title: 'Interval Timer',
          icon: 'stopwatch',
          path: '/instant-timer',
        },
        {
          id: '3',
          title: 'Ready Timers',
          icon: 'list',
          path: '/timers-list',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
  nav.navbar {
    position: fixed;
    bottom: 0;
    left: auto;
    width: 100%;

    a {
      color: rgb(121, 121, 121);

      &:hover {
        color: rgb(0, 0, 0);
      }
      &.router-link-exact-active {
        color: black;
      }
    }
  }

  a.nav-item.nav-link {
    padding-top: 0;
    padding-bottom: 0;
  }
</style>

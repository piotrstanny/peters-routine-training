<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <router-link
      v-for="item in navbarItems"
      :key="item.id"
      :to="item.path"
      class="nav-item nav-link">
        <i :class="'fas ' + item.icon + ' fa-lg'"></i>
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
          icon: 'fa-home-lg-alt',
          path: '/',
        },
        {
          id: '2',
          title: 'Timers',
          icon: 'fa-stopwatch',
          path: '/timers',
        },
        {
          id: '3',
          title: 'My Stats',
          icon: 'fa-user-alt',
          path: '/my-stats',
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
    left: 0;
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

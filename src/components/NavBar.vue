<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <a class="nav-item nav-link" href="#">
        <i class="fas fa-user fa-lg"></i>
        <div>User</div></a>
      <router-link to="/" class="nav-item nav-link">
        <i class="fas fa-home-lg-alt fa-lg"></i>
        <div>Home</div>
      </router-link>
      <router-link to="/timers" class="nav-item nav-link">
        <i class="fas fa-stopwatch fa-lg"></i>
        <div>Timers</div>
      </router-link>
    </nav>
  </div>
</template>

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
</style>

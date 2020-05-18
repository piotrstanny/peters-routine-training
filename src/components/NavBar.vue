<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <a class="nav-item nav-link" href="#">
        <i class="fas fa-user fa-sm"></i>
        <div class="navbar-fontsize">User</div></a>
      <router-link to="/" class="nav-item nav-link">
        <i class="fas fa-home-lg-alt fa-sm"></i>
        <div class="navbar-fontsize">Home</div>
      </router-link>
      <router-link to="/timers" class="nav-item nav-link">
        <i class="fas fa-stopwatch fa-sm"></i>
        <div class="navbar-fontsize">Timers</div>
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

  .navbar-fontsize {
    font-size: .9rem;
  }

  a.nav-item.nav-link {
    padding-top: 0;
    padding-bottom: 0;
  }
</style>

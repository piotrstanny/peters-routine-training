<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <a class="nav-item nav-link active" href="#">A
        <i class="fas fa-home-lg-alt fa-2x"></i>ctive</a>
      <router-link class="nav-item nav-link" to="/">
        <i class="fas fa-home-lg-alt fa-2x"></i>
        Home
      </router-link>
      <router-link to="/timers" class="nav-item nav-link" href="#">
      <i class="fas fa-stopwatch fa-2x"></i>Timers</router-link>
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
      color: black;
    }
  }
</style>

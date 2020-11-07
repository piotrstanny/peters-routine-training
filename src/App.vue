<template>
  <div id="app">
    <div id="container">
      <transition name="fade-in">
        <router-view :key="$route.fullPath"/>
      </transition>
    </div>
    <!-- <NotificationContainer/> -->
    <NavBar/>
  </div>
</template>

<script>
// import NotificationContainer from '@/components/NotificationContainer.vue';

export default {
  components: {
    // NotificationContainer,
  },
};
</script>

<style lang="scss">
$bg-color: #1e2124;
$text-color: #f3f3f3;

* {
  max-width: 768px;
  margin: 0 auto;
}

body {
  background-color: $bg-color;
  margin: 0 auto;
}

#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
  font-size: .8rem;
}
@media (min-width: 576px) {
  #app {
    font-size: 1rem;
  }
}

#container {
  margin-bottom: 64px;
}

.fade-in-enter {
  opacity: 0;
}

.fade-in-enter-active {
  transition: opacity ease-out .4s;
}
</style>

<template>
  <div id="app">
    <Header/>
    <transition name="fade-in">
      <router-view/>
    </transition>
    <NavBar/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    Header,
    NavBar,
  },
};
</script>

<style lang="scss">
$bg-color: #1e2124;
$text-color: #f3f3f3;

body {
  background-color: $bg-color;
  margin: 0;
}

#app {
  height: 100vh;
  margin-bottom: 100px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
}

.fade-in-enter {
  opacity: 0;
}

.fade-in-enter-active {
  transition: opacity ease-out .4s;
}
</style>

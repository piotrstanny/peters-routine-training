<template>
  <div id="app">
    <Header/>
    <NavBar/>
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in .2s ease-in-out forwards;
  transition: opacity ease-out .2s;
}
@keyframes slide-in {
  from {
    transform: translateX(900px);
  }
  to {
    transform: translateX(0);
  }
}
</style>

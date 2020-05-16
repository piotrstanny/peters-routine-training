<template>
  <div id="app">
    <router-view/>
    <NavBar/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
$bg-color: #1e2124;

body {
  background-color: $bg-color;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f3f3f3;

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #c0c0c0;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

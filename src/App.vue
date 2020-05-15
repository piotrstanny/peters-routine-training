<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>

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

<template>
  <div>
    <Header/>
    <h3>Welcome Piotr,</h3>
    <h5>Choose from options below:</h5>
    <HomeOptions/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import HomeOptions from '@/components/HomeOptions.vue';

export default {
  components: {
    Header,
    HomeOptions,
  },
};
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
    padding: 0;
  }
</style>

<template>
  <div>
    <Header/>
    <h4>Welcome Piotr,</h4>
    <h6>Choose from options below:</h6>
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

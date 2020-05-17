<template>
  <div>
    <Header/>
    <h5>Welcome Piotr,</h5>
    <p>Choose from options below:</p>
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
</style>

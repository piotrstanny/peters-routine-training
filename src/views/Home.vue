<template>
  <div>
    <Header/>
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

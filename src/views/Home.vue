<template>
  <div>
    <h5>Welcome Piotr,</h5>
    <p>Choose from options below:</p>
    <HomeOptions/>
  </div>
</template>

<script>
import HomeOptions from '@/components/HomeOptions.vue';

export default {
  components: {
    HomeOptions,
  },
};
</script>

<style lang="scss" scoped>
</style>

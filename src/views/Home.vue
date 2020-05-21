<template>
  <div>
    <Header/>
    <h5>Welcome Piotr,</h5>
    <p>Choose from options below:</p>
    <HomeOptions/>
  </div>
</template>

<script>
import HomeOptions from '@/components/HomeOptions.vue';
import Header from '@/components/Header.vue';

export default {
  components: {
    HomeOptions,
    Header,
  },
};
</script>

<template>
  <div>
    <Header/>
    <div id="welcome">
      <h4>Welcome To Your<br>Training Assistant,</h4>
      <p>"Working out with timer<br>makes you accountable immidiately."</p>
      <p>Let's get it done!</p>
    </div>
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

<style lang="scss" scoped>
  #welcome {
    margin-top: 30vh;
    font-size: 1.2rem;
    text-shadow: 2px 2px 4px black;
  }
</style>

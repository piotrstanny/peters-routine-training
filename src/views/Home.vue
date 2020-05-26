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
  font-size: 1.2rem;
  text-shadow: 2px 2px 4px black;
  animation: appear 1.5s ease-out forwards;
  animation-delay: .5s;
  padding-top: 30vh;
  opacity: 0;
}

@keyframes appear {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>

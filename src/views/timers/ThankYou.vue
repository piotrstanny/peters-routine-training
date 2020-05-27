<template>
  <div>
    <Header/>
    <img class="bg-image" src="../../assets/bg-finished.jpg" alt="View at the empty gym">
    <div id="thankyou-text">
      <h3>Thank you for using my Training App.</h3><br>
      <h5>Stay strong and have a great day!</h5>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
#thankyou-text {
  animation: slide-down 1.2s ease-out forwards;
  text-shadow: 1px 1px 2px black;
}

@keyframes slide-down {
  from {
    padding-top: 25vh;
    opacity: 0;
  }

  to {
    padding-top: 35vh;
    opacity: 1;
  }
}

.bg-image {
  position: fixed;
  left: 0;
  // top: 100px;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: .3;
  object-fit: cover;
}
@media (min-width: 768px) {
  .bg-image {
    bottom: -50px;
  }
}
</style>

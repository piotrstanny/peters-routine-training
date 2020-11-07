<template>
  <div id="home-bg">
    <img class="bg-image" src="../assets/bg.jpg" alt="Woman working out">
  </div>
</template>

<script>
</script>

<style scoped lang="scss">

@media (min-width: 576px) {
  #home-bg {
    padding-top: 10px;
  }
}

.bg-image {
  position: absolute;
  left: 0%;
  right: 0%;
  top: 100px;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: .5;
  object-fit: cover;
}
@media (min-width: 768px) {
  .bg-image {
    bottom: -50px;
  }
}
</style>

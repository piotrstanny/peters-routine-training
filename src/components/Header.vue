<template>
  <div id="header">
    <img src="@/assets/logo.png" alt="Peter's Routine logo">
  </div>
</template>

<style scoped lang="scss">
#header {
    width: 100%;
    max-height: 120px;
    background-color: black;
    margin-bottom: 20px;

    img {
      max-height: 80px;
      margin: 20px 0 20px 0;
    }
  }

@media (min-width: 576px) {
  #header {
    max-height: 180px;

    img {
      max-height: 140px;
    }
  }
}
</style>

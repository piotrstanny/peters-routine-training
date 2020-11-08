<template>
  <div id="header">
    <a href="https://petersroutine.com/">
      <img src="@/assets/logo.png" alt="Peter's Routine logo">
    </a>
  </div>
</template>

<style scoped lang="scss">
#header {
    width: 100%;
    max-height: 110px;
    background-color: black;
    margin-bottom: 20px;

    img {
      max-height: 70px;
      margin: 15px 0;
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

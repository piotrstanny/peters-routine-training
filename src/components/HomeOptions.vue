<template>
  <div class="options">
    <div class="row row-cols-2 justify-content-center m-2">

      <div class="col-xs-5" v-for="option in options" :key="option">
        <div class="card bg-dark m-2">
          <a href="#">

          <div class="card-body">
            <i class="fas fa-stopwatch fa-4x"></i>
            <h5 class="card-title">{{ option }}</h5>
          </div>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ['Profile', 'Timers', 'Metronome Beat', 'Track Run'],
    };
  },
};
</script>

<style scoped lang="scss">
.options {
  padding-top: 50px;
}
</style>

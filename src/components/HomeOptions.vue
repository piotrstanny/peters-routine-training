<template>
  <div class="options">
    <div class="row row-cols-2 justify-content-center">

      <div class="col-xs-5" v-for="option in options" :key="option">
        <div class="card bg-dark">
          <div class="card-body">
            <h5 class="card-title">{{ option }}</h5>
            <a href="#" class="btn btn-primary">Choose</a>
          </div>
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
// .card-body {
//   background-color: rgb(43, 43, 43);
// }
.options {
  padding-top: 50px;
}
</style>

<template>
  <div class="options">
    <div class="row row-cols-2 justify-content-center m-2">

      <div class="col-xs-5" v-for="option in options" :key="option.id">
        <div class="card bg-dark m-2">
          <a href="#">

          <div class="card-body">
            <i :class="option.icon"></i>
          </div>
          <div class="card-footer">
            <h5 class="card-title">{{ option.title }}</h5>
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
      options: [
        {
          id: 1,
          title: 'Profile',
          icon: 'fas fa-user-alt fa-2x',
        },
        {
          id: 2,
          title: 'Timers',
          icon: 'fas fa-stopwatch fa-2x',
        },
        {
          id: 3,
          title: 'Metronome',
          icon: 'fas fa-drum fa-2x',
        },
        {
          id: 4,
          title: 'Track Run',
          icon: 'fas fa-running fa-2x',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.options {
  padding-top: 30px;
}
.bg-dark a {
  color: rgb(177, 177, 177);
}
</style>

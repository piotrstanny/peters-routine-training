<template>
  <div id="home-options">
    <div class="row row-cols-2 justify-content-center m-2">

      <div class="col-xs-5" v-for="option in options" :key="option.id">
        <div class="card bg-dark m-2">
          <router-link :to="option.link">

            <div class="card-body">
              <i :class="option.icon"></i>
            </div>
            <div class="card-footer">
              <h5 class="card-title">{{ option.title }}</h5>
            </div>
          </router-link>
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
          title: 'My Stats',
          icon: 'fas fa-user-alt fa-2x',
          link: '#',
        },
        {
          id: 2,
          title: 'Timers',
          icon: 'fas fa-stopwatch fa-2x',
          link: '/timers',
        },
        {
          id: 3,
          title: 'Metronome',
          icon: 'fas fa-drum fa-2x',
          link: '#',
        },
        {
          id: 4,
          title: 'Track Run',
          icon: 'fas fa-running fa-2x',
          link: '#',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
#home-options {
  padding-top: 10px;
}
.bg-dark a {
  color: rgb(130, 229, 247);


  &:hover {
    background-color:#47505a;
  }
}
</style>

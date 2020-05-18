<template>
  <div id="home-options">
    <div class="row row-cols-2 justify-content-center m-3">

      <div v-for="option in options" :key="option.id">
        <div class="card bg-dark m-2">
          <router-link :to="option.link">

            <div class="card-body">
              <i :class="'fas ' + option.icon + ' fa-lg'"></i>
            </div>
            <div class="card-footer">
              <p class="card-title">{{ option.title }}</p>
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
          title: 'Track Run',
          icon: 'fa-running',
          link: '#',
        },
        {
          id: 2,
          title: 'Metronome',
          icon: 'fa-drum',
          link: '#',
        },
        {
          id: 3,
          title: 'Settings',
          icon: 'fa-cog',
          link: '#',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">

.card-title {
  margin: 0;
  font-size: .8rem;
}

.bg-dark a {
  color: rgb(130, 229, 247);

  &:hover {
    background-color:#47505a;
  }
  &:focus, &:active {
    background-color:#444c55;
    color: rgb(97, 163, 175);
    outline: none;
    -webkit-box-shadow: inset 1px 1px 8px rgb(46, 46, 46);
    -moz-box-shadow:    inset 1px 1px 8px rgb(46, 46, 46);
    box-shadow:         inset 1px 1px 8px rgb(46, 46, 46);
  }
}

@media (min-width: 576px) {
  #home-options {
    padding-top: 10px;
  }

  .card-title {
  margin: 10px;
  font-size: 1rem;
  }
}
</style>

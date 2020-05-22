<template>
  <div id="home-options">

    <img class="bg-image" src="../assets/bg.jpg" alt="Woman working out">

    <!-- <div class="row row-cols-2 justify-content-center m-3">
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
    </div> -->
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

@media (min-width: 576px) {
  #home-options {
    padding-top: 10px;
  }

  // .card-title {
  // margin: 10px;
  // }
}

#img-container {
  width: 100%;
}
.bg-image {
  position: fixed;
  left: 0;
  // top: 100px;
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

.card-title {
  margin: 0;
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
</style>

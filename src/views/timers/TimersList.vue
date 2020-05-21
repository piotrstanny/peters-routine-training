<template>
  <div id="timers-list">
    <h4 style="text-align: center">List of your timers</h4>
    <div class="row row-cols-1 m-3">
      <router-link to="timers/Quick_Timer">
        <TimersPreviewTemplate>
        </TimersPreviewTemplate>
      </router-link>

      <router-link
      v-for="timer in timers"
      :key="timer.id"
      :to="'timers/' + timer.title"
      :timers="timers"
      >
        <TimersPreviewTemplate>
          <span slot="title">{{ timer.title }}</span>
          <span slot="description">{{ timer.description }}</span>
          <span slot="time">{{ timer.totalTime }}</span>
        </TimersPreviewTemplate>
      </router-link>
    </div>
  </div>
</template>

<script>
import TimersPreviewTemplate from '@/views/timers/TimersPreviewTemplate.vue';

export default {
  components: {
    TimersPreviewTemplate,
  },
  props: [
    'timers',
  ],
};
</script>

<style lang="scss" scoped>
@media (min-width: 576px) {
  #timers-list {
    padding-top: 10px;
  }
}
#timers-list {
  text-align: left;
  a {
  text-decoration: none;
  }
}
</style>

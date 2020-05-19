<template>
  <div id="timers-list">
    <div class="row row-cols-1 m-3">
      <TimersPreviewTemplate
      v-for="timer in timers"
      :key="timer.title"
      >
        <span slot="title">{{ timer.title }}</span>
        <span slot="description">{{ timer.description }}</span>
        <span slot="time">{{ timer.totalTime }}</span>
      </TimersPreviewTemplate>
    </div>
  </div>
</template>

<script>
import TimersPreviewTemplate from '@/components/timers/TimersPreviewTemplate.vue';

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
}
</style>

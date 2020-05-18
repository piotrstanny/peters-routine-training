<template>
  <div id="timers-list">
    <div class="row row-cols-1 m-3">
      <TimerPreviewTemplate v-for="timer in timers" :key="timer.title">
        <span slot="title">{{ timer.title }}</span>
        <span slot="description">{{ timer.description }}</span>
        <span slot="time">{{ timer.totalTime }}</span>
      </TimerPreviewTemplate>
    </div>
  </div>
</template>

<script>
import TimerPreviewTemplate from '@/components/timers/TimerPreviewTemplate.vue';

export default {
  components: {
    TimerPreviewTemplate,
  },
  data() {
    return {
      timers: [
        {
          title: 'Stretching',
          description: 'Split stretching and handstand hold',
          totalTime: '25:30',
        },
        {
          title: 'MetCon 1',
          description: 'Skipping with burpees and more',
          totalTime: '20:00',
        },
      ],
    };
  },
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

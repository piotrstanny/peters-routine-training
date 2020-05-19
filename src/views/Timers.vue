<template>
  <div>
    <h4>List of your timers</h4>
    <TimersList :timers="timers">
    </TimersList>
  </div>
</template>

<script>
import TimersList from '@/components/timers/TimersList.vue';

export default {
  components: {
    TimersList,
  },
  data() {
    return {
      timers: [
        {
          title: 'Stretching',
          description: 'Split stretching and handstand hold',
          totalTime: '25:30',
          path: 'single-timer',
        },
        {
          title: 'MetCon 1',
          description: 'Skipping with burpees and more',
          totalTime: '20:00',
        },
        {
          title: 'MetCon 2',
          description: 'Plyo - pushups, squat jumps and more',
          totalTime: '30:00',
        },
      ],
    };
  },
};
</script>

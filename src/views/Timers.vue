<template>
  <div>
    <h4>List of your timers</h4>
    <TimersListContent :timers="timers">
    </TimersListContent>
  </div>
</template>

<script>
import TimersListContent from '@/components/timers/TimersListContent.vue';

export default {
  components: {
    TimersListContent,
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

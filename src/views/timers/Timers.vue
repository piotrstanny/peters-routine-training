<template>
  <div>
    <router-view :timers="timers">
    </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timers: [
        {
          id: '01',
          title: 'Stretching',
          description: 'Split stretching and handstand hold',
          totalTime: '25:30',
        },
        {
          id: '02',
          title: 'MetCon 1',
          description: 'Skipping with burpees and more',
          totalTime: '20:00',
        },
        {
          id: '03',
          title: 'MetCon 2',
          description: 'Plyo - pushups, squat jumps and more',
          totalTime: '30:00',
          path: 'timers/single-timer3',
        },
      ],
    };
  },
};
</script>

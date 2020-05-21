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
          prepare: 5,
          exerciseRest: 20,
          roundRest: 90,
          noRounds: 5,
          exercises: [
            {
              id: 1,
              name: 'Front split left',
              duration: 45,
            },
            {
              id: 2,
              name: 'Front split right',
              duration: 45,
            },
            {
              id: 3,
              name: 'Side split',
              duration: 60,
            },
            {
              id: 4,
              name: 'Hand stand',
              duration: 45,
            },
          ],
          totalTime: this.totalTime(),
        },
        {
          id: '02',
          title: 'MetCon 1',
          description: 'Skipping with burpees and more',
          totalTime: '20:00',
        },
      ],
    };
  },
  methods: {
    totalTime() {
      return '28 min 30 sec';
    },
  },
};
</script>

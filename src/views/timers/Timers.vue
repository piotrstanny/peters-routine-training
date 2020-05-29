<template>
  <div>
    <router-view :timers="timers">
    </router-view>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      timers: [
        {
          id: '01',
          title: 'Title',
          description: 'Short description of the workout.',
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

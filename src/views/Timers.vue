<template>
  <div>
    <h4>List of your timers</h4>
    <TimersListContent/>
  </div>
</template>

<script>
import TimersListContent from '@/components/timers/TimersListContent.vue';

export default {
  components: {
    TimersListContent,
  },
};
</script>

<template>
  <div>
    <h4>List of your timers</h4>
    <SavedTimers/>
  </div>
</template>

<script>
import SavedTimers from '@/components/timers/SavedTimers.vue';

export default {
  components: {
    SavedTimers,
  },
};
</script>

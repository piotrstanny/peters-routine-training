<template>
  <div class="row justify-content-center m-4">
    <NotificationBar
    v-for="notification in notifications"
    :key="notification.id"
    :notification="notification"/>
  </div>
</template>

<script>
import NotificationBar from '@/components/NotificationBar.vue';
import { mapState } from 'vuex';

export default {
  components: {
    NotificationBar,
  },
  computed: mapState('notifications', ['notifications']),
};
</script>

<style lang="scss" scoped>
  .row {
    position: fixed;
    bottom: 80px;
    margin: 0 auto;
  }
</style>

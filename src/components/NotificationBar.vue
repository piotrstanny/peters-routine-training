<template>
  <div class="m-1" :class="notificationTypeClass">
    <h4 class="m-3">{{ notification.message }}</h4>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      timeout: null,
    };
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 5000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  computed: {
    notificationTypeClass() {
      return `-text-${this.notification.type}`;
    },
  },
  methods: mapActions('notifications', ['remove']),
};
</script>

<style scoped lang="scss">
div {
    border-radius: 10px;
}
.-text-error {
  color: red;
  background-color: rgb(255, 215, 215);
  border: 2px solid rgb(255, 134, 134);
}
.-text-success {
  color: green;
  background-color: rgb(221, 255, 221);
  border: 2px solid rgb(146, 255, 152);
}
</style>

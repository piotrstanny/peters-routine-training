<template>
  <div class="m-1" :class="notificationTypeClass">
    <p>{{ notification.message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  computed: {
    notificationTypeClass() {
      return `-text-${this.notification.type}`;
    },
  },
};
</script>

<style>
.-text-error {
  color: red;
}
.-text-success {
  color: green;
}
</style>

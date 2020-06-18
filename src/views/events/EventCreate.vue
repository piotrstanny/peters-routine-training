<template>
  <div class="container mt-5">
    <h1>Create New Event</h1>
    <p>Hello {{ userName }}!</p>
    <h4>Event's details:</h4>
    <p>Creator: {{ userName }}</p>
    <p>Creator's ID: {{ userId }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userName() {
      return this.$store.state.user.name;
    },
    userId() {
      return this.$store.state.user.id;
    },
  },
};
</script>

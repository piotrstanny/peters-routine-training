<template>
  <div class="container mt-5">
    <h1>Event: {{ event.title }}</h1>
    <p>Organizer: {{ event.organizer }}</p>
    <p>Description: {{ event.description }}</p>
    <h3>When?</h3>
    <p>Date: {{ event.date }}</p>
    <p>Time: {{ event.time }}</p>
    <h3>Attendees:</h3>
      <ul>
        <li v-for="attendee in event.attendees" :key="attendee">
          {{ attendee }}
        </li>
      </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  props: ['id'],
  created() {
    this.fetchEvent(this.id);
  },
  computed: mapState({
    event: (state) => state.event.event,
  }),
  methods: mapActions('event', ['fetchEvent']),
};
</script>

<style scoped>
  .container {
    text-align: left;
  }
</style>

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
import EventService from '@/services/EventService';

export default {
  props: ['id'],
  data() {
    return {
      event: {},
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((error) => {
        console.log(`There was an error: ${error}`);
      });
  },
};
</script>

<style scoped>
  .container {
    text-align: left;
  }
</style>

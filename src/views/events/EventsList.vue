<template>
  <div class="container mt-5">
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
    <h4>
      <router-link
      :to="{ name: 'EventCreate' }">Create New Event</router-link>
    </h4>
    <h4>
      <router-link
      :to="{ name: 'User', params: {username: 'Peter'} }">User's profile page
      </router-link>
    </h4>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService';

export default {
  components: {
    EventCard,
  },
  data() {
    return {
      events: [],
    };
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        console.log(`There was an error: ${error}`);
      });
  },
};
</script>

<style>

</style>

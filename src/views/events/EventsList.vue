<template>
  <div class="container mt-5">
    <h1>Events Listing</h1>
    <EventCard/>
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

export default {
  components: {
    EventCard,
  },
};
</script>

<style>

</style>

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
import { mapState } from 'vuex';

export default {
  components: {
    EventCard,
  },
  created() {
    this.$store.dispatch('fetchEvents', {
      perPage: 3,
      page: this.page,
    });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page, 10) || 1;
    },
    ...mapState(['events']),
  },
};
</script>

<style>

</style>

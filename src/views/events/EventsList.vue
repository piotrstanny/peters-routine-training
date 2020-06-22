<template>
  <div class="container mt-5">
    <h1>Current Events for {{ user.user.name }}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event"/>
    <template v-if="page!=1">
      <router-link :to="{ name: 'EventsList', query: { page: page - 1 } }" rel="prev">
        Prev Page
      </router-link>|
    </template>
    <router-link :to="{ name: 'EventsList', query: { page: page + 1 } }" rel="next">
      Next Page
    </router-link>
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
    this.$store.dispatch('event/fetchEvents', {
      perPage: 3,
      page: this.page,
    });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page, 10) || 1;
    },
    ...mapState(['event', 'user']),
  },
};
</script>

<style>

</style>

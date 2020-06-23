<template>
  <div class="container mt-5">
    <h2>Current Events for {{ user.user.name }}</h2>
    <EventCard v-for="event in event.events" :key="event.id" :event="event"/>
    <div class="row justify-content-center">
      <template v-if="page!=1">
        <router-link
        :to="{ name: 'EventsList', query: { page: page - 1 } }"
        rel="prev"
        type="button"
        class="btn btn-info m-1">
        <strong>Previous Page</strong>
        </router-link>
      </template>
      <router-link
      tag="button"
      :to="{ name: 'EventsList', query: { page: page + 1 } }"
      rel="next"
      type="button"
      class="btn btn-info m-1">
      <strong>Next Page</strong>
      </router-link>
    </div>

    <div class="row justify-content-center">
      <router-link
      tag="button"
      type="button"
      class="btn btn-warning m-2"
      :to="{ name: 'EventCreate' }">
      <fa-icon icon="plus" class="mr-1"></fa-icon>
      <strong>Create New Event</strong></router-link>
      <router-link
      tag="button"
      type="button"
      class="btn btn-warning m-2"
      :to="{ name: 'User', params: {username: 'Peter'} }">
      <fa-icon icon="user-alt" class="mr-1"></fa-icon>
      <strong>User's Profile Page</strong>
      </router-link>
    </div>
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

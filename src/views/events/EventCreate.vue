<template>
  <div class="container mt-5">
    <h1>Create New Event</h1>
    <form @submit.prevent="createEvent">
      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>
      <h3>Name and describe your event</h3>
      <div class="field">
        <label>Organizer: </label>
        <span> {{ event.user.name }}</span>
      </div>
      <div class="field">
        <label>Title</label>
        <input v-model="event.title" type="text" placeholder="Add an event title"/>
      </div>
      <div class="field">
        <label>Description</label>
        <input v-model="event.description" type="text" placeholder="Add a description"/>
      </div>
      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input v-model="event.location" type="text" placeholder="Add a location"/>
      </div>
      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <Datepicker v-model="event.date" placeholder="Select a date"></Datepicker>
      </div>
      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit"/>
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  components: {
    Datepicker,
  },
  data() {
    const times = [];
    for (let i = 1; i <= 24; i += 1) {
      times.push(`${i}:00`);
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createEventObject(),
    };
  },
  methods: {
    createEvent() {
      this.$store.dispatch('event/createEvent', this.event).then(() => {
        this.$router.push({
          name: 'EventShow',
          params: { id: this.event.id },
        });
        this.event = this.createEventObject();
      }).catch(() => {

      });
    },
    createEventObject() {
      const { user } = this.$store.state.user;
      const id = Math.floor(Math.random() * 10000);
      return {
        id,
        user,
        category: '',
        organizer: user.name,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: [],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.field {
  margin-bottom: 24px;
}
.container {
    text-align: left;
}
.vdp-datepicker {
  color: black;
}
</style>

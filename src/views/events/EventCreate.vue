<template>
  <div class="container mt-5">
    <form @submit.prevent="createEvent">

      <div class="card bg-dark m-1 mt-2">
        <div class="card-header font-weight-bold">
          Create New Event
        </div>
        <div class="card-body pt-1">

          <div class="form-group">
            <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm">
              Title:
            </label>
            <div class="row m-0">
              <input v-model="event.title" type="text" placeholder="Add an event title"/>
            </div>
          </div>

          <div class="form-group">
            <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm"
            >Select a category:</label>
            <div class="row m-0">
            <select v-model="event.category">
              <option v-for="cat in categories" :key="cat">{{ cat }}</option>
            </select>
            </div>
          </div>

          <div class="form-group">
            <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm">
              Description:
            </label>
            <div class="row m-0">
              <textarea
              cols="40"
              v-model="event.description"
              type="text"
              placeholder="Add a description..."/>
            </div>
          </div>

          <div class="form-group">
            <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm">
              Location:
            </label>
            <div class="row m-0">
              <input v-model="event.location" type="text" placeholder="Add a location"/>
            </div>
          </div>

          <div class="form-group">
            <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm">
              Date:
            </label>
            <div class="row m-0">
              <Datepicker v-model="event.date" placeholder="Select a date"></Datepicker>
            </div>
          </div>

          <div class="form-group">
            <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm">
              Select a Time:
            </label>
            <div class="row m-0">
              <select v-model="event.time">
                <option v-for="time in times" :key="time">{{ time }}</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            class="btn btn-block btn-info">
            <strong>Create Event</strong>
          </button>

        </div>
      </div>
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
    for (let i = 9; i <= 24; i += 1) {
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

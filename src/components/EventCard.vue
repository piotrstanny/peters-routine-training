<template>
  <router-link :to="{ name: 'EventShow', params: {id: '11'} }">
    <div class="card bg-dark mb-3">
      <div class="card-body p-3">
        <div class="justify-content-between d-flex">
          <small>Time: {{ event.time }}</small>
          <small>{{ event.date }}</small>
        </div>
        <section class="card-text pt-3">
          <h5 class="card-title">{{ event.title }}</h5>
          <div>
            <fa-icon icon="user-alt" class="mr-1"></fa-icon>
            {{ event.atendees.length }} people attending
          </div>
        </section>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      event: {
        id: 111,
        title: 'Bartlett Cross Training',
        date: 'Sat, 19th June 2020',
        time: '12:30 pm',
        atendees: [
          { id: 3, name: 'Lucia' },
          { id: 1, name: 'Piotr' },
          { id: 2, name: 'Doug' },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.card-body {
  color: #f3f3f3;

  &:hover {
    background-color:#47505a;
  }
  &:focus, &:active {
    background-color:#444c55;
    color: #b3b3b3;
    outline: none;
    -webkit-box-shadow: inset 1px 1px 8px rgb(46, 46, 46);
    -moz-box-shadow:    inset 1px 1px 8px rgb(46, 46, 46);
    box-shadow:         inset 1px 1px 8px rgb(46, 46, 46);
  }
  .card-text {
    text-align: left;
  }
}
</style>

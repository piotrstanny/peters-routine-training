<template>
  <div class="card bg-dark mb-3">
    <div class="card-body p-4">
      <div class="justify-content-between d-flex">
        <h5 class="card-title">
          <slot name="title">{{ event.title }}</slot>
        </h5>
        <small>{{ event.date }}</small>
      </div>
      <section class="card-text pt-3">
        <div>Time: {{ event.time }}</div>
        <div>How many people attending: {{ event.atendees.length }}</div>
      </section>
    </div>
  </div>
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

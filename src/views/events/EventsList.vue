<template>
  <div class="container mt-5">
    <h2>Events Listing</h2>
    <ul>
      <li><router-link :to="{ name: 'EventShow' }">Show Event #1</router-link></li>
      <li><router-link :to="{ name: 'EventShow' }">Show Event #2</router-link></li>
      <li><router-link :to="{ name: 'EventShow' }">Show Event #3</router-link></li>
    </ul>
    <h4>
      <router-link :to="{ name: 'EventCreate' }">Create New Event</router-link>
    </h4>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>

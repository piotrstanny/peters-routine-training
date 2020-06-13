<template>
  <div class="container mt-5">
    <h2>Events Listing</h2>
    <ul>
      <li><router-link :to="{ name: 'EventShow', params: {id: '11'} }">
        Show Event #1
      </router-link></li>
      <li><router-link :to="{ name: 'EventShow', params: {id: '12'} }">
        Show Event #2
      </router-link></li>
      <li><router-link :to="{ name: 'EventShow', params: {id: '13'} }">
        Show Event #3
      </router-link></li>
    </ul>
    <h4>
      <router-link :to="{ name: 'EventCreate' }">Create New Event</router-link><br><br>
      <router-link
      :to="{ name: 'User', params: {username: 'Peter'} }">User's profile page
      </router-link>
    </h4>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>

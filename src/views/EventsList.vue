<template>
  <div class="container mt-5">
    <h3>Events Listing</h3>
    <ul>
      <li v-for="(item, index) in 5" :key="index" style="text-align: left;">
        <p>Some events {{ index }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>

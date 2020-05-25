<template>
  <div class="container mt-5">
    <h3>Your profile metrics</h3>
    <p style="font-size: 1.3em">
      Functionality of your performance analytics is going to be built here
    </p>
    <ul>
      <li v-for="(item, index) in 5" :key="index" style="text-align: left;">
        <p>Some Statistics {{ index }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
</script>

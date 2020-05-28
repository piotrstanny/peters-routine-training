<template>
  <div class="container mt-5">
    <h3>Your profile</h3>
    <p style="font-size: 1.3em">
      Page under construction.
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

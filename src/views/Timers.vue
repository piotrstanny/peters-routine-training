<template>
  <div>
    <h2>List of your timers</h2>
    <ul>
      <li v-for="(timer, index) in 5" :key="index" style="text-align: left;">
        <p>Timer {{ index }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
</script>

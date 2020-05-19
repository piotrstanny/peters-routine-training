<template>
  <div>
    <h2>Analyze your progress, bla bla</h2>
    <ul>
      <li v-for="(item, index) in 5" :key="index" style="text-align: left;">
        <p>Statistics {{ index }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
</script>

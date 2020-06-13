<template>
  <div class="container mt-5">
    <h1>User details</h1>
    <p>This is {{ username }}'s page</p>
  </div>
</template>

<script>
export default {
  props: ['username'],
};
</script>

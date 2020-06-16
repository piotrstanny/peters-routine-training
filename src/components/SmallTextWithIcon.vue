<template>
  <div>
    <fa-icon :icon="name" class="mr-1"></fa-icon>
    <small><slot></slot></small>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
};
</script>

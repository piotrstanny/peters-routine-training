<template>
  <div>
    <Header/>
    <h2>List of your timers</h2>
    <NavBar/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    Header,
    NavBar,
  },
};
</script>

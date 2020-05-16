<template>
  <div>
    <Header/>
    <h2>List of your timers</h2>
    <ul>
      <li v-for="(timer, index) in 5" :key="index" style="text-align: left;">
        <p>Timer {{ index }}</p>
      </li>
    </ul>
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

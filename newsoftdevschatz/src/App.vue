<template>
  <div id = "app">
    <Navbar />
    <HomePage />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    HomePage,
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
}
</style>

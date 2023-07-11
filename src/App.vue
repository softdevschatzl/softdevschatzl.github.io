<template>
  <div id = "app">
    <HeadNavbar />
    <HomePage />
    <AboutPage />
    <ProjectsPage />
  </div>
</template>

<script>
import HeadNavbar from './components/HeadNavbar.vue';
import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import ProjectsPage from './components/ProjectsPage.vue';

export default {
  name: 'App',
  components: {
    HeadNavbar,
    HomePage,
    AboutPage,
    ProjectsPage,
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>

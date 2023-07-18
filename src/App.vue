<template>
  <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
  <div id = "app">
    <div class = "header-home">
      <div class = "head-navbar top">
        <HeadNavbar />
      </div>
      <div class = "home-page">
        <HomePage />
      </div>
      <div class = "head-navbar bottom">
        <HeadNavbar />
      </div>
    </div>
    <div class = "body">
      <div class = "about-page">
        <AboutPage />
      </div>
      <div class = "projects-page">
        <ProjectsPage />
      </div>
    </div>
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
  display: flex;
  flex-direction: column;
  font-family: 'Nova Flat', cursive;
  background-color: #013c50;
  height: 100vh;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 

.head-navbar.bottom {
  display: none;
  background-color: #53565a;
}

/* Desktop resolutions */
@media screen and (min-width: 768px) {
  #app {
    flex-direction: row;
  }

  .home-page {
    height: 50%;
    margin-top: -5em;
    margin-bottom: 5em;
  }

  .head-navbar.top {
    display: none;
  }
  .head-navbar.bottom {
    display: block;
    height: 70%;
  }

  .header-home {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
  }

}

</style>

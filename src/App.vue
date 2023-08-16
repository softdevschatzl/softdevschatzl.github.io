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

<!-- Essentially my global style sheet. -->
<style>
#app {
  display: flex;
  flex-direction: column;
  font-family: 'Nova Flat', cursive;
  background-color: #013c50;
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
} 

.home-page {
  margin-top: 100px;
}

.head-navbar.top {
  background-color: #53565a;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
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
    display: flex;
    height: 70%;
    text-align: center;
    width: auto;
  }

  .header-home {
    position: sticky;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 30vw;
  }
  /* .header-home::before,
  .header-home::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 10px;
  }
  .header-home::before {
    top: 0;
    background: linear-gradient(to bottom, #013c50, transparent);
  }
  .header-home::after {
    bottom: 0;
    background: linear-gradient(to top, #013c50, transparent);
  } */

  .about-page {
    min-height: 80vh;
  }
}

</style>

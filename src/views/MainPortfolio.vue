<template>
  <div class="main-portfolio">
    <div class="header-home">
      <div class="head-navbar top">
        <HeadNavbar />
      </div>
      <div class="home-page" id="top">
        <HomePage />
      </div>
      <div class="head-navbar bottom">
        <HeadNavbar />
      </div>
    </div>
    <div class="body">
      <div class="about-page" id="about">
        <AboutPage />
      </div>
      <div class="projects-page" id="projects">
        <ProjectsPage />
      </div>
      <div class="service-page" id="services">
        <ServicePage />
      </div>
      <div class="contact-page" id="contact">
        <ContactPage />
      </div>
    </div>
  </div>
</template>

<script>
import HeadNavbar from '../components/HeadNavbar.vue';
import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import ProjectsPage from '../components/ProjectsPage.vue';
import ServicePage from '../components/ServicePage.vue';
import ContactPage from '../components/ContactPage.vue';

export default {
  name: 'MainPortfolio',
  components: {
    HeadNavbar,
    HomePage,
    AboutPage,
    ProjectsPage,
    ServicePage,
    ContactPage,
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    // Essentially handling animations when an element is in the given viewport.
    handleScroll() {
      const elements = document.querySelectorAll("[data-v-scroll]");

      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isInViewport = 
          rect.top + rect.height * 0.7 <= window.innerHeight &&
          rect.bottom - rect.height * 0.7 >= 0;

        const animation = el.getAttribute("data-v-scroll");

        if (isInViewport && animation) {
          el.style.opacity = '1'; // Make the element visible.
          el.classList.add(animation); // Apply the given animation.
        }
      })
    }
  }
};
</script>

<style scoped>
.main-portfolio {
  display: flex;
  flex-direction: column;
  height: 100%;
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

.project-page {
  min-height: 80vh;
}

/* Desktop resolutions */
@media screen and (min-width: 768px) {
  .main-portfolio {
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

  .about-page {
    min-height: 80vh;
  }
}
</style>

<template>
  <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
  <div id = "app">
    <div class = "header-home">
      <div class = "head-navbar top">
        <HeadNavbar />
      </div>
      <div class = "home-page" id = "top">
        <HomePage />
      </div>
      <div class = "head-navbar bottom">
        <HeadNavbar />
      </div>
    </div>
    <div class = "body">
      <div class = "about-page" id = "about">
        <AboutPage />
      </div>
      <div class = "projects-page" id = "projects">
        <ProjectsPage />
      </div>
      <div class = "service-page" id = "services">
        <ServicePage />
      </div>
      <div class = "contact-page" id = "contact">
        <ContactPage />
      </div>
    </div>
  </div>
</template>

<script>
import HeadNavbar from './components/HeadNavbar.vue';
import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import ProjectsPage from './components/ProjectsPage.vue';
import ServicePage from './components/ServicePage.vue';
import ContactPage from './components/ContactPage.vue';

export default {
  name: 'App',
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

<!-- Essentially my global style sheet. -->
<style>
html {
  scroll-behavior: smooth;
}
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

.project-page {
  min-height: 80vh;
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

/* ANIMATIONS */

/* Fade-in */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide-in from left */
@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide-in from right */
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide-in from top */
@keyframes slideInTop {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide-in from bottom */
@keyframes slideInBottom {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* CLASSES FOR ANIMATIONS */
.fade-in {
  animation: fadeIn 1s forwards;
}
.fade-in-2 {
  animation: fadeIn 2s forwards;
}
.slide-in-left {
  animation: slideInLeft 1.8s forwards;
}
.slide-in-left-7 {
  animation: slideInLeft 1.5s forwards;
}
.slide-in-left-5 {
  animation: slideInLeft 1s forwards;
}
.slide-in-right {
  animation: slideInRight 1.8s forwards;
}
.slide-in-right-7 {
  animation: slideInRight 1.5s forwards;
}
.slide-in-right-5 {
  animation: slideInRight 1s forwards;
}
.slide-in-top {
  animation: slideInTop 1s forwards;
}
.slide-in-bottom {
  animation: slideInBottom 1s forwards;
}

[data-v-scroll] {
  opacity: 0;
}

@keyframes shake{
  0%, 44%, 100% {
      transform: rotate(0);
      text-shadow: 0 1px 0 rgb(0 0 0 / 0%);
  }
  2%, 42% {
      transform: rotate(5deg);
  }
  6%, 38% {
      transform: rotate(-10deg);
  }
  10%, 34% {
      transform: rotate(20deg);
  }
  14%, 22%, 30% {
      transform: rotate(-25deg);
      text-shadow: 0 1px 3px rgb(0 0 0 / 40%);
  }
  18%, 26% {
      transform: rotate(25deg);
  }
}

@keyframes rotateAnimation {
	from {transform: rotateY(0deg);}
	to {transform: rotateY(180deg);}
}
</style>

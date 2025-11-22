<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
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

/* GLOBAL SECTION STYLING */
.section-header {
  font-size: 2em;
  margin-bottom: 30px;
  color: #fff;
  font-weight: 700;
  text-align: center;
}

.section-subheader {
  font-size: 1.8em;
  margin-bottom: 20px;
  color: #fff;
  font-weight: 600;
  text-align: center;
}

.section-description {
  font-size: 1.1em;
  line-height: 1.6;
  color: #e8e8e8;
  margin-bottom: 30px;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Global card styling for consistency */
.card {
  background-color: #dddddd;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card h3, .card h4 {
  color: #2c3e50;
  font-weight: 600;
  margin-bottom: 15px;
}

.card h3 {
  font-size: 1.4em;
}

.card h4 {
  font-size: 1.3em;
}

.card p {
  color: #333;
  line-height: 1.5;
}

/* Technology tags styling */
.tech-tag {
  background-color: #3498db;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8em;
  font-weight: 500;
  display: inline-block;
  margin: 2px;
}

/* Double color background for sections */
.double-color-background {
  background: linear-gradient(to bottom right, #497285 10%, #53565a 25%, #53565a 70%, #013c50 85%);
}

/* Section container styling */
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  min-height: 70vh;
}

/* Responsive section headers */
@media only screen and (max-width: 767px) {
  .section-header {
    font-size: 2em;
  }
  
  .section-subheader {
    font-size: 1.5em;
  }
  
  .section-description {
    font-size: 1em;
  }
  
  .section {
    padding: 30px 15px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .section-header {
    font-size: 2.2em;
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

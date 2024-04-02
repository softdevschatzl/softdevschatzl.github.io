<!-- TODO:
 - Fix the order of the 'projectimage's so that Github lines up on each side.
 - Idk just make it look better.
-->
<template>
<div id="slider">
  <transition 
    tag="div" 
    :name="transitionName" 
    class="slides-group">
    <div v-if="show" 
      :key="current" 
      class="slide" 
      :class="slides[current].className">
      <h2>{{ slides[current].title }}</h2>
      <p>{{ slides[current].description }}</p>
      <div class = 'projectimages'>
        <div v-for="(image, index) in slides[current].images" :key="index" :class = "['image-wrapper']">
          <a 
            :href="slides[current].imageLinks[index]" 
            target="_blank" 
            rel="noopener noreferrer">
            <img 
              class="projectimage" 
              :src="image" 
              alt="Slide Image">
          </a>
        </div>
      </div>
    </div>
  </transition>
  <div 
    class="btn btn-prev" 
    :class="`slide-${current}`"
    aria-label="Previous slide" 
    @click="slide(-1, $event)">
    &#10094;
  </div>
  <div 
    class="btn btn-next" 
    :class="`slide-${current}`"
    aria-label="Next slide" 
    @click="slide(1, $event)">
    &#10095;
  </div>
</div>
</template>

<script>
import chromewebstore from '@/assets/availablechromewebstore.png';
import livesite from '@/assets/liveicon.png';
import githubdark from '@/assets/githubdark.svg';

export default {
  el: "#slider",
  data() {
    return {
        current: 0,
        direction: 1,
        transitionName: "fade",
        show: false,
        slides: [
          {
            className: "slide1",
            title: "Alexander's Rentals",
            description: "A website I made to simplify the process of finding a rental in the Boston area, used by a local brokerage and hundreds of clients. More features to come.",
            images: [livesite, githubdark],
            imageLinks: ["https://alexandersrentals.com", "https://github.com/softdevschatzl/alexanders-rentals"]
          },
          { 
            className: "slide2",
            title: "JumpCut",
            description: "A Chrome extension that makes Google search querying an experience you never knew you needed.",
            images: [chromewebstore, githubdark],
            imageLinks: ["https://chrome.google.com/webstore/detail/jumpcut/fdipgkkflkdlimaeojpkpkhbemlikkbm", "https://github.com/theschatzinator/JumpCut"]
          },
          { 
            className: "slide3",
            title: "React Website",
            description: "A website I made for a local music producer to showcase skills with React and general front-end development.",
            images: [livesite, githubdark],
            imageLinks: ["https://softdevschatzl.github.io/WTFIBWebsite/", "https://github.com/theschatzinator/WTFIBWebsite"]
          },
          // { className: "yellow" },
          // { className: "gray" },
          // { className: "green" },
          // { className: "cyan" },
          // { className: "brown" },
          // { className: "orange" }
        ]
    }
  },
  computed: {
    prevCurrent() {
      var len = this.slides.length;
      return (this.current + (-1 % len) + len) % len;
    },
    postCurrent() {
      var len = this.slides.length;
      return (this.current + (1 % len) + len) % len;
    },
  },
  methods: {
    slide(dir) {
      event.preventDefault();
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      var len = this.slides.length;
      this.current = (this.current + (dir % len) + len) % len;
    }
  },
  mounted() {
    this.show = true;
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Crimson+Text");

/* FADE IN */
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-from {
  opacity: 0;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter-from {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter-from {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}

.btn.slide-0 {
    border-color: #000;
    color: #000;
}

/* SLIDES CLASSES */
.slide1 {
  background-color: #aaaaaa; /* Legacy: #b4fdc0 */
}
.slide1 .projectimages {
  width: 75%;
}
.slide2 {
  background: #aaaaaa; /* Legacy: #013c50 */
}
.slide-2-image-2 {
  width: 25%;
}
.slide3 {
  background: #aaaaaa; /* Legacy: #f6b93b */
}
.yellow {background: #f6b93b;}
.gray {background: gray;}
.green {background: #b4fdc0;}
.cyan {background: cyan;}
.brown {background: brown;}
.orange {background: orange;}

.projectimages {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.projectimage {
  position: relative;
  transition: transform 0.3s ease-in-out;
}
.projectimage:hover {
  transform: scale(1.1);
}

/* SLIDER STYLES */
body {
  overflow: hidden;
  margin: 0;
  font-size: 50px;
  font-family: "Crimson Text", sans-serif;
  color: #fff;
}

#slider {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.slide {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 7vw;
}
.slide p {
  width: 70%;
}

.btn {
  z-index: 10;
  cursor: pointer;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 70px;
  position: absolute;
  top: calc(50% - 40px);
  left: 1%;
  transition: transform 0.3s ease-in-out;
  user-select: none;
}

.btn-next {
  left: auto;
  right: 1%;
}

.btn:hover {
  transform: scale(1.1);
  border: 3px solid #fff;
}
.image {
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;

    &.loaded {
      .image {
        &__item {
          visibility: visible;
          opacity: 1;
          border: 0;
        }

        &__spinner {
          display: none;
          width: 100%;
        }
      }
    }
  }

  &__item {
    width: 100%;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    opacity: 0;
    visibility: hidden;
  }
}

.ripple {
  display: inline-block;
  position: absolute;
  width: 64px;
  height: 64px;

  &__circle {
    position: absolute;
    border: 4px solid rgb(96, 208, 112);
    opacity: 1;
    border-radius: 50%;
    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  &__inner-circle {
    animation-delay: -0.5s;
  }
}

@keyframes ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}

/* Desktop view. */
@media only screen and (min-width: 768px ) {
  .slide {
    gap: 15px;
    height: 35vh;
  }
  #slider {
    height: 35vh;
    width: 90%;
  }
  .projectimage {
    height: 70px;
    width: auto;
  }

  .btn {
    top: calc(50% - 40px);
  }
}

/* Mobile view. */
@media only screen and (max-width: 767px) {
  #slider {
    width: 90%;
    height: 40vh;
  }
  .slide {
    height: 40vh;
    width: 100%;
    gap: 15px;
  }

  .btn {
    top: calc(50% - 40px)
  }

  .projectimage {
    height: 7vh;
    width: auto;
  }
}
</style>
<template>
<div id="slider">
  <transition tag="div" :name="transitionName" class="slides-group">
    <div v-if="show" :key="current" class="slide" :class="slides[current].className">
      
<!--       <image-item :source="photos[prevCurrent]"/> --><item-out>abc</item-out>
      <image-item :source="photos[current]" />
<!--       <image-item :source="photos[postCurrent]"/> -->
    </div>
  </transition>
  <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
    &#10094;
  </div>
  <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
    &#10095;
  </div>
</div>
</template>

<script>
const LazyLoadDirective = {
  inserted: el => {
    function loadImage() {
      const imageElement = Array.from(el.children).find(
        el => el.nodeName === "IMG"
      );

      if (imageElement) {
        imageElement.addEventListener("load", () => {
          setTimeout(() => el.classList.add("loaded"), 100);
        });
        imageElement.addEventListener("error", () => console.log("error"));
        imageElement.src = imageElement.dataset.url;
      }
    }

    loadImage();
  }
};

const ImageItem = {
  template: `
    <figure v-lazyload class="image__wrapper">
      <div class="image__spinner ripple">
        <div class="ripple__circle"></div>
        <div class="ripple__circle ripple__inner-circle"></div>
      </div>
      <img
        class="image__item"
        :data-url="source"
        alt="random image"
      />
    </figure>`,
  directives: { lazyload: LazyLoadDirective },
  props: {
    source: {
      type: String,
      required: true
    }
  }
};

const photosVals = [
  'http://via.placeholder.com/640x360',
  'https://www.fillmurray.com/640/360',
  'https://dummyimage.com/640x360/fff/aaa',
  'https://loremflickr.com/640/360',
  'https://placekitten.com/640/360',
  'https://baconmockup.com/640/360',
  'https://placebeard.it/640x360',
  'http://lorempixel.com/640/360'
];

const ItemIn = {
    template: `
        <span>
            <slot></slot>
        </span>`
};

const ItemOut = {
  components: { ItemIn },
  template: `
    <item-in>
      <slot></slot>
    </item-in>`
};

// Component export
export default {
  name: "ElementCarousel",
  components: {
    ImageItem,
    ItemOut
  },
  data() {
    return {
      current: 0,
      direction: 1,
      transitionName: "fade",
      show: false,
      photos: photosVals,
      slides: [
        { className: "slide1" },
        { className: "slide2" },
        { className: "slide3" },
        { className: "slide4" },
        { className: "slide5" },
        { className: "slide6" },
        { className: "slide7" },
        { className: "slide8" }
      ]
    };
  },
  computed: {
    prevCurrent() {
      var len = this.slides.length;
      return (this.current + (-1 % len) + len) % len;
    },
    postCurrent() {
      var len = this.slides.length;
      return (this.current + (1 % len) + len) % len;
    }
  },
  methods: {
    slide(dir) {
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
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Crimson+Text");

/* FADE IN */
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter {
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
.slide-prev-enter {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}

/* SLIDES CLASSES */
.slide1 {background-color: #b4fdc0;}
.slide2 {background: #4a69bd;}
.slide3 {background: #b4fdc0;}
.slide4 {background: #4a69bd;}
.slide5 {background: #b4fdc0;}
.slide6 {background: #4a69bd;}
.slide7 {background: #b4fdc0;}
.slide8 {background: #4a69bd;}

/* SLIDER STYLES */
body {
  overflow: hidden;
  margin: 0;
  font-size: 50px;
  font-family: "Crimson Text", sans-serif;
  color: #fff;
}

#slider {
  width: 100%;
  height: 50vh;
  position: relative;
}

.slide {
  width: 100%;
  height: 50vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  z-index: 10;
  cursor: pointer;
  border: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  position: absolute;
  top: calc(50% - 35px);
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
</style>
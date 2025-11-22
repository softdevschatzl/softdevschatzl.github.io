<template>
  <div class="modern-carousel">
    <div class="carousel-wrapper">
      <!-- Left Arrow -->
      <button 
        class="nav-btn nav-btn-prev" 
        @click="previousSlide"
        :disabled="slides.length <= 1"
        aria-label="Previous project">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>

      <!-- Main carousel container -->
      <div class="carousel-container">
        <!-- Main slide content -->
        <div class="slide-content">
          <div class="slide-header">
            <h2 class="slide-title">{{ currentSlide.title }}</h2>
            <div class="slide-counter">
              {{ current + 1 }} / {{ slides.length }}
            </div>
          </div>
          
          <p class="slide-description">{{ currentSlide.description }}</p>
          
          <div class="project-links">
            <a 
              v-for="(link, index) in currentSlide.imageLinks" 
              :key="index"
              :href="link" 
              target="_blank" 
              rel="noopener noreferrer"
              class="project-link"
              :class="getLinkClass(index)">
              <img 
                :src="currentSlide.images[index]" 
                :alt="getLinkTitle(index)"
                class="link-icon">
              <span>{{ getLinkTitle(index) }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Right Arrow -->
      <button 
        class="nav-btn nav-btn-next" 
        @click="nextSlide"
        :disabled="slides.length <= 1"
        aria-label="Next project">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </button>
    </div>

    <!-- Dot indicators -->
    <div class="indicators">
      <button 
        v-for="(slide, index) in slides" 
        :key="index"
        class="indicator"
        :class="{ active: index === current }"
        @click="goToSlide(index)"
        :aria-label="`Go to project ${index + 1}`">
      </button>
    </div>
  </div>
</template>

<script>
import chromewebstore from '@/assets/availablechromewebstore.png';
import livesite from '@/assets/liveicon.png';
import githubdark from '@/assets/githubdark.svg';

export default {
  name: 'ModernCarousel',
  data() {
    return {
      current: 0,
      slides: [
        {
          id: 1,
          title: "Alexander's Rentals",
          description: "A website I made to simplify the process of finding a rental in the Boston area, used by a local brokerage and hundreds of clients. With more features to come.",
          images: [livesite, githubdark],
          imageLinks: ["https://alexandersrentals.com", "https://github.com/softdevschatzl/alexanders-rentals"]
        },
        { 
          id: 2,
          title: "JumpCut",
          description: "A Chrome extension that makes Google search querying an experience you never knew you needed.",
          images: [chromewebstore, githubdark],
          imageLinks: ["https://chrome.google.com/webstore/detail/jumpcut/fdipgkkflkdlimaeojpkpkhbemlikkbm", "https://github.com/theschatzinator/JumpCut"]
        },
        { 
          id: 3,
          title: "React Website",
          description: "A website I made for a local music producer to showcase skills with React and general front-end development.",
          images: [livesite, githubdark],
          imageLinks: ["https://softdevschatzl.github.io/WTFIBWebsite/", "https://github.com/theschatzinator/WTFIBWebsite"]
        }
      ]
    }
  },
  computed: {
    currentSlide() {
      return this.slides[this.current];
    }
  },
  methods: {
    nextSlide() {
      console.log('Next slide clicked, current:', this.current);
      if (this.slides.length <= 1) return;
      this.current = (this.current + 1) % this.slides.length;
      console.log('New current:', this.current);
    },
    
    previousSlide() {
      console.log('Previous slide clicked, current:', this.current);
      if (this.slides.length <= 1) return;
      this.current = this.current === 0 ? this.slides.length - 1 : this.current - 1;
      console.log('New current:', this.current);
    },
    
    goToSlide(index) {
      console.log('Go to slide clicked, index:', index, 'current:', this.current);
      if (index === this.current) return;
      this.current = index;
      console.log('New current:', this.current);
    },
    
    getLinkClass(index) {
      const isLivesite = this.currentSlide.images[index] === livesite;
      const isGithub = this.currentSlide.images[index] === githubdark;
      const isChromeStore = this.currentSlide.images[index] === chromewebstore;
      
      return {
        'link-live': isLivesite,
        'link-github': isGithub,
        'link-chrome': isChromeStore
      };
    },
    
    getLinkTitle(index) {
      const image = this.currentSlide.images[index];
      if (image === livesite) return 'Live Site';
      if (image === githubdark) return 'GitHub';
      if (image === chromewebstore) return 'Chrome Store';
      return 'View Project';
    },
    
  },
  
  mounted() {
    console.log('Carousel mounted, slides:', this.slides.length);
  }
};
</script>

<style scoped>
.modern-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.carousel-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 900px; /* Slightly wider to accommodate arrows */
}

.carousel-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  min-height: 400px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  flex: 1; /* Take remaining space */
}

.slide-content {
  padding: 40px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #2c3e50;
}

.slide-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.slide-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
}

.slide-counter {
  background: linear-gradient(135deg, #013c50, #497285);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.slide-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.project-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  min-width: 120px;
  justify-content: center;
}

.project-link.link-live {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  color: white;
}

.project-link.link-github {
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: white;
}

.project-link.link-chrome {
  background: linear-gradient(135deg, #f093fb, #f5576c);
  color: white;
}

.project-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.link-icon {
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
}

/* Navigation buttons */
.nav-btn {
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  flex-shrink: 0; /* Don't shrink */
}

.nav-btn:hover:not(:disabled) {
  background: white;
  /* transform: translateY(-50%) scale(1.1); */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* Arrow positioning handled by flexbox now */

.nav-btn svg {
  width: 24px;
  height: 24px;
  color: #2c3e50;
}

/* Dot indicators */
.indicators {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: linear-gradient(135deg, #667eea, #764ba2);
  transform: scale(1.2);
}

.indicator:hover:not(.active) {
  background: rgba(255, 255, 255, 0.8);
  transform: scale(1.1);
}

/* Transition animations */
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active,
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-next-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-next-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

/* Responsive design */
@media (max-width: 768px) {
  .carousel-wrapper {
    gap: 15px;
  }
  
  .carousel-container {
    min-height: 350px;
  }
  
  .slide-content {
    padding: 30px 20px;
  }
  
  .slide-header {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
  
  .slide-title {
    font-size: 1.5rem;
  }
  
  .slide-description {
    font-size: 1rem;
  }
  
  .project-links {
    gap: 12px;
  }
  
  .project-link {
    padding: 10px 16px;
    font-size: 0.9rem;
  }
  
  .nav-btn {
    width: 45px;
    height: 45px;
  }
  
  .nav-btn svg {
    width: 20px;
    height: 20px;
  }
  
  .link-icon {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 480px) {
  .carousel-wrapper {
    gap: 10px;
  }
  
  .project-links {
    flex-direction: column;
    align-items: center;
  }
  
  .project-link {
    width: 100%;
    max-width: 200px;
  }
  
  .slide-content {
    padding: 20px 15px;
  }
  
  .nav-btn {
    width: 40px;
    height: 40px;
  }
}
</style>
<template>
    <div class = "wrapper" ref = "menuWrapper" @click = "toggleActive" :class = "{ active: isActive }">
        <p class = "click-text">
            {{ title }} <span class = "arrow"></span>
        </p>
        <div class = "content" :class = "{ active: isActive }">
          <div class = 'skills-lists'>
            <ul class="skill-list">
              <h3>Front-End</h3>
              <li v-for="frontEnd in frontEndItems" :key="frontEnd">{{ frontEnd }}</li>
            </ul>
            <ul class="skill-list">
              <h3>Back-End</h3>
              <li v-for="backEnd in backEndItems" :key="backEnd">{{ backEnd }}</li>
            </ul>
            <ul class="skill-list">
              <h3>Languages</h3>
              <li v-for="language in languages" :key="language">{{ language }}</li>
            </ul>
          </div>
          <!-- <div class="para">
            <p>{{ paragraph }}</p>
          </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'DialogueMenu',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
          isActive: false,
          frontEndItems: ['Vue.js', 'React', 'Tailwind', 'CSS/HTML'],
          backEndItems: ['MySQL', 'MongoDB', 'Node.js', 'Express.js'],
          languages: ['Javascript', 'C#/C++', 'Java', 'Python', 'Typescript']
        };
    },

    methods: {
        toggleActive(event) {
            this.isActive = !this.isActive;
            event.stopPropagation();
        },
        handleOutsideClick(event) {
          if (!this.$refs.menuWrapper.contains(event.target) && this.isActive) {
            this.isActive = false;
          }
        }
    },
    mounted() {
      window.addEventListener('click', this.handleOutsideClick);
    },
    beforeUnmount() {
      window.removeEventListener('click', this.handleOutsideClick);
    }
};
</script>

<style lang = "scss" scoped>
.skill-list {
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  opacity: 1;
  list-style-position: inside;
  margin-top: 10px;
  // width: 50%;
}
.skills-lists {
  display: flex;
  flex-direction: row;
  // flex-wrap: wrap;
  justify-content: center;
}

.para {
  text-align: center;
}

.content {
  top: 100%;
  left: 0;
  width: 100%;
  visibility: hidden;
  padding: 0;
  margin: 0;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: 0.4s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  transform: translateY(-100%);
  transition: transform 0.8s ease, opacity 2s ease, visibility 2s ease, max-height 0.8s;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

  &.active {
    transform: translateY(0);
    opacity: 1;
    max-height: 1000px;
    visibility: visible;
    padding: 20px;
  }
}
.wrapper {
  margin: 40px auto;
  width: 40vw;
  display: block;
  text-align: center;
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 1px, black);
  mask-image: linear-gradient(to bottom, transparent, black 1px, black);
  transition: 0.15s ease;

  &.active {
    .arrow {
      transform: rotate(45deg) translate(-5px,-5px);

      &:before {
        transform: translate(10px,0);
      }

      &:after {
        transform: rotate(90deg) translate(10px,0);
      }
    }

    ul {
      // opacity: 0.3;
      height: 108px;
    }
  }
}

.wrapper2 {
  ul {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  li {
    &:first-child {
      margin-top: 16px;
    }

    &:last-child {
      margin-bottom: 3px;
    }
  }

  &.active {
    ul {
      margin-top: 12px;
    }

    .arrow {
      transform: rotate(45deg) translate(38px,38px);
      opacity: 0.6;

      &:before {
        transform: translate(5px,0);
      }

      &:after {
        transform: rotate(90deg) translate(5px,0);
      }
    }
  }
}

.wrapper3 {
  .arrow {
    transform: rotate(0);
    left: 0;

    &:before, &:after {
      background-color: transparent;
      width: 3px;
      height: 10px;
      display: inline-block;
      position: absolute;
      border-bottom: 12px solid white;
      top: 0;
      left: 0;
      transform: rotate(0);
    }

    &:before {
      transform: rotate(-135deg);
    }

    &:after {
      transform: rotate(135deg);
    }
  }

  &.active {
    .arrow {
      transform: rotate(0);
      transform: translate(0, -6px);

      &:before {
        transform: rotate(-45deg);
      }

      &:after {
        transform: rotate(45deg);
      }
    }
  }
}

.arrow {
  width: 13px;
  height: 13px;
  // display: inline-block;
  position: relative;
  bottom: -5px;
  left: -10px;
  transition: 0.4s ease;
  margin-top: 2px;
  text-align: left;
  transform: rotate(45deg);
  float: right;

  &:before, &:after {
    position: absolute;
    content: '';
    display: inline-block;
    width: 12px;
    height: 3px;
    background-color: #fff;
    transition: 0.4s ease;
  }

  &:after {
    position: absolute;
    transform: rotate(90deg);
    top: -5px;
    left: 5px;
  }
}

.click-text {
  display: block;
  text-align: left;
  padding: 0 12px 16px;
  margin: 0;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: 0.15s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.6);
    border-bottom-color: rgba(255, 255, 255, 0.4);
  }
}

p {
  list-style-type: none;
  margin: 0 auto;
  padding: 4px 12px;
  text-align: left;
  cursor: pointer;
  color: white;

  &:first-child {
    margin-top: 12px;
  }

  &:last-child {
    margin-bottom: 12px;
  }
}

// Mobile view
@media only screen and (max-width: 767px) {
  .wrapper {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
  }
  .click-text {
    width: 100%;
  }
  .content {
    width: auto;
    flex-wrap: wrap;
    // font-size: 0.8em;
    padding: 0;
  }

  .skills-lists {
    flex-wrap: wrap;
  }
  .skill-list {
    width: 50%;
  }
}

</style>
<template>
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    <div id="sidemenu">
    <button class="sidemenu__btn" v-on:click="navOpen=!navOpen" v-bind:class="{active:navOpen}">
				<span class="top"></span>
				<span class="mid"></span>
				<span class="bottom"></span>
			</button>
    <transition name="translateX">
      <nav v-if="navOpen">
        <div class="sidemenu__wrapper">
          <ul class="sidemenu__list">
            <li class="sidemenu__item"><a href="#top" @click.prevent="navigateAndClose('#top')">Top</a></li>
            <li class="sidemenu__item"><a href="#about" @click.prevent="navigateAndClose('#about')">About</a></li>
            <li class="sidemenu__item"><a href="#projects" @click.prevent="navigateAndClose('#projects')">Projects</a></li>
            <li class="sidemenu__item"><a href="#services" @click.prevent="navigateAndClose('#services')">Services</a></li>
            <li class="sidemenu__item"><a href="#contact" @click.prevent="navigateAndClose('#contact')">Contact</a></li>
          </ul>
        </div>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  name: "HamBurger",
  data() {
    return {
      navOpen: false,
    };
  },
  methods: {
		navigateAndClose(target) {
			const element = document.querySelector(target);

			if (element) {
					const elementTopPosition = element.getBoundingClientRect().top;
					const navbarHeight = 75; // adjust as needed
					const offsetPosition = window.scrollY + elementTopPosition - navbarHeight;

					window.scrollTo({
							top: offsetPosition,
							behavior: "smooth"
					});
			}
			
			this.navOpen = false;
		}
  }
};
</script>

<style lang = "scss" scoped>
#sidemenu {
	nav {
		width: auto;
		// height: calc(100% - #{$headerHeight} - #{$footerHeight}); 
		background: #46465e;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		// box-shadow: 2px 0 3px$grey-6; 
		// overflow-y: scroll; 
	}

	.sidemenu {
		&__btn {
			display: block;
			width: 50px;
			height: 50px;
			background-color: transparent;
			border: none;
			position: relative;
			z-index: 100;
			appearance: none;
			cursor: pointer;
			outline: none;

			span {
				display: block;
				width: 20px;
				height: 2px;
				margin: auto;
				background: white;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				transition: all .8s ease;

				&.top {
					transform: translateY(-8px);
				}

				&.bottom {
					transform: translateY(8px);
				}
			}
			&.active{
				.top {
					transform: rotate(-45deg);
				}
				.mid{
					transform: translateX(-20px) rotate(360deg);
					opacity: 0;
				}
				.bottom {
					transform: rotate(45deg);
				}
			}

		}

		&__wrapper {
      padding-top: 75px;
    }

		&__list {
			padding-top: 50px;
      list-style:none;
      padding: 0;
      margin: 0;
		}

		&__item {
			a {
        text-decoration: none;
				line-height: 1.6em;
				font-size: 1.6em;
				padding: .5em;
				display: block;
				color: white;
				transition: .4s ease;

				&:hover {
					background: lightgrey;
					color: dimgrey;
				}
			}
		}
	}
}

.translateX-enter-active {
    transition: all .4s ease;
}

.translateX-leave-active {
    transition: all .4s ease;
}

.translateX-enter-from,
.translateX-leave-to {
    transform: translateX(-200px);
    opacity: 1;
}

.translateX-enter-to,
.translateX-leave-from {
    transform: translateX(0);
    opacity: 1;
}

@media screen and (min-width: 768px) {
    #sidemenu {
        nav {
            display: none;
        }
    }
}

</style>
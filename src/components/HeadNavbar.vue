<template>
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    <div class = "head-navbar">
        <nav>
            <div class = "hamburger">
                <HamBurger />
            </div>
            <ul class = "slide-in-left-5">
                <li :class="{ active: activeSection === 'about' }"><a href = "#about">About</a></li>
                <li :class="{ active: activeSection === 'projects' }"><a href = "#projects">Projects</a></li>
                <li :class="{ active: activeSection === 'services' }"><a href = '#services'>Services</a></li>
                <li :class="{ active: activeSection === 'contact' }"><a href = "#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
import HamBurger from './HamBurger.vue';

export default {
    name: 'HeadNavbar',
    data() {
        return {
            navOpen: false,
            activeSection: null,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        onScroll() {
            const sections = ['about', 'projects', 'services', 'contact'];
            let currentSection = null;

            sections.forEach(section => {
                const el = document.getElementById(section);
                const rect = el.getBoundingClientRect();

                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = section;
                }
            });

            this.activeSection = currentSection;
        }
    },
    components: {
        HamBurger,
    },
}
</script>

<style scoped>
.active a {
    text-decoration: underline;
}

nav {
    position: sticky;
    top: 0;
    z-index: 999;
    background: #013c50;
    padding: 1em;
}

nav ul {
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: space-around;
}

nav ul li {
    padding: 5px;
    /* border-radius: 7px; */
}

nav ul li a {
    position: relative;
    color: white;
    display: inline-block;
}

nav ul li a::before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgb(255, 255, 255);
    visibility: hidden;
    transition: all 0.3s ease-in-out;
}
nav ul li a:hover::before {
    visibility: visible;
    width: 100%;
}
nav ul li.active {
    border: 2px solid white;
    border-radius: 5px;
    transition: border-width 0.3s ease;
}
nav ul li:not(.active) {
    border: 2px solid transparent;
}

nav a {
    color: white;
    text-decoration: none;
}

/* Mobile view. */
@media screen and (max-width: 768px) {
    nav ul {
        display: none;
    }

    nav {
        background-color: #53565a;
        margin-bottom: -1px;
    }
}

/* Desktop view. */
@media screen and (min-width: 768px) {
    nav {
        background-color: #53565a;
    }

    nav ul li {
        width: auto;
    }

    nav ul li a {
        font-size: 1.2rem;
        color: rgb(255, 255, 255);
    }

    .hamburger {
        display: none;
    }
    
    nav ul {
        flex-direction: column;
        justify-content: space-between;
    }

    li {
        margin: 1em 0;
    }
}
</style>

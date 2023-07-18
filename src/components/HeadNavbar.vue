<template>
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    <div class = "head-navbar">
        <nav>
            <div class = "hamburger">
                <HamBurger />
            </div>
            <ul>
                <li><a href = "#">Top</a></li>
                <li><a href = "#">About</a></li>
                <li><a href = "#">Projects</a></li>
                <li><a href = "#">Contact</a></li>
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
        };
    },
    components: {
        HamBurger,
    },
}
</script>

<style scoped>
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
    padding: 0;
    display: flex;
    justify-content: space-around;
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
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: white;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
}
nav ul li a:hover::before {
    visibility: visible;
    width: 100%;
}

nav a {
    color: white;
    text-decoration: none;
}

@media screen and (max-width: 768px) {
    nav ul {
        display: none;
    }

    nav {
        background-color: transparent;
        margin-bottom: -1px;
    }
}

@media screen and (min-width: 768px) {
    nav {
        background-color: #53565a;
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

<template>
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    <div class = "projects double-color-background">
        <h1 data-v-scroll="fade-in">What I'm Working On</h1>
        <div class = "carousel" data-v-scroll = "slide-in-bottom">
            <ProjectCarousel />
        </div>
    </div>
</template>

<script>
import ProjectCarousel from './ElementCarousel.vue';

export default {
    name: 'ProjectsPage',
    components: {
        ProjectCarousel,
    },
    data() {
        return {
            name: 'John Schatzl',
            title: 'Projects',
        };
    },
};
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.projects {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    min-height: 70vh;
    background-color: #b4fdc0;
    padding-bottom: 4px;
}

.projects h1 {
    padding: 30px;
    font-size: 2em;
    color: #ffffff;
}

/* Mobile view. */
@media only screen and (max-width: 767px) {
    .double-color-background {
        background: linear-gradient(to bottom right, #53565a 25%, #497285 40%, #497285 60%, #53565a 75%);
    }
    
    .carousel {
        width: 90%;
        display: flex;
        justify-content: center;
    }
}

/* Desktop view. */
@media only screen and (min-width: 768px) {
    .double-color-background {
        height: 100%;

        background: linear-gradient(to bottom right, #013c50 25%, #497285 40%, #497285 60%, #53565a 75%);
    }
    .carousel {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 75vw;
        height: 100%;
        overflow: hidden;
        margin-top: 50px;
    }
}

@media only screen and (min-width: 1000px) {
    .carousel {
        height: 50vh;
        width: 50vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
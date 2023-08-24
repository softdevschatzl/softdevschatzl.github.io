<template>
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    <div class = "projects double-color-background">
        <h1>What I'm Working On</h1>
        <div class = "carousel">
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
.projects {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    height: 100%;
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
        background: linear-gradient(to bottom right, #53565a 25%, #013c50 40%, #013c50 60%, #53565a 75%);
    }
}

/* Desktop view. */
@media only screen and (min-width: 768px) {
    .double-color-background {
        height: 100%;

        background: linear-gradient(to bottom right, #013c50 25%, #4f8157 40%, #4f8157 60%, #53565a 75%);
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
    }
}
</style>
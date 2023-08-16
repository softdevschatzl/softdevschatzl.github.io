<template>
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    <div class = "projects double-color-background">
        <h1>What I'm Working On</h1>
    </div>
</template>

<script>
export default {
    name: 'ProjectsPage',
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
    text-align: center;
    height: 100%;
    background-color: #b4fdc0;
    min-height: 700px;
}

.projects h1 {
    padding: 30px;
    font-size: 2em;
    color: #000000;
}

@media only screen and (min-width: 768px) {
    .double-color-background {
            height: 100%;

            background: linear-gradient(to bottom right, #013c50 25%, #b4fdc0 40%, #b4fdc0 75%, #b4fdc0 90%);
        }
}
</style>
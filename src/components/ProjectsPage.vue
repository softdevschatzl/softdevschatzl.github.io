<template>
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    <div class = "projects">
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
}

/* .cloud-border { Didn't use this, might use it later.
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    height: auto;
    background: url('../assets/cloud_border.png') repeat-x;
    background-size: contain;
}
.cloud-border.top {
    transform: rotate(180deg);
    top: 0;
    bottom: auto;
} */

</style>
<template>
    <div class = "projects">
        <img src = "../assets/cloud_border.png" class = "cloud-border top" />
        <h1>What I'm Working On</h1>
        <img src = "../assets/cloud_border.png" class = "cloud-border" />
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
</style>
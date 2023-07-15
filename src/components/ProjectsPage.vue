<template>
    <div class = "projects">
        <div 
            v-if = "isTopVisible"
            class = "cloud-border top"
            v-observe-visibility = "topVisibilityChanged"
        ></div>
        <h1>What I'm Working On</h1>
        <div 
            v-if = "isBottomVisible"
            class = "cloud-border"
            v-observe-visibility = "bottomVisibilityChanged"
        ></div>
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

.cloud-border {
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
}

</style>
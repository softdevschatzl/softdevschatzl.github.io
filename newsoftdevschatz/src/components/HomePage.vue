<template>
    <div class = "home">
        <img :src="require('@/assets/profile.jpg')" alt = "Profile picture" />
        <h1>{{ name }}</h1>
        <p>{{ title }}</p>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            name: 'John Schatzl',
            title: 'Application/Web Developer',
        };
    };
};
</script>

<style scoped>
.home {
    text-align: center;
}

.home img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
}

.home h1 {
    margin: 0;
    font-size: 2em;
}

.home p {
    margin: 0;
    font-size: 1.2em;
    color: #666;
}
</style>

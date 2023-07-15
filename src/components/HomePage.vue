<template>
    <div class = "home">
        <div 
            class = "cloud-border top"
        ></div>
        <img :src="require('@/assets/profile.jpg')" alt = "Profile picture" class = "profile-picture" />
        <h1>{{ name }}</h1>
        <div class = "title-container">
            <p class = "title" v-for = "(title, index) in titles" :key = "index">{{ title }}</p>
        </div>
        <div 
            class = "cloud-border"
        ></div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            name: 'John Schatzl',
            titles: [
                'Student / Musician',
                'Web / Application Developer',
                'IT Technician',]
        };
    },
};
</script>

<style scoped>
/* This is where I implement the fade-in functionality for the cloud borders. */
.home {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    height: 100%;
    background-color: #009ccf;
    min-height: 700px;
    overflow: hidden;
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

.profile-picture {
    margin-bottom: 10px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid black;
    z-index: 2;
}

.home h1 {
    text-decoration: underline;
    margin-bottom: 50px;
    font-size: 1.5em;
    color: #000000;
    z-index: 2;
}

.title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    z-index: 2;
}

.title {
    display: flex;
    margin: 0;
    color: #ffffff;
    font-size: 1em;
    background-color: #53565a;
    padding: .7em;
    border-radius: 20px;
    border: 1px solid black;
    width: 80%;
    z-index: 2;
    min-height: 60px;
    align-items: center;
    justify-content: center;
}

/* Desktop resolution media query. */
@media screen and (min-width: 768px) {
    .home {
        min-height: 90vh;
    }

    .title-container {
        flex-direction: row;
    }

    .cloud-border {
        height: 100px;
        width: 100%;
    }

    .profile-picture {
        width: 250px;
        height: 250px;
    }

    .title {
        font-size: 1.2em;
        min-height: 80px;
    }
}
</style>

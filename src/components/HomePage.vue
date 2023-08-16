<template>
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    <div class = "home double-color-background">
        <h1><span> {{ name }} </span></h1>
        <div class = "socials">
            <a class = "social" href = "https://github.com/theschatzinator" target = "_blank">
                <img src = "../assets/github.svg">
            </a>
            <a class = "social" href = "https://www.linkedin.com/in/john-schatzl" target = "_blank">
                <img src = "../assets/linkedin.svg">
            </a>
        </div>
        <div class = "title-container">
            <p class = "title" v-for = "(title, index) in titles" :key = "index"><span> {{ title }} </span></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            name: 'John Schatzl',
            titles: [
                'Web / Application Developer',
                'IT Technician',]
        };
    },
};
</script>

<style scoped>
.home {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    text-align: center;
    height: 100%;
    min-height: 700px;
    overflow: hidden;
    margin-top: -50px;
}

.socials {
    width: 200px;
    display: flex;
    justify-content: center;
}
.social {
    width: 50px;
    margin-right: 20px;
    margin-left: 20px;
}

/* .cloud-border { Didn't want it, maybe will use it later.
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

.home h1 {
    margin-top: 100px;
    display: flex;
    font-size: 2em;
    color: #ffffff;
    z-index: 2;
    justify-content: center;
}
.home h1 span {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: .5em;
}

/** TODO: Add border animations for socials. */

    .home h1 span::before, h1 span::after {
        visibility: hidden;
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        transition: width 0.3s, height 0.3s ease-in-out;
    }
    .home h1 span::before {
        top: 0;
        left: 0;
        border-top: 2px solid #ffffff;
        border-left: 2px solid #ffffff;
    }

    .home h1 span::after {
        bottom: 0;
        right: 0;
        border-bottom: 2px solid #ffffff;
        border-right: 2px solid #ffffff;
    }
    .home h1 span:hover::before, .home h1 span:hover::after {
        visibility: visible;
        width: 100%;
        height: 100%;
    }

.title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    z-index: 2;
    margin-bottom: 100px;
}

.home h1 .title {
    width: auto;
}

.title {
    display: flex;
    margin: 0;
    color: #ffffff;
    font-size: 1em;
    padding: .7em;
    width: 100%;
    z-index: 2;
    min-height: 60px;
    align-items: center;
    justify-content: center;
}
.title span {
    position: relative;
    display: inline-block;
    padding: .5em;
}
.title span::before, .title span::after {
    visibility: hidden;
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    transition: width 0.3s, height 0.3s ease-in-out;
}
.title span::before {
    top: 0;
    left: 0;
    border-top: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
}

.title span::after {
    bottom: 0;
    right: 0;
    border-bottom: 2px solid #ffffff;
    border-right: 2px solid #ffffff;
}
.title span:hover::before, .title span:hover::after {
    visibility: visible;
    width: 100%;
    height: 100%;
}

.home h1 .title {
    width: auto;
}

@media screen and (max-width: 767px) {
    .double-color-background {
        height: 100%;

        background: linear-gradient(to bottom right, #53565a 10%, #013c50 25%, #013c50 70%, #53565a 85%);
    }
}

/* Desktop resolution media query. */
@media screen and (min-width: 768px) {
    .home {
        min-height: 90vh;
        background-color: #53565a;
    }

    .title {
        font-size: 1.2em;
        min-height: 80px;
        width: auto;
    }
}
</style>

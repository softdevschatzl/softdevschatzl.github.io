<template>
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    <div class = "about">
        <h1>{{ title }}</h1>
        <img :src="require('@/assets/profile.jpg')" alt = "Profile picture" class = "profile-picture" />
        <div class = "about-paras">
            <p class = "professional-p">Hello! I am a student at Southern 
                New Hampshire University studying Computer Science. I am also a
                freelance web developer and application developer, and have been 
                also working as an IT technician. For as long as I've known, I've 
                always been fascinated by computers and how so much can be housed 
                in such a relatively small device. Starting to program around the 
                end of high school, it allowed me to get a look behind the curtain
                and see how these machines work and I've fallen in love with it. 
                I've been working on projects ever since and I'm always looking 
                for new challenges and opportunities to learn and grow.
            </p>
            <p class = "personal-p">When I'm not getting work done, you can usually find me watching 
                movies, playing video games and reading. I also enjoy snowboarding, 
                occasionally making trips up to the mountains when the weather 
                calls for it, and fishing when it doesn't. I also enjoy traveling,
                having just gotten my passport last year, I am always looking to 
                add some miles and stamps to it. I also enjoy both listening to and 
                playing music, playing guitar since I was young and looking to 
                also play piano.
            </p>
        </div>
    </div>
</template>

<script>
import DialogueMenu from './DialogueMenu.vue';

export default {
    name: 'AboutPage',
    components: {
        DialogueMenu,
    },
    data() {
        return {
            name: 'John Schatzl',
            title: 'About Me',
        };
    },
};
</script>

<style scoped>
    /* This is where I implement the fade-in functionality for the cloud borders. */
    /* .cloud-border { Didn't use this, might use it later.
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
    } */

    h1 {
        margin-bottom: 25px;
        margin-top: 25px;
        font-size: 1.5em;
        color: #000000;
        padding: 10px;
    }

    .about {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        height: 100%;
        background-color: #53565a;
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

    .about-paras {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 75%;
    }

    .about-paras p {
        font-size: .8em;
        color: #ffffff;
        background-color: #666;
        border: 1px solid black;
        padding: 5px;
        border-radius: 10px;
    }

    @media only screen and (min-width: 768px) {
        h1 {
            color: white;
        }

        .about {
            background-color: #013c50;
        }

        .about-paras {
            flex-direction: row;
        }

        .professional-p,
        .personal-p {
            width: 50%;
            min-height: 150px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

</style>

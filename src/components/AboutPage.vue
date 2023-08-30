<template>
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    <div class = "about double-color-background">
        <div class = "fade-in" :data-v-scroll="isMobile ? 'fade-in' : ''">
            <h1>{{ title }}</h1>
            <div class="container">
                <img :src="require('@/assets/profile.jpg')" alt = "Profile picture" class = "profile-picture" />
                <!-- <img :src="require('@/assets/snowboard.png')" alt = "Profile picture" class = "profile-picture" /> -->
            </div>
            <p class = "header-p">I am a full-stack web and application developer.
                I enjoy creating immersive user interfaces as well as
                bulletproof, reliable back-end services.
            </p>
            <h2>{{ title2 }}</h2>
        </div>
        <div class = "dialogue-menu fade-in">
            <DialogueMenu 
                title = "More Professional"
                paragraph = "   I am a student at Southern 
                    New Hampshire University studying Computer Science. I am also a
                    freelance web developer and application developer, and have been
                    also working as an IT technician. Starting to program around the
                    end of high school, I started with Java and later moved on to
                    C, JavaScript, HTML/CSS and Python for almost anything I can imagine creating. Seeing
                    my work come to life with these tools has sparked a passion in me
                    to develop my skills and see what kinds of things I can make.
                    I have a plethora of experience working efficiently in teams 
                    to produce substantial progress and have no trouble working
                    with peers and clients alike. I am a great addition
                    to any environment, and look forward to seeing the impact
                    I have in this field."
            />
            <DialogueMenu 
                title = "More Personal"
                paragraph = "   When I'm not getting work done, you can usually find me watching
                    movies, playing video games and reading. I also enjoy snowboarding,
                    occasionally making trips up to the mountains when the weather
                    calls for it, and fishing when it doesn't. I also enjoy traveling,
                    having just gotten my passport last year, I am always looking to
                    add some miles and stamps to it. I also enjoy both listening to and
                    playing music, playing guitar since I was young and also trying to
                    learn piano."
            />
            <DialogueMenuSkills
                title = "Professional Skills"
            />
        </div>
    </div>
</template>

<script>
import DialogueMenu from './DialogueMenu.vue';
import DialogueMenuSkills from './DialogueMenuSkills.vue';

export default {
    name: 'AboutPage',
    components: {
        DialogueMenu,
        DialogueMenuSkills,
    },
    data() {
        return {
            name: 'John Schatzl',
            title: 'About Me',
            title2: 'More About Me',
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

    h2 {
        margin-bottom: 10px;
        font-size: 1.5em;
        padding: 10px;
        color: #000000;
    }

    .about {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #53565a;
        min-height: 100ch;
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

    .header-p {
        width: 100%;
        min-height: 150px;
        display: flex;
        justify-content: center;
        text-align: center;
        color: white;
        font-size: 15px;
        padding: 10px;
    }

    /* Mobile view. */
    @media screen and (max-width: 767px) {
        .double-color-background {
            height: 100%;

            background: linear-gradient(to bottom right, #013c50 20%, #53565a 35%, #53565a 75%, #013c50 90%);
        }

        .dialogue-menu {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            justify-content: center;
        }
    }

    /* Desktop view. */
    @media only screen and (min-width: 768px) {
        .double-color-background {
            height: 100%;

            background: linear-gradient(to bottom right, #53565a 15%, #013c50 25%, #013c50 75%, #4f8157 90%);
        }

        h1 {
            color: white;
        }

        h2 {
            color: white;
        }

        .about {
            background-color: #013c50;
            min-height: 100vh;
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

        .header-p {
            font-size: 1.1em;
        }

        .dialogue-menu {
            width: auto;
        }
    }

    /* 3D Flip Animation */
    /* .container img:nth-of-type(1){
        transform: perspective(2000px) rotateY(0deg);   
    }
    .container img:nth-of-type(2){
        transform: perspective(1000px) rotateY(-180deg);
    }
    .container:hover img:nth-of-type(1){
        transform: perspective(1000px) rotateY(180deg);   
    }
    .container:hover img:nth-of-type(2){
        transform: perspective(1000px) rotateY(0deg);
    } */

</style>

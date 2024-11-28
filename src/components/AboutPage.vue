<template>
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    <div class = "about double-color-background">
        <div :class="isMobile ? '' : 'fade-in-2'" :data-v-scroll="isMobile ? 'fade-in-2' : undefined">
            <h1>{{ title }}</h1>
            <div class="container">
                <img :src="require('@/assets/profile.png')" alt = "Profile picture" class = "profile-picture front-image" />
                <img :src="require('@/assets/snowboard.png')" alt = "Profile picture" class = "profile-picture back-image" />
            </div>
            <p class = "header-p">I am a full-stack web and application developer.
                I enjoy creating immersive UIs as well as
                bulletproof, reliable back-end services.
            </p>
            <h2>{{ title2 }}</h2>
        </div>
        <div class = "dialogue-menu fade-in">
            <DialogueMenu 
                class="pwrapper"
                title = "More Professional"
                paragraph = "I am a student at Southern 
                    New Hampshire University studying Computer Science. I have 
                    also been working as a Full-Stack Software Developer 
                    using ASP.NET Core for the backend, and ASP WebForms and Angular for the frontend.
                    While I have been involved in many projects, some notable ones include implementing
                    Elasticsearch to replace the dated direct SQL search for our products, designing new
                    home pages for many of the foreign brands, assisting in the planning and integration 
                    of our new ERP software with our current website infrastructure, and developing an 
                    internal survey app to allow sales reps to gauge a clients' needs in order to better 
                    their marketing strategies, which also generates Word documents with the resulting 
                    completed survey."
            />
            <DialogueMenu 
                class="pwrapper"
                title = "More Personal"
                paragraph = "When I'm not getting work done, you can usually find me watching
                    movies, playing video games and reading. I also enjoy snowboarding,
                    occasionally making trips up to the mountains when the weather
                    calls for it, and fishing when it doesn't. I also enjoy traveling, always looking to
                    add some miles and stamps to my passport. I also enjoy both listening to and
                    playing music, playing guitar since I was young and also trying to
                    learn piano."
            />
            <DialogueMenuSkills
                class="pwrapper"
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
    computed: {
        isMobile() {
            return window.innerWidth <= 767;
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.isMobile = window.innerWidth <= 767;
        }
    }
};
</script>

<style scoped>
    h1 {
        margin-bottom: 25px;
        margin-top: 25px;
        font-size: 1.5em;
        color: #ffffff;
        padding: 10px;
    }

    h2 {
        margin-bottom: 10px;
        font-size: 1.5em;
        padding: 10px;
        color: #ffffff;
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
        position: absolute;
        top: 0;
        left: 0;
        margin-bottom: 10px;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid rgb(255, 255, 255);
    }

    .fade-in {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        justify-content: center;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 40px;
        perspective: 1000px;
        width: 150px;
        height: 150px;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 1.5s ease-in-out;
    }
    .container:hover {
        transform: rotateY(180deg);
    }
    .front-image {
        transform: rotateY(0deg);
        backface-visibility: hidden;
    }
    .back-image {
        transform: rotateY(180deg);
        backface-visibility: hidden;
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

            background: linear-gradient(to bottom right, #013c50 20%, #53565a 35%, #53565a 75%, #497285 90%);
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

            background: linear-gradient(to bottom right, #53565a 15%, #013c50 25%, #013c50 75%, #497285 90%);
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
        .pwrapper {
            width: 80%;
        }
    }
</style>

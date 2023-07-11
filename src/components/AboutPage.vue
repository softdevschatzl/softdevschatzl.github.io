<template>
    <div class = "about">
        <img src = "../assets/cloud_border.png" class = "cloud-border top" />
        <h1>{{ title }}</h1>
        <div class = "about-paras">
            <p>Hello! Welcome to my webpage where I can showcase my skills, 
                projects and tell you about myself. I am a student at Southern 
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
            <p>When I'm not getting work done, you can usually find me watching 
                movies, playing video games and reading. I also enjoy snowboarding, 
                occasionally making trips up to the mountains when the weather 
                calls for it, and fishing when it doesn't. I also enjoy traveling,
                having just gotten my passport last year, I am always looking to 
                add some miles and stamps to it. I also enjoy both listening to and 
                playing music, playing guitar since I was young and looking to 
                also play piano.
            </p>
        </div>
        <img src = "../assets/cloud_border.png" class = "cloud-border" />
    </div>
</template>

<script>
export default {
    name: 'AboutPage',
    data() {
        return {
            name: 'John Schatzl',
            title: 'About Me',
        };
    },
};
</script>

<style scope>
    .cloud-border {
        /* position: absolute; */
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 1;
        object-fit: contain;
        height: auto;
    }
    .cloud-border.top {
        transform: rotate(180deg);
        top: 0;
        left: 0;
    }

    h1 {
        text-decoration: underline;
        margin-bottom: 25px;
        margin-top: 25px;
        font-size: 1.5em;
        color: #000000;
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

</style>

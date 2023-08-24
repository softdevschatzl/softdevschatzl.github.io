<template>
    <div class="contact-section double-color-background">
        <h2>Contact Me</h2>
        <p>Feel free to reach out or connect with me on social media.</p>

        <div class="socials">
            <a v-for="social in socialMediaLinks" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer">
                <img :src="social.icon" :alt="`Connect on ${social.name}`" />
            </a>
        </div>
        <div class="contact-form">
            <h3>Send me a message!</h3>
            <form @submit.prevent="sendMessage">
                <div class = "name-box">
                    <label for="name">Name:</label>
                    <input v-model="contact.name" id="name" type="text" required />
                </div>
                
                <div class = "message-box">
                    <label for="message">Message:</label>
                    <textarea v-model="contact.message" id="message" required></textarea>
                </div>
                
                <button type="submit" class = "send-button">Send</button>
            </form>
        </div>
        <!-- TODO: Make the download.png image work please. -->
        <div class="resume-download"> 
            <p>Interested in my work? Download my resume:</p>
            <a :href = resumeLink target = "_blank">
                <img :src = "downloadIcon" class = "download-image" />
            </a>
        </div>
    </div>
</template>

<script>
import linkedinicon from '../assets/linkedin.svg';
import twittericon from '../assets/twittericon.svg';
import githubicon from '../assets/github.svg';
import downloadicon from '../assets/download.png';

export default {
    data() {
        return {
            contact: {
                name: '',
                message: ''
            },
            resumeLink: 'https://drive.google.com/file/d/18R1kuZ36fYnWw5C79qOK7ptkOtZxMj8E/view?usp=drive_link',
            socialMediaLinks: [
                {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/john-schatzl/',
                    icon: linkedinicon
                },
                {
                    name: 'GitHub',
                    url: 'https://github.com/your_username',
                    icon: githubicon
                },
                {
                    name: 'Twitter',
                    url: 'https://twitter.com/your_username',
                    icon: twittericon
                }
            ],
            downloadIcon: downloadicon
        };
    },
    methods: {
        sendMessage() {
            // TODO: Make an API call to Gmail to receive the message as mail.
            alert(`Message from ${this.contact.name}: ${this.contact.message}`);
            
            // Reset the form
            this.contact.name = '';
            this.contact.message = '';
        }
    }
};
</script>

<style scoped>

    h2 {
        margin-bottom: 40px;
    }
    .contact-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 50px;
        text-align: center;
        color: #fff;
    }

    .socials {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .socials a {
        margin: 0 10px;
    }

    .socials img {
        width: 40px;
        height: 40px;
        transition: opacity 0.2s ease;
    }

    .socials img:hover {
        opacity: 0.7;
    }

    .email-section, .resume-download {
        margin-top: 30px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
    }
    .contact-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .name-box {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .name-box input {
        height: 30px;
        padding: 5px;
    }
    .message-box {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .message-box textarea {
        height: 100px;
        padding: 5px;
    }
    .send-button {
        width: 10vw;
    }

    .download-image {
        width: 50px;
        margin-top: 20px;
        transition: opacity 0.2s ease;
    }
    .download-image:hover {
        opacity: 0.6;
    }

    .double-color-background {
        background: linear-gradient(to bottom right, #53565a 20%, #013c50 35%, #013c50 70%, #013c50 85%);
    }
</style>

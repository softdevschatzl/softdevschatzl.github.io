<template>
    <div class="contact-section double-color-background">
        <h2 data-v-scroll = "fade-in">Contact Me</h2>
        <p data-v-scroll="fade-in">Feel free to reach out or connect with me on social media.</p>

        <div class="socials" data-v-scroll="fade-in">
            <a v-for="social in socialMediaLinks" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer">
                <img :src="social.icon" :alt="`Connect on ${social.name}`" />
            </a>
        </div>
        <div class="contact-form" data-v-scroll="fade-in">
            <h3>Send me a message!</h3>
            <form @submit.prevent="sendMessage">
                <div class = "name-box">
                    <label for="name">Name:</label>
                    <input class = "name" v-model="contact.name" id="name" type="text" required />
                </div>
                
                <div class="email-box">
                    <label for="email">Email:</label>
                    <input class = "email" v-model="contact.email" id="email" type="email" required />
                </div>
                
                <div class = "message-box">
                    <label for="message">Message:</label>
                    <textarea v-model="contact.message" id="message" required></textarea>
                </div>
                
                <button type="submit" class = "send-button">Send</button>
            </form>
        </div>
        <!-- TODO: Make the download.png image work please. -->
        <div class="resume-download" data-v-scroll="fade-in"> 
            <p>Interested in my work? Download my resume:</p>
            <a href = "/schatzl-resume-dev-2024.pdf" target="_blank">
                <img :src = "downloadIcon" class = "download-image" />
            </a>
        </div>
    </div>
</template>

<script>
import linkedinicon from '../assets/linkedin.svg';
import leetcodeicon from '../assets/leetcode.svg';
import githubicon from '../assets/github.svg';
import downloadicon from '../assets/download.png';

export default {
    data() {
        return {
            contact: {
                name: '',
                email: '',
                message: ''
            },
            socialMediaLinks: [
                {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/john-schatzl/',
                    icon: linkedinicon
                },
                {
                    name: 'GitHub',
                    url: 'https://github.com/softdevschatzl',
                    icon: githubicon
                },
                {
                    name: 'Leetcode',
                    url: 'https://leetcode.com/theschatzinator/',
                    icon: leetcodeicon
                }
            ],
            downloadIcon: downloadicon
        };
    },
    methods: {
        async sendMessage() {
            try {
                const response = await fetch("https://formspree.io/f/mpzgrzdj", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(this.contact),
                });

                if (response.ok) {
                    // Message sent successfully.
                    window.alert("Message sent successfully!");
                    // Reset the form.
                    this.contact.name = '';
                    this.contact.email = '';
                    this.contact.message = '';
                } else {
                    // Failed to send message.
                    console.error("Failed to send message.");
                }
            } catch (error) {
                console.error("An error occurred while sending the message:", error);
            }            
        }
    },
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
    .name-box, .email-box {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .name-box input, .email-box input {
        height: 30px;
        padding: 10px;
        border-radius: 20px;
        background-color: #dddddd;
        font-family: Arial, Helvetica, sans-serif;
    }
    .message-box {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .message-box textarea {
        height: 100px;
        padding: 10px;
        border-radius: 20px;
        background-color: #dddddd;
        font-family: Arial, Helvetica, sans-serif;
    }
    .send-button {
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        width: 10vw;
        height: 3vh;
        padding: 5px;
        border-radius: 20px;
        background-color: #dddddd;
        transition: opacity 0.3s ease-in-out;
        color: black;
    }
    .send-button:hover {
        opacity: 0.7;
    }

    .download-image {
        width: 50px;
        margin-top: 20px;
        transition: opacity 0.2s ease;
        animation-name: shake;
        animation-duration: 3.5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: normal;
        animation-fill-mode: none;
        animation-play-state: running;
        animation-delay: 3s;
    }
    .download-image:hover {
        opacity: 0.6;
        animation: none;
    }

    .double-color-background {
        background: linear-gradient(to bottom right, #53565a 20%, #013c50 35%, #013c50 70%, #013c50 85%);
    }

    @media only screen and (max-width: 768px) {
        .send-button {
            width: 80px;
        }
    }
</style>

<template>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="detailed-eportfolio double-color-background">
        <div class="back-button" @click="goBack">
            <span>←</span> Back to E-Portfolio
        </div>
        
        <div class="hero-section" data-v-scroll="fade-in">
            <h1>{{ project.title }}</h1>
            <p class="project-subtitle">{{ project.subtitle }}</p>
        </div>

        <div class="content-sections">
            <!-- Before and After Comparison -->
            <section class="comparison-section" data-v-scroll="slide-in-left">
                <h2>Project Evolution</h2>
                <div class="comparison-grid">
                    <div class="version-card original">
                        <h3>Original Version</h3>
                        <div class="version-content">
                            <img :src="project.originalImage" :alt="project.title + ' original'" />
                            <p>{{ project.originalDescription }}</p>
                            <a :href="project.originalLink" target="_blank" class="view-link">View Original</a>
                        </div>
                    </div>
                    <div class="version-card enhanced">
                        <h3>Enhanced Version</h3>
                        <div class="version-content">
                            <img :src="project.enhancedImage" :alt="project.title + ' enhanced'" />
                            <p>{{ project.enhancedDescription }}</p>
                            <a :href="project.enhancedLink" target="_blank" class="view-link">View Enhanced</a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Technical Details -->
            <section class="technical-section" data-v-scroll="slide-in-right">
                <h2>Technical Implementation</h2>
                <div class="tech-details">
                    <div class="tech-category">
                        <h3>Technologies Used</h3>
                        <div class="tech-list">
                            <span v-for="tech in project.technologies" :key="tech" class="tech-badge">
                                {{ tech }}
                            </span>
                        </div>
                    </div>
                    <div class="tech-category">
                        <h3>Key Improvements</h3>
                        <ul class="improvements-list">
                            <li v-for="improvement in project.improvements" :key="improvement">
                                {{ improvement }}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Learning Outcomes -->
            <section class="learning-section" data-v-scroll="slide-in-bottom">
                <h2>Learning Outcomes & Reflection</h2>
                <div class="learning-content">
                    <div class="outcome-category">
                        <h3>Skills Developed</h3>
                        <ul>
                            <li v-for="skill in project.skillsDeveloped" :key="skill">
                                {{ skill }}
                            </li>
                        </ul>
                    </div>
                    <div class="outcome-category">
                        <h3>Challenges Overcome</h3>
                        <ul>
                            <li v-for="challenge in project.challenges" :key="challenge">
                                {{ challenge }}
                            </li>
                        </ul>
                    </div>
                    <div class="reflection-text">
                        <h3>Personal Reflection</h3>
                        <p>{{ project.reflection }}</p>
                    </div>
                </div>
            </section>

            <!-- Code Samples -->
            <section class="code-section" data-v-scroll="fade-in">
                <h2>Code Highlights</h2>
                <div class="code-samples">
                    <div v-for="sample in project.codeSamples" :key="sample.title" class="code-sample">
                        <h4>{{ sample.title }}</h4>
                        <pre><code>{{ sample.code }}</code></pre>
                        <p>{{ sample.explanation }}</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailedEPortfolioView',
    props: {
        projectId: {
            type: [String, Number],
            required: true
        }
    },
    data() {
        return {
            project: {
                title: 'Sample Enhanced Project',
                subtitle: 'A comprehensive showcase of learning and improvement',
                originalDescription: 'The original project focused on basic functionality...',
                enhancedDescription: 'The enhanced version includes advanced features, better design, and improved performance...',
                originalImage: '/api/placeholder/400/250',
                enhancedImage: '/api/placeholder/400/250',
                originalLink: '#',
                enhancedLink: '#',
                technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Docker'],
                improvements: [
                    'Implemented responsive design',
                    'Added authentication system',
                    'Optimized database queries',
                    'Enhanced user interface'
                ],
                skillsDeveloped: [
                    'Advanced JavaScript patterns',
                    'Database optimization',
                    'User experience design',
                    'Testing and debugging'
                ],
                challenges: [
                    'Implementing real-time features',
                    'Managing state complexity',
                    'Performance optimization',
                    'Cross-browser compatibility'
                ],
                reflection: 'This project taught me the importance of iterative development and user feedback. The enhancement process helped me understand how to balance feature complexity with usability.',
                codeSamples: [
                    {
                        title: 'Optimized API Call',
                        code: `async function fetchUserData(userId) {
    try {
        const response = await fetch(\`/api/users/\${userId}\`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
}`,
                        explanation: 'Improved error handling and async/await pattern for better code readability.'
                    }
                ]
            }
        };
    },
    methods: {
        goBack() {
            // Navigate back to main e-portfolio
            document.getElementById('eportfolio').scrollIntoView({ behavior: 'smooth' });
        }
    }
};
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.detailed-eportfolio {
    min-height: 100vh;
    padding: 40px 20px;
    color: white;
}

.back-button {
    position: fixed;
    top: 20px;
    left: 20px;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    z-index: 1000;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.back-button:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateX(-5px);
}

.hero-section {
    text-align: center;
    margin-bottom: 60px;
    padding: 60px 20px;
}

.hero-section h1 {
    font-size: 3em;
    margin-bottom: 20px;
    color: white;
}

.project-subtitle {
    font-size: 1.3em;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
}

.content-sections {
    max-width: 1200px;
    margin: 0 auto;
}

section {
    margin-bottom: 80px;
    padding: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    backdrop-filter: blur(10px);
}

section h2 {
    font-size: 2.2em;
    margin-bottom: 30px;
    text-align: center;
    color: white;
}

.comparison-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 40px;
    margin-top: 30px;
}

.version-card {
    background: rgba(255, 255, 255, 0.95);
    color: #333;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
}

.version-card h3 {
    color: #013c50;
    margin-bottom: 20px;
    font-size: 1.5em;
}

.version-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
}

.view-link {
    display: inline-block;
    background: #013c50;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 25px;
    margin-top: 15px;
    transition: all 0.3s ease;
}

.view-link:hover {
    background: #025066;
    transform: translateY(-2px);
}

.tech-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
}

.tech-category h3 {
    color: white;
    margin-bottom: 20px;
    font-size: 1.4em;
}

.tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.tech-badge {
    background: #497285;
    color: white;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 0.9em;
}

.improvements-list, .learning-content ul {
    list-style: none;
    padding: 0;
}

.improvements-list li, .learning-content li {
    padding: 10px 0;
    padding-left: 25px;
    position: relative;
    color: white;
    line-height: 1.5;
}

.improvements-list li::before, .learning-content li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #b4fdc0;
    font-weight: bold;
}

.learning-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
}

.outcome-category h3 {
    color: white;
    margin-bottom: 15px;
    font-size: 1.3em;
}

.reflection-text {
    grid-column: 1 / -1;
    text-align: center;
    padding: 30px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    margin-top: 20px;
}

.reflection-text h3 {
    color: white;
    margin-bottom: 20px;
}

.reflection-text p {
    font-size: 1.1em;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.9);
}

.code-samples {
    display: grid;
    gap: 30px;
}

.code-sample {
    background: rgba(0, 0, 0, 0.3);
    padding: 25px;
    border-radius: 10px;
}

.code-sample h4 {
    color: white;
    margin-bottom: 15px;
    font-size: 1.2em;
}

.code-sample pre {
    background: #1a1a1a;
    color: #f8f8f2;
    padding: 20px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 15px 0;
    font-size: 0.9em;
    line-height: 1.5;
}

.code-sample p {
    color: rgba(255, 255, 255, 0.8);
    margin-top: 10px;
    font-style: italic;
}

/* Mobile Responsiveness */
@media only screen and (max-width: 767px) {
    .double-color-background {
        background: linear-gradient(to bottom right, #53565a 25%, #497285 40%, #497285 60%, #53565a 75%);
    }

    .hero-section h1 {
        font-size: 2.2em;
    }

    .comparison-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    section {
        padding: 25px;
        margin-bottom: 40px;
    }

    .tech-details, .learning-content {
        grid-template-columns: 1fr;
        gap: 25px;
    }

    .back-button {
        position: relative;
        margin-bottom: 20px;
        display: inline-block;
    }
}

@media only screen and (min-width: 768px) {
    .double-color-background {
        background: linear-gradient(to bottom right, #013c50 25%, #497285 40%, #497285 60%, #53565a 75%);
    }
}
</style>

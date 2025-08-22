<template>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="eportfolio double-color-background">
        <h1 data-v-scroll="fade-in">Class E-Portfolio</h1>
        <div class="portfolio-intro" data-v-scroll="slide-in-left">
            <p>Welcome to my academic e-portfolio showcasing enhanced projects and learning outcomes from my coursework.</p>
        </div>
        <div class="projects-grid" data-v-scroll="slide-in-bottom">
            <EPortfolioProject 
                v-for="project in projects" 
                :key="project.id"
                :project="project"
                @view-details="viewProjectDetails"
            />
        </div>
        <div class="reflection-section" data-v-scroll="slide-in-right">
            <h2>Learning Reflection</h2>
            <p>This collection represents my growth and enhanced understanding throughout the course. Each project demonstrates specific learning outcomes and improvements made through iterative development.</p>
        </div>
    </div>
</template>

<script>
import EPortfolioProject from './EPortfolioProject.vue';

export default {
    name: 'EPortfolioPage',
    components: {
        EPortfolioProject,
    },
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: 'Enhanced Project 1',
                    description: 'Description of first enhanced project and what improvements were made.',
                    technologies: ['Vue.js', 'JavaScript', 'CSS'],
                    originalVersion: 'Link to original',
                    enhancedVersion: 'Link to enhanced version',
                    reflectionPoints: [
                        'What I learned',
                        'Improvements made',
                        'Skills developed'
                    ]
                },
                {
                    id: 2,
                    title: 'Enhanced Project 2',
                    description: 'Description of second enhanced project and learning outcomes.',
                    technologies: ['React', 'Node.js', 'MongoDB'],
                    originalVersion: 'Link to original',
                    enhancedVersion: 'Link to enhanced version',
                    reflectionPoints: [
                        'Technical challenges overcome',
                        'New concepts applied',
                        'Code quality improvements'
                    ]
                },
                {
                    id: 3,
                    title: 'Enhanced Project 3',
                    description: 'Description of third enhanced project showcasing advanced concepts.',
                    technologies: ['Python', 'Django', 'PostgreSQL'],
                    originalVersion: 'Link to original',
                    enhancedVersion: 'Link to enhanced version',
                    reflectionPoints: [
                        'Design pattern implementation',
                        'Performance optimizations',
                        'Best practices adopted'
                    ]
                }
            ]
        };
    },
    methods: {
        viewProjectDetails(project) {
            // You can expand this to show more details or navigate to detailed views
            console.log('Viewing details for:', project.title);
        }
    }
};
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.eportfolio {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    min-height: 100vh;
    padding: 40px 20px;
    background-color: #b4fdc0;
}

.eportfolio h1 {
    padding: 30px;
    font-size: 2.5em;
    color: #ffffff;
    margin-bottom: 20px;
}

.portfolio-intro {
    max-width: 800px;
    margin-bottom: 40px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
}

.portfolio-intro p {
    font-size: 1.2em;
    color: #ffffff;
    line-height: 1.6;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    max-width: 1200px;
    width: 100%;
    margin-bottom: 50px;
}

.reflection-section {
    max-width: 800px;
    padding: 30px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    margin-top: 40px;
}

.reflection-section h2 {
    color: #ffffff;
    font-size: 2em;
    margin-bottom: 20px;
}

.reflection-section p {
    color: #ffffff;
    font-size: 1.1em;
    line-height: 1.6;
}

/* Mobile view. */
@media only screen and (max-width: 767px) {
    .double-color-background {
        background: linear-gradient(to bottom right, #53565a 25%, #497285 40%, #497285 60%, #53565a 75%);
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 0 10px;
    }

    .eportfolio h1 {
        font-size: 2em;
        padding: 20px;
    }
}

/* Desktop view. */
@media only screen and (min-width: 768px) {
    .double-color-background {
        background: linear-gradient(to bottom right, #013c50 25%, #497285 40%, #497285 60%, #53565a 75%);
    }

    .eportfolio {
        padding: 60px 40px;
    }

    .projects-grid {
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 40px;
    }
}

@media only screen and (min-width: 1000px) {
    .eportfolio {
        padding: 80px 60px;
    }
}
</style>

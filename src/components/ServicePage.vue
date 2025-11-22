<template>
    <div class="services-section section double-color-background">
        <h2 class="section-header" data-v-scroll="fade-in">Professional Experience</h2>
        <div class="job-header" data-v-scroll="fade-in">
            <h3 class="section-subheader job-title">Full Stack Developer</h3>
            <p class="company-info">Desco Industries Inc. | July 2024 - Present</p>
            <p class="section-description job-summary">
                Supporting 15 eCommerce brands with comprehensive full-stack development across 
                front-end, back-end integrations, SQL data pipelines, and production environment support.
            </p>
        </div>
    
        <div class="services-list">
            <div 
                class="service-item card" 
                v-for="(service, index) in responsibilities" 
                :key="service.id" 
                :data-v-scroll="getAnimationClass(index)">
                <div class="service-icon">
                    <img :src="service.icon" :alt="service.title" />
                </div>
                <div class="service-content">
                    <h4>{{ service.title }}</h4>
                    <p>{{ service.description }}</p>
                    <div class="service-technologies">
                        <span 
                            v-for="tech in service.technologies" 
                            :key="tech" 
                            class="tech-tag">
                            {{ tech }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import webicon from '../assets/web-icon.png';
import applicationicon1 from '../assets/application-icon1.svg';
import maintenanceicon from '../assets/maintenance-icon.png';

export default {
    data() {
        return {
            responsibilities: [
                {
                    id: 1,
                    title: 'Frontend Development & User Experience',
                    description: 'Built internal Angular applications with Firebase authentication and real-time data workflows. Developed responsive interfaces for 15 eCommerce brands with focus on user experience and performance.',
                    icon: webicon,
                    technologies: ['Angular', 'TypeScript', 'Firebase Auth', 'HTML/CSS', 'Responsive Design']
                },
                {
                    id: 2,
                    title: 'Backend Systems & Data Architecture',
                    description: 'Implemented Elasticsearch indexing and search pipelines to improve product discovery. Developed secure payment processing flows with CyberSource integration including tokenization and 3DS authentication.',
                    icon: applicationicon1,
                    technologies: ['Elasticsearch', '.NET Core', 'CyberSource', 'Red Maple', 'SQL Pipelines']
                },
                {
                    id: 3,
                    title: 'Infrastructure & Production Support',
                    description: 'Managed IIS/Windows Server infrastructure including deployment pipelines, SSL management, and scheduled tasks. Redesigned enterprise server cabinets and handled hardware upgrades.',
                    icon: maintenanceicon,
                    technologies: ['IIS', 'Windows Server', 'SSL/TLS', 'CI/CD', 'Hardware Management']
                },
                {
                    id: 4,
                    title: 'Database Optimization & ERP Integration',
                    description: 'Migrated legacy ERP integrations from Navision to Business Central with SQL view redesign, stored procedure optimization and enhanced, abstracted data pipelines. Refactored SQL Server tables and indexes for multi-million-row datasets.',
                    icon: applicationicon1,
                    technologies: ['SQL Server', 'Business Central', 'ETL', 'Stored Procedures', 'Performance Tuning']
                }
            ]
        };
    },
    methods: {
        getAnimationClass(index) {
            const animationClasses = ['slide-in-left', 'slide-in-left-7', 'slide-in-left-5', 'slide-in-left'];
            return animationClasses[index % animationClasses.length];
        }
    }
};
</script>

<style scoped>
.services-section {
    overflow: hidden;
    background-color: #53565a;
    color: #fff;
}

.job-header {
    margin-bottom: 40px;
    max-width: 800px;
}

.company-info {
    font-size: 1.3em;
    color: #b8c6db;
    margin-bottom: 20px;
    font-weight: 500;
    justify-content: center;
    display: flex;
    text-align: center;
}

.services-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1200px;
}

.service-item {
    flex: 0 1 calc(50% - 20px); 
    margin: 10px;
    text-align: left;
}

.service-icon img {
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
}

.service-technologies {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
}

.service-item .tech-tag {
    background: #2c3e50;
    color: #ecf0f1;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.75em;
    font-weight: 500;
    text-transform: none;
    border-left: 3px solid #e74c3c;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.service-item .tech-tag:hover {
    background: #34495e;
    border-left-color: #f39c12;
    transform: translateX(3px);
}



/* Mobile view */
@media only screen and (max-width: 767px) {
    .company-info {
        font-size: 1.1em;
    }
    
    .service-item {
        flex: 0 1 100%;
        margin: 10px 0;
    }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
    .service-item {
        flex: 0 1 calc(50% - 20px);
    }
}

@media only screen and (min-width: 768px) {
    .job-header {
        margin-bottom: 50px;
    }
}

@media only screen and (min-width: 1200px) {
    .service-item {
        flex: 0 1 calc(50% - 30px);
        margin: 15px;
    }
}
</style>
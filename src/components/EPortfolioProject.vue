<template>
    <div class="project-card">
        <div class="project-header">
            <h3>{{ project.title }}</h3>
            <div class="tech-stack">
                <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                    {{ tech }}
                </span>
            </div>
        </div>
        
        <div class="project-content">
            <p class="project-description">{{ project.description }}</p>
            
            <div class="project-links">
                <a :href="project.originalVersion" target="_blank" class="project-link original">
                    <span>📁</span> Original Version
                </a>
                <a :href="project.enhancedVersion" target="_blank" class="project-link enhanced">
                    <span>✨</span> Enhanced Version
                </a>
            </div>
            
            <div class="reflection-points">
                <h4>Key Learning Points:</h4>
                <ul>
                    <li v-for="point in project.reflectionPoints" :key="point">
                        {{ point }}
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="project-footer">
            <button @click="$emit('view-details', project)" class="details-btn">
                View Details
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EPortfolioProject',
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    emits: ['view-details']
};
</script>

<style scoped>
.project-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.project-header h3 {
    color: #013c50;
    font-size: 1.5em;
    margin-bottom: 15px;
    text-align: left;
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
}

.tech-tag {
    background: #497285;
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.8em;
    font-weight: 500;
}

.project-content {
    flex-grow: 1;
    text-align: left;
}

.project-description {
    color: #333;
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 0.95em;
}

.project-links {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.project-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 8px;
    font-size: 0.9em;
    font-weight: 500;
    transition: all 0.3s ease;
}

.project-link.original {
    background: #f0f0f0;
    color: #555;
    border: 2px solid #ddd;
}

.project-link.original:hover {
    background: #e0e0e0;
    border-color: #ccc;
}

.project-link.enhanced {
    background: #013c50;
    color: white;
    border: 2px solid #013c50;
}

.project-link.enhanced:hover {
    background: #025066;
    border-color: #025066;
}

.reflection-points {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #eee;
}

.reflection-points h4 {
    color: #013c50;
    font-size: 1.1em;
    margin-bottom: 10px;
}

.reflection-points ul {
    list-style: none;
    padding: 0;
}

.reflection-points li {
    color: #555;
    margin-bottom: 8px;
    padding-left: 20px;
    position: relative;
    font-size: 0.9em;
    line-height: 1.4;
}

.reflection-points li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: #497285;
    font-weight: bold;
}

.project-footer {
    margin-top: 20px;
    text-align: center;
}

.details-btn {
    background: linear-gradient(135deg, #497285, #53565a);
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 25px;
    cursor: pointer;
    font-size: 0.9em;
    font-weight: 600;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.details-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(73, 114, 133, 0.4);
}

@media only screen and (max-width: 767px) {
    .project-card {
        padding: 20px;
    }
    
    .project-links {
        flex-direction: column;
        gap: 10px;
    }
    
    .project-link {
        justify-content: center;
        text-align: center;
    }
}
</style>

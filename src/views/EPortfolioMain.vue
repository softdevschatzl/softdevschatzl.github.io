<template>
  <div class="eportfolio-main">
    <!-- E-Portfolio Header -->
    <header class="eportfolio-header">
      <nav class="eportfolio-nav">
        <div class="nav-brand" style="display: none">
          <!-- <router-link to="/" class="back-to-main">← Back to Main Portfolio</router-link> -->
        </div>
        <div class="nav-title">
          <h1>Software Development E-Portfolio</h1>
        </div>
      </nav>
    </header>

    <!-- E-Portfolio Content -->
    <main class="eportfolio-content">
      <section class="intro-section">
        <div class="intro-container">
          <h2>Class Project Enhancements</h2>
          <p>This e-portfolio showcases enhanced versions of projects from my software development coursework. Each project demonstrates specific skills and improvements made beyond the original requirements.</p>
        </div>
      </section>

      <!-- Professional Self-Assessment Download -->
      <section class="document-section">
        <div class="document-container">
          <div class="document-card">
            <!-- <div class="document-icon">📋</div> -->
            <div class="document-info">
              <h3>Professional Self-Assessment</h3>
              <p>A comprehensive analysis of my professional growth, competencies, and readiness for the software development industry.</p>
              <a href="/7-1 Professional Self Assessment.docx" class="download-btn" target="_blank" download>
                <span>📥 Download Word Document</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Code Review Video Section -->
      <section class="video-section">
        <div class="video-container">
          <h2>Code Review Overview</h2>
          <p>Watch my comprehensive code review discussing the enhancements, challenges, and learning outcomes across all three projects.</p>
          <div class="video-wrapper">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/H-wnTgXyny0" 
              title="E-Portfolio Code Review" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </section>

      <!-- Enhanced Projects Grid -->
      <section class="projects-grid">
        <div class="project-title">
            <h2>Enhanced Projects</h2>
        </div>
        <div class="projects-container">
          <div 
            v-for="project in enhancedProjects" 
            :key="project.id"
            class="project-card"
            @click="viewProject(project.id)"
          >
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
            </div>
            <div class="project-info">
              <h3>{{ project.title }}</h3>
              <p class="project-description">{{ project.shortDescription }}</p>
              <div class="tech-stack">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
              <div class="enhancements-preview">
                <h4>Key Enhancements:</h4>
                <ul>
                  <li v-for="enhancement in project.keyEnhancements.slice(0, 2)" :key="enhancement">
                    {{ enhancement }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="eportfolio-footer">
      <p>&copy; 2025 - Software Development E-Portfolio</p>
    </footer>
  </div>
</template>

<script>
import travlrLogo from '@/assets/logo.png';

export default {
  name: 'EPortfolioMain',
  data() {
    return {
      enhancedProjects: [
        {
          id: 1,
          title: "Travlr Getaways",
          shortDescription: "A comprehensive MEAN stack travel booking platform enhanced with enterprise-grade security, modular architecture, and professional error handling.",
          image: travlrLogo,
          technologies: ["Angular", "Node.js", "MongoDB", "Express.js", "JWT", "Helmet.js"],
          keyEnhancements: [
            "Utility classes for modular architecture",
            "Custom error handling with monitoring",
            "Enterprise security middleware",
            "Professional code structure & documentation"
          ],
          originalRequirements: "Basic CRUD operations with simple customer frontend and admin portal for CS-465 course project",
          enhancements: [
            {
              title: "Modular Architecture & Code Quality",
              description: "Implemented utility classes (ResponseUtils, ValidationUtils, JwtUtils, LogUtils) and constants.js file to centralize operations and eliminate hardcoded values, following DRY principles.",
              before: "Scattered logic with hardcoded values and repeated code patterns",
              after: "Centralized utilities with consistent patterns and configuration management"
            },
            {
              title: "Enterprise Error Handling",
              description: "Created custom error classes (ValidationError, NotFoundError, DatabaseError) with centralized async error handling and frequency tracking for system health monitoring.",
              before: "Basic error responses without consistent structure or monitoring",
              after: "Sophisticated error system with user-friendly messages and developer diagnostics"
            },
            {
              title: "Security-First Architecture",
              description: "Integrated comprehensive security middleware including Helmet.js, CORS configuration, rate limiting, enhanced JWT authentication, and input sanitization.",
              before: "Basic authentication with minimal security considerations",
              after: "Layered security architecture defending against common vulnerabilities"
            }
          ],
          codeRepository: "https://github.com/softdevschatzl/cs465-fullstack/tree/enhancements",
          challenges: [
            "Balancing security measures with user experience",
            "Managing code complexity while maintaining clarity",
            "Implementing adaptive controls for rate limiting",
            "Integrating security throughout the entire stack"
          ],
          learningOutcomes: [
            "Production-ready software engineering practices",
            "Security-first development mindset",
            "Modular architecture design principles",
            "Professional error handling and monitoring",
            "Team-scalable development workflows"
          ]
        },
        {
          id: 2,
          title: "Deep Reinforcement Learning Maze Agent",
          shortDescription: "A Jupyter notebook implementing an advanced deep Q-learning agent with Double DQN, prioritized experience replay, and sophisticated exploration strategies.",
          image: require('@/assets/maze.png'),
          technologies: ["Python", "Jupyter", "TensorFlow/PyTorch", "NumPy", "Matplotlib"],
          keyEnhancements: [
            "Double DQN architecture implementation",
            "Prioritized experience replay with heap optimization",
            "UCB-1 exploration strategy replacement",
            "A* pathfinding heuristic integration"
          ],
          originalRequirements: "Basic deep Q-learning agent for maze navigation with simple epsilon-greedy exploration",
          enhancements: [
            {
              title: "Advanced Neural Network Architecture",
              description: "Implemented Double DQN to reduce overestimation bias and improve learning stability through dual-network system.",
              before: "Basic deep Q-learning with single network prone to overestimation",
              after: "Stable Double DQN architecture with improved convergence and reduced bias"
            },
            {
              title: "Optimized Data Structures & Algorithms",
              description: "Integrated heap-based prioritized replay buffer, UCB-1 exploration, and A* pathfinding heuristics for enhanced performance.",
              before: "Simple experience replay with epsilon-greedy exploration and basic pathfinding",
              after: "Sophisticated priority-based learning with principled exploration and optimal path guidance"
            }
          ],
          codeRepository: "https://github.com/yourusername/rl-maze-agent",
          challenges: [
            "Debugging infinite loops in complex training processes",
            "Implementing and tuning advanced RL algorithms like UCB-1",
            "Maintaining code readability while increasing complexity"
          ],
          learningOutcomes: [
            "Advanced reinforcement learning algorithm implementation",
            "Efficient data structure selection and optimization",
            "Neural network architecture design and debugging",
            "Statistical exploration strategies and multi-armed bandits"
          ]
        },
        {
          id: 3,
          title: "Enterprise Service Management System",
          shortDescription: "A comprehensive Java-based modular service management system enhanced with database integration, design patterns, and enterprise-grade architecture.",
          image: require('@/assets/databaseapplication.png'),
          technologies: ["Java", "SQLite", "JUnit", "Maven", "JDBC"],
          keyEnhancements: [
            "SQLite database integration for persistence",
            "Unified global database architecture",
            "Repository and Factory design patterns",
            "Comprehensive caching and transaction support"
          ],
          originalRequirements: "Basic object-oriented service modules with in-memory storage for CS-320 course project",
          enhancements: [
            {
              title: "Database Integration & Persistence",
              description: "Transformed in-memory storage to SQLite database with proper connection management and transaction support.",
              before: "Three separate services with temporary in-memory data storage",
              after: "Unified database architecture with persistent storage and transaction management"
            },
            {
              title: "Enterprise Design Patterns",
              description: "Implemented Repository, Factory, and Singleton patterns with abstraction layers and reusable components.",
              before: "Basic object-oriented structure without standardized patterns",
              after: "Professional architecture using proven design patterns and enterprise best practices"
            }
          ],
          codeRepository: "https://github.com/yourusername/java-service-management",
          challenges: [
            "Creating database framework compatible with existing service APIs",
            "Implementing robust caching system balancing performance with consistency",
            "Balancing flexibility with standardization in enterprise systems"
          ],
          learningOutcomes: [
            "Enterprise-level Java architecture design",
            "Database integration and transaction management",
            "Design pattern implementation and best practices",
            "Production-ready error handling and testing"
          ]
        }
      ]
    }
  },
  methods: {
    viewProject(projectId) {
      this.$router.push(`/eportfolio/project/${projectId}`);
    }
  }
}
</script>

<style scoped>
.eportfolio-main {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.eportfolio-header {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.eportfolio-nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
}

.back-to-main {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: opacity 0.3s ease;
}

.back-to-main:hover {
  opacity: 0.8;
}

.nav-title h1 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
}

.eportfolio-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.intro-section {
  text-align: center;
  padding: 4rem 0;
}

.intro-container h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 300;
}

.intro-container p {
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
}

.document-section {
  text-align: center;
  padding: 2rem 0;
  margin-bottom: 2rem;
}

.document-container {
  max-width: 600px;
  margin: 0 auto;
}

.document-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.document-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.document-icon {
  font-size: 3rem;
  flex-shrink: 0;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 40px;
}

.document-info {
  text-align: left;
  flex: 1;
}

.document-info h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.4rem;
  font-weight: 300;
}

.document-info p {
  margin: 0 0 1rem 0;
  opacity: 0.9;
  line-height: 1.5;
  font-size: 1rem;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-weight: 500;
}

.download-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.video-section {
  text-align: center;
  padding: 3rem 0 4rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.video-container h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 300;
  color: #fff;
}

.video-container p {
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto 2rem;
  opacity: 0.9;
  color: rgba(255, 255, 255, 0.95);
}

.video-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem;
}

.video-wrapper iframe {
  width: 100%;
  height: 400px;
  border-radius: 10px;
  border: none;
}

.projects-grid {
  padding: 2rem 0 4rem;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.project-image {
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
}

.project-description {
  margin-bottom: 1rem;
  opacity: 0.9;
  line-height: 1.5;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.enhancements-preview h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  opacity: 0.9;
}

.enhancements-preview ul {
  margin: 0;
  padding-left: 1.2rem;
  opacity: 0.8;
}

.enhancements-preview li {
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
}

.eportfolio-footer {
  background: rgba(0, 0, 0, 0.3);
  text-align: center;
  padding: 2rem;
  margin-top: 2rem;
}

.eportfolio-footer p {
  margin: 0;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .eportfolio-nav {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .nav-title h1 {
    font-size: 1.2rem;
  }

  .intro-container h2 {
    font-size: 2rem;
  }

  .document-section {
    padding: 1.5rem 0;
  }

  .document-card {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
    gap: 1rem;
  }

  .document-info {
    text-align: center;
  }

  .document-info h3 {
    font-size: 1.2rem;
  }

  .document-info p {
    font-size: 0.95rem;
  }

  .download-btn {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }

  .video-container h2 {
    font-size: 1.5rem;
  }

  .video-container p {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .video-section {
    padding: 2rem 1rem 3rem;
    margin: 1rem 0;
  }

  .video-wrapper {
    padding: 0.5rem;
    max-width: 100%;
  }

  .video-wrapper iframe {
    height: 250px;
  }

  .projects-container {
    grid-template-columns: 1fr;
  }

  .eportfolio-content {
    padding: 0 1rem;
  }
}
</style>

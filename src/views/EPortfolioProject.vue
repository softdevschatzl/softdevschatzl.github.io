<template>
  <div class="eportfolio-project" v-if="project">
    <!-- Project Header -->
    <header class="project-header">
      <nav class="project-nav">
        <router-link to="/eportfolio" class="back-link">← Back to E-Portfolio</router-link>
        <!-- <router-link to="/" class="home-link">Main Portfolio</router-link> -->
      </nav>
      <div class="project-title-section">
        <h1>{{ project.title }}</h1>
        <p class="project-subtitle">{{ project.shortDescription }}</p>
      </div>
    </header>

    <!-- Project Content -->
    <main class="project-content">
      <div class="content-container">
        
        <!-- Project Overview -->
        <section class="project-overview">
          <div class="overview-grid">
            <div class="project-image-large">
              <img :src="project.image" :alt="project.title" @error="handleImageError" />
            </div>
            <div class="project-details">
              <h2>Project Overview</h2>
              <p>{{ project.shortDescription }}</p>
              
              <div class="tech-stack-detailed">
                <h3>Technologies Used</h3>
                <div class="tech-list">
                  <span 
                    v-for="tech in project.technologies" 
                    :key="tech"
                    class="tech-badge"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div class="project-links">
                <a :href="project.codeRepository" target="_blank" class="project-link">
                  <span>📂</span> View Code
                </a>
                <a v-if="project.liveDemo" :href="project.liveDemo" target="_blank" class="project-link">
                  <span>🚀</span> Live Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Original vs Enhanced -->
        <section class="comparison-section">
          <h2>Original Requirements vs Enhancements</h2>
          <div class="comparison-card">
            <div class="original-requirements">
              <h3>Original Assignment</h3>
              <p>{{ project.originalRequirements }}</p>
            </div>
            <div class="enhancement-summary">
              <h3>My Enhancements</h3>
              <ul>
                <li v-for="enhancement in project.keyEnhancements" :key="enhancement">
                  {{ enhancement }}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Detailed Enhancements -->
        <section class="enhancements-detailed">
          <h2>Detailed Enhancement Breakdown</h2>
          <div class="enhancement-cards">
            <div 
              v-for="(enhancement, index) in project.enhancements" 
              :key="index"
              class="enhancement-card"
            >
              <h3>{{ enhancement.title }}</h3>
              <p class="enhancement-description">{{ enhancement.description }}</p>
              
              <div class="before-after">
                <div class="before">
                  <h4>Before</h4>
                  <p>{{ enhancement.before }}</p>
                </div>
                <div class="after">
                  <h4>After</h4>
                  <p>{{ enhancement.after }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Challenges and Learning -->
        <section class="challenges-learning">
          <div class="challenges-learning-grid">
            <div class="challenges">
              <h2>Challenges Overcome</h2>
              <ul>
                <li v-for="challenge in project.challenges" :key="challenge">
                  {{ challenge }}
                </li>
              </ul>
            </div>
            <div class="learning-outcomes">
              <h2>Learning Outcomes</h2>
              <ul>
                <li v-for="outcome in project.learningOutcomes" :key="outcome">
                  {{ outcome }}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Comprehensive Project Narrative -->
        <section class="project-narrative" v-if="project.narrative">
          <h2>Included Enhancement Narrative</h2>
          <div class="narrative-content">
            <div v-for="(paragraph, index) in project.narrative.split('\n\n')" :key="index" class="narrative-paragraph">
              <p>{{ paragraph }}</p>
            </div>
          </div>
        </section>

        <!-- Navigation to other projects -->
        <section class="project-navigation">
          <h2>Other Enhanced Projects</h2>
          <div class="other-projects">
            <div 
              v-for="otherProject in otherProjects" 
              :key="otherProject.id"
              class="other-project-card"
              @click="viewProject(otherProject.id)"
            >
              <img :src="otherProject.image" :alt="otherProject.title" />
              <h4>{{ otherProject.title }}</h4>
            </div>
          </div>
        </section>

      </div>
    </main>
  </div>

  <!-- Loading state -->
  <div v-else class="loading">
    <p>Loading project details...</p>
  </div>
</template>

<script>
export default {
  name: 'EPortfolioProject',
  props: ['id'],
  data() {
    return {
      project: null,
      allProjects: [
        {
          id: 1,
          title: "Travlr Getaways",
          shortDescription: "A comprehensive MEAN stack travel booking platform enhanced with enterprise-grade security, modular architecture, and professional error handling.",
          image: require('@/assets/logo.png'),
          technologies: ["Angular", "Node.js", "MongoDB", "Express.js", "JWT", "Helmet.js", "CORS", "Mongoose"],
          keyEnhancements: [
            "Utility classes for modular architecture",
            "Custom error handling with monitoring",
            "Enterprise security middleware",
            "Professional code structure & documentation",
            "Rate limiting and input sanitization",
            "Centralized configuration management"
          ],
          originalRequirements: "Basic CRUD operations with simple customer frontend and admin portal for CS-465 course project. Original app had basic trip browsing and admin management with minimal security.",
          enhancements: [
            {
              title: "Modular Architecture & Code Quality",
              description: "Implemented utility classes (ResponseUtils, ValidationUtils, JwtUtils, LogUtils) and constants.js file to centralize operations and eliminate hardcoded values, following DRY principles. This transformation moved the codebase from scattered logic to professional, maintainable architecture.",
              before: "Scattered logic with hardcoded values, repeated code patterns, and inconsistent error handling across components",
              after: "Centralized utilities with consistent patterns, configuration management, and standardized API design supporting parallel development"
            },
            {
              title: "Enterprise Error Handling System",
              description: "Created custom error classes (ValidationError, NotFoundError, DatabaseError) with centralized async error handling and frequency tracking for system health monitoring. The system balances clear user messaging with detailed developer diagnostics.",
              before: "Basic error responses without consistent structure, no monitoring, and generic error messages",
              after: "Sophisticated error system with user-friendly messages, developer diagnostics, and proactive monitoring for production environments"
            },
            {
              title: "Security-First Architecture",
              description: "Integrated comprehensive security middleware including Helmet.js for secure headers, CORS configuration, rate limiting, enhanced JWT authentication, and input sanitization. Security is embedded throughout the stack rather than bolted on later.",
              before: "Basic JWT authentication with minimal security considerations and vulnerable to common attacks",
              after: "Layered security architecture with rate limiting, input sanitization, secure headers, and proactive threat mitigation"
            },
            {
              title: "Performance & Scalability Optimizations",
              description: "Implemented asynchronous processing, efficient pagination, caching strategies, and validation algorithms to minimize overhead from added security and logging features while maintaining optimal user experience.",
              before: "Synchronous operations with potential performance bottlenecks and no optimization considerations",
              after: "Optimized async operations with caching, efficient validation, and performance monitoring"
            }
          ],
          codeRepository: "https://github.com/softdevschatzl/cs465-fullstack/tree/enhancements",
          challenges: [
            "Balancing aggressive security measures with user experience - required adaptive controls and user-friendly error messages",
            "Managing increasing code complexity while maintaining clarity - necessitated consistent refactoring and modularization",
            "Implementing security throughout interconnected stack layers without introducing performance bottlenecks",
            "Understanding and enhancing existing codebase without introducing regressions - more intellectually demanding than building from scratch"
          ],
          learningOutcomes: [
            "Production-ready software engineering practices - planning for longevity, scalability, and maintainability",
            "Security-first development mindset - embedding protections throughout the architecture",
            "Modular architecture design following Single Responsibility Principle and abstraction",
            "Professional error handling balancing user experience with developer diagnostics",
            "Team-scalable development workflows with standardized APIs and clear communication",
            "The discipline and foresight required for enterprise-capable software that anticipates future threats and supports team scalability"
          ],
          narrative: "The Travlr application is a comprehensive web-based solution developed using the MEAN stack (MongoDB, Express.js, Angular, Node.js) to manage travel bookings and trip data for a fictional company. Originally built as a course project for CS-465, the app consists of a customer-facing frontend, an administrative portal with secure CRUD functionality, and a RESTful API that connects both to a MongoDB database. Users can browse trips, view detailed package information, and administrators can securely manage listings.\n\nTo improve maintainability, I implemented utility classes such as ResponseUtils, ValidationUtils, JwtUtils, and LogUtils, centralizing common operations and enforcing DRY (Don't Repeat Yourself) principles. I also introduced a constants.js file to replace hardcoded values, which streamlined configuration management and reduced potential bugs.\n\nThe error-handling system is now significantly more sophisticated. I introduced custom error classes (ValidationError, NotFoundError, DatabaseError), centralized async error handling, and frequency tracking for system health monitoring. These changes ensure consistent user feedback and facilitate easier debugging and maintenance.\n\nSecurity was a top priority. I integrated middleware such as Helmet.js for secure headers, CORS configuration, rate limiting, JWT-based authentication, and input sanitization to defend against common vulnerabilities. Authentication endpoints now include rate limiting and detailed security logging.\n\nThe enhanced application demonstrates all five core computer science competencies. It fosters collaboration through modular architecture and standardized API design that support parallel development and clear team workflows. Professional communication is evident in user-facing error messages, technical documentation, and clean code structure tailored to both developers and end users. Algorithmic thinking is applied through efficient pagination, validation, and retry logic, with thoughtful trade-offs between performance and usability. The project shows strong software engineering practices through the use of modern tools, testing frameworks, and organized, reusable code. Most notably, a security-first mindset is embedded throughout the system via layered protections like input sanitization, token management, rate limiting, and proactive threat mitigation.\n\nThe enhancement process provided deep insight into the practical realities of software engineering. One major lesson was the interconnectedness of security architecture. Security must be embedded throughout the stack, from input validation to response formatting, rather than bolted on later. Designing the error handling service required balancing clear user messaging with detailed developer diagnostics. I learned the importance of observability and proactive monitoring in production environments. Implementing flexible utilities for repeated logic also reinforced key software engineering principles like abstraction and the Single Responsibility Principle.\n\nBalancing usability and security posed an ongoing challenge. For instance, aggressive rate limiting or complex validation routines can degrade the user experience. To manage this, I implemented adaptive controls and user-friendly error messages that avoid revealing internal logic. Code complexity grew with each feature, necessitating consistent refactoring and modularization to maintain clarity. Performance concerns were addressed through asynchronous processing, caching, and efficient validation algorithms to minimize overhead from added security and logging features.\n\nThis enhancement experience taught me that professional-grade development is about much more than making something work; it's about planning for longevity, scalability, security, and usability. Enhancing and refactoring existing code was more intellectually demanding than building new features, as it required understanding the original design and carefully integrating improvements without introducing regressions. This artifact marks a turning point in my development mindset, from building for functionality to engineering for production. The security layers anticipate threats that may never happen, the utility services streamline future development, and the modular architecture supports team scalability. These traits reflect the foresight and discipline required in real-world software engineering.\n\nUltimately, the Travlr application is no longer a course project, it's a fully enhanced, enterprise-capable platform that demonstrates technical expertise, design thinking, and a mature understanding of software development responsibilities. It stands as a testament to my readiness to contribute to modern development teams and deliver production-quality software that users and businesses can depend on."
        },
        {
          id: 2,
          title: "Deep Reinforcement Learning Maze Agent",
          shortDescription: "A comprehensive Jupyter notebook implementing an advanced deep Q-learning agent with sophisticated algorithms, optimized data structures, and principled exploration strategies for maze-solving tasks.",
          image: require('@/assets/maze.png'),
          technologies: ["Python", "Jupyter Notebook", "TensorFlow/PyTorch", "NumPy", "Matplotlib", "OpenAI Gym", "Heap Data Structures"],
          keyEnhancements: [
            "Double DQN architecture for reduced overestimation bias",
            "Prioritized experience replay with heap-based optimization",
            "UCB-1 exploration strategy replacing epsilon-greedy",
            "A* pathfinding heuristic integration",
            "Adaptive learning rate scheduler implementation",
            "Circular buffer for efficient win rate tracking",
            "State compression using hash tables"
          ],
          originalRequirements: "Basic deep Q-learning agent for maze navigation course project with simple epsilon-greedy exploration and standard experience replay buffer",
          enhancements: [
            {
              title: "Double DQN Architecture Implementation",
              description: "Implemented a dual-network system to reduce overestimation bias in Q-learning, significantly improving learning stability and convergence. This enhancement required understanding complex neural network architectures and their mathematical foundations.",
              before: "Basic deep Q-learning with single network prone to overestimation bias and unstable learning",
              after: "Stable Double DQN architecture with dual networks, reduced bias, and improved convergence rates"
            },
            {
              title: "Advanced Data Structure Optimization",
              description: "Integrated heap-based prioritized experience replay buffer (O(log n) operations), circular buffer for win rate tracking, and hash tables for state compression. These optimizations dramatically improved memory efficiency and computational performance.",
              before: "Simple experience replay with linear-time operations and unbounded memory usage",
              after: "Optimized data structures with logarithmic complexity, constant memory usage, and efficient state management"
            },
            {
              title: "Sophisticated Exploration Strategies",
              description: "Replaced simple epsilon-greedy exploration with UCB-1 algorithm, providing principled exploration based on statistical confidence bounds. This enhancement demonstrates understanding of multi-armed bandit problems and exploration-exploitation trade-offs.",
              before: "Basic epsilon-greedy exploration with fixed probability schedules",
              after: "Principled UCB-1 exploration leveraging statistical confidence bounds for optimal action selection"
            },
            {
              title: "Intelligent Pathfinding Integration",
              description: "Integrated A* pathfinding algorithm as a heuristic to provide optimal path guidance, requiring implementation of priority queue-based search and graph algorithms for enhanced navigation performance.",
              before: "No pathfinding guidance, purely trial-and-error learning approach",
              after: "A* heuristic guidance providing optimal path information and accelerated learning"
            }
          ],
          codeRepository: "https://github.com/softdevschatzl/CS370-Coursework",
          challenges: [
            "Debugging infinite loops in complex training processes requiring careful analysis of control flow and state transitions",
            "Implementing and tuning advanced algorithms like UCB-1 and A* requiring solid mathematical foundations",
            "Maintaining code readability and documentation while significantly increasing algorithmic complexity",
            "Balancing theoretical algorithm implementation with practical performance considerations",
            "Managing memory efficiency while implementing sophisticated data structures like priority heaps"
          ],
          learningOutcomes: [
            "Advanced reinforcement learning algorithm design and implementation including Double DQN and temporal difference learning",
            "Efficient data structure selection and optimization including heaps, circular buffers, and hash tables",
            "Neural network architecture design, debugging, and performance optimization",
            "Statistical exploration strategies and multi-armed bandit problem solving",
            "Graph algorithms and heuristic search implementation (A* pathfinding)",
            "Software engineering best practices for machine learning projects including defensive programming and iterative improvement"
          ],
          narrative: "The artifact I have chosen for my ePortfolio is a Jupyter notebook implementing a deep reinforcement learning agent for a maze-solving task. Originally created as a course project, this artifact represents a significant learning journey in both foundational and advanced concepts of algorithms and data structures. The notebook, first developed in the early stages of the course, was later enhanced as part of a focused effort to deepen my understanding and demonstrate mastery of key computer science principles. The enhancements, which are documented in the 'Post-Enhancements' version of the notebook, reflect a deliberate process of analysis, research, and iterative improvement.\n\nI selected this artifact for my ePortfolio because it is a comprehensive demonstration of my ability to apply advanced algorithms and data structures in a practical, real-world context. The project began with a basic implementation of a deep Q-learning agent, which used a neural network to learn optimal actions in a maze environment. However, as I progressed through the course and gained a deeper understanding of reinforcement learning and software engineering best practices, I identified several areas for improvement. The enhanced version of the artifact showcases my skills in algorithmic analysis, data structure optimization, and defensive programming. Specifically, it includes the integration of a Double DQN architecture, prioritized experience replay, an Upper Confidence Bound (UCB) exploration strategy, A* pathfinding heuristics, and an adaptive learning rate scheduler. Each of these enhancements required careful consideration of both theoretical and practical aspects of algorithm design.\n\nThe inclusion of this artifact in my ePortfolio is justified by the breadth and depth of skills it demonstrates. The Double DQN architecture, for example, required me to understand and implement a dual-network system to reduce overestimation bias in Q-learning. This not only improved the stability of the learning process but also provided valuable experience in managing complex neural network architectures. The prioritized experience replay buffer, implemented using a heap-based priority queue, allowed the agent to focus on more informative experiences, thereby accelerating learning and improving sample efficiency. This enhancement required a solid grasp of both heap data structures and the mathematical foundations of temporal difference learning.\n\nAnother significant improvement was the replacement of the simple epsilon-greedy exploration strategy with the UCB-1 algorithm. This change introduced a more principled approach to balancing exploration and exploitation, leveraging statistical confidence bounds to guide action selection. Implementing UCB-1 deepened my understanding of multi-armed bandit problems and the importance of exploration in reinforcement learning. Additionally, the integration of A* pathfinding as a heuristic provided the agent with optimal path guidance, further improving its ability to navigate complex environments. This required me to implement and optimize a priority queue-based search algorithm, reinforcing my knowledge of graph algorithms and heuristic search.\n\nFrom a data structure perspective, the artifact demonstrates my ability to select and implement efficient solutions for real-world problems. The use of a circular buffer for win rate tracking, for example, replaced an unbounded list with a fixed-size, constant-memory data structure. This not only improved the efficiency of statistical calculations but also ensured the scalability of the training process. The prioritized replay buffer, implemented as a min-heap, provided O(log n) insertion and extraction, a significant improvement over the linear-time operations of a simple list. Hash tables and deques were also employed for state compression, experience lookup, and efficient loss history management, further showcasing my proficiency with advanced data structures.\n\nThe challenges I faced during this process were both technical and conceptual. Debugging infinite loops in the training process required careful analysis of control flow and state transitions. Implementing and tuning advanced algorithms such as UCB-1 and A* required a solid understanding of their mathematical foundations and practical implications. Ensuring that the enhanced artifact remained readable, maintainable, and well-documented was an ongoing challenge, particularly as the complexity of the codebase increased. However, these challenges were also opportunities for growth, pushing me to develop new skills and deepen my understanding of core computer science concepts.\n\nIn terms of course outcomes, the enhancements made to this artifact directly address the goals I set out to achieve in Module One. I demonstrated proficiency in algorithmic analysis, data structure optimization, and robust software engineering. The process also reinforced the importance of continuous improvement and lifelong learning, as I sought out new techniques and best practices to enhance the artifact. Looking ahead, I plan to continue building on these skills, exploring new areas of machine learning and software development.\n\nIn conclusion, the Post-Enhancements version of this artifact is a testament to my growth as a computer scientist and software engineer. It demonstrates not only my technical skills but also my ability to reflect, adapt, and improve. I am proud to include this artifact in my ePortfolio, as it represents both a significant achievement and a foundation for future learning and development."
        },
        {
          id: 3,
          title: "Enterprise Service Management System",
          shortDescription: "A comprehensive Java-based modular service management system enhanced with database integration, enterprise design patterns, and production-ready architecture.",
          image: require('@/assets/databaseapplication.png'),
          technologies: ["Java", "SQLite", "JDBC", "JUnit", "Maven", "Design Patterns", "Database Architecture"],
          keyEnhancements: [
            "SQLite database integration replacing in-memory storage",
            "Global unified database architecture across all services",
            "Repository, Factory, and Singleton design pattern implementation",
            "Comprehensive caching system with performance optimization",
            "Transaction support and connection management",
            "Abstraction layer for seamless API compatibility",
            "Production-ready error handling and logging"
          ],
          originalRequirements: "Basic object-oriented service modules (AppointmentService, ContactService, TaskService) with in-memory data storage for CS-320 Software Test, Automation, and Quality Assurance course project",
          enhancements: [
            {
              title: "Database Integration & Persistence Layer",
              description: "Transformed the system from temporary in-memory storage to persistent SQLite database with proper connection management, transaction support, and data consistency. This fundamental enhancement ensures data reliability and system scalability.",
              before: "Three separate service modules with volatile in-memory data storage that lost all information on application restart",
              after: "Unified database architecture with persistent SQLite storage, transaction management, and reliable data persistence across application sessions"
            },
            {
              title: "Enterprise Design Pattern Implementation",
              description: "Implemented Repository pattern for data access abstraction, Factory pattern for service instantiation, and Singleton pattern for database connection management. These patterns create a professional, maintainable, and extensible codebase.",
              before: "Basic object-oriented structure without standardized design patterns or architectural consistency",
              after: "Professional enterprise architecture using proven design patterns, clear separation of concerns, and reusable components"
            },
            {
              title: "Performance Optimization & Caching",
              description: "Developed a sophisticated caching system that balances performance with data consistency, including cache invalidation strategies and optimized query patterns for improved system responsiveness.",
              before: "No performance optimization or caching mechanisms, direct database access for every operation",
              after: "Intelligent caching layer with performance monitoring, cache invalidation, and optimized data access patterns"
            },
            {
              title: "Robust Error Handling & Testing Framework",
              description: "Implemented comprehensive error handling with proper exception management, logging systems, and extensive unit testing to ensure system reliability and maintainability in production environments.",
              before: "Basic error handling without comprehensive logging or testing coverage",
              after: "Production-ready error management with detailed logging, exception handling, and comprehensive test coverage"
            }
          ],
          codeRepository: "https://github.com/softdevschatzl/CS-320-Coursework",
          challenges: [
            "Designing a database framework that works with three distinct services without requiring major changes to existing APIs - addressed through clear abstraction layers",
            "Implementing a robust caching system that balances performance with data consistency - solved with intelligent cache invalidation strategies",
            "Balancing flexibility with standardization in enterprise-level systems - managed through modular design and clear interface definitions",
            "Creating comprehensive test coverage for database integration while maintaining existing functionality",
            "Ensuring backward compatibility while implementing significant architectural improvements"
          ],
          learningOutcomes: [
            "Enterprise-level Java architecture design and implementation",
            "Database integration patterns and transaction management",
            "Design pattern implementation (Repository, Factory, Singleton) in real-world contexts",
            "Production-ready error handling and comprehensive logging strategies",
            "Performance optimization techniques including caching and query optimization",
            "Test-driven development and quality assurance practices",
            "Modular system design supporting collaborative development environments",
            "Professional software engineering practices for enterprise applications"
          ],
          narrative: "The artifact is a modular service management system originally created in early 2023 for CS-320 Software Test, Automation, and Quality Assurance. I selected this artifact because it demonstrates fundamental object-oriented programming while offering significant room for enhancement. The project initially consisted of three separate service modules (AppointmentService, ContactService, and TaskService) with in-memory data storage only. My enhancements include database integration for data persistence using SQLite and a global database architecture that unifies all three services under a common data access layer. These improvements showcase my skills in architectural design, implementing design patterns (Repository, Factory, Singleton), and creating reusable components. The system now features proper connection management, transaction support, performance optimization through caching, and comprehensive error handling – transforming a basic academic exercise into a production-ready application.\n\nThis enhancement successfully addresses my planned course outcomes by demonstrating my ability to design professional-quality software systems that solve real-world problems. The modular architecture shows my capacity to create collaborative environments where multiple components can work together seamlessly. Through the development process, I learned valuable lessons about balancing flexibility with standardization in enterprise-level systems. The most significant challenge was designing a database framework that could work with three distinct services without requiring major changes to their existing APIs, which I addressed by implementing a clear abstraction layer. I also faced challenges implementing a robust caching system that balances performance with data consistency. The process of creating and rigorously testing this database framework reinforced the importance of well-defined interfaces and proper error handling in production systems. This enhanced artifact represents my growth as a software developer and demonstrates my ability to transform simple academic exercises into robust, enterprise-ready applications."
        }
      ]
    }
  },
  computed: {
    otherProjects() {
      return this.allProjects.filter(p => p.id !== parseInt(this.id));
    }
  },
  mounted() {
    this.loadProject();
  },
  watch: {
    id() {
      this.loadProject();
    }
  },
  methods: {
    loadProject() {
      const foundProject = this.allProjects.find(p => p.id === parseInt(this.id));
      if (foundProject) {
        this.project = foundProject;
      } else {
        console.warn(`Project with id ${this.id} not found`);
        // Optionally redirect to eportfolio main page
        this.$router.push('/eportfolio');
      }
    },
    viewProject(projectId) {
      this.$router.push(`/eportfolio/project/${projectId}`);
    },
    handleImageError(event) {
      // Set a placeholder image if the original fails to load
      event.target.src = '/api/placeholder/400/250';
    }
  }
}
</script>

<style scoped>
.eportfolio-project {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.project-header {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  padding: 1rem 0 2rem;
}

.project-nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem 1rem;
}

.back-link, .home-link {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s ease;
  width: auto;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  background: #37256c;
  border-radius: 10px;
  padding: 10px;
}

.back-link:hover, .home-link:hover {
  opacity: 0.8;
}

.project-title-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.project-title-section h1 {
  font-size: 3rem;
  margin: 0 0 1rem 0;
  font-weight: 300;
}

.project-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0;
}

.project-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.project-overview {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.overview-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

.project-image-large img {
  width: 100%;
  border-radius: 10px;
}

.project-details h2 {
  margin: 0 0 1rem 0;
  font-size: 1.8rem;
}

.tech-stack-detailed {
  margin: 2rem 0;
}

.tech-stack-detailed h3 {
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.project-link {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  transition: background 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.project-link:hover {
  background: rgba(255, 255, 255, 0.3);
}

.comparison-section, .enhancements-detailed, .challenges-learning {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.comparison-section h2, .enhancements-detailed h2, .challenges-learning h2 {
  margin: 0 0 1.5rem 0;
  font-size: 1.8rem;
}

.comparison-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.original-requirements, .enhancement-summary {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.enhancement-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.enhancement-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.enhancement-card h3 {
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
}

.before-after {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.before, .after {
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 8px;
}

.before h4, .after h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
}

.challenges-learning-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.challenges, .learning-outcomes {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.challenges h2, .learning-outcomes h2 {
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
}

.project-narrative {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.project-narrative h2 {
  margin: 0 0 1.5rem 0;
  font-size: 1.8rem;
  color: #fff;
}

.narrative-content {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.narrative-content p {
  line-height: 1.7;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.95);
  margin: 0 0 1.2rem 0;
  text-align: justify;
}

.narrative-paragraph:last-child p {
  margin-bottom: 0;
}

.project-navigation {
  text-align: center;
}

.project-navigation h2 {
  margin: 0 0 2rem 0;
  font-size: 1.8rem;
}

.other-projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.other-project-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.other-project-card:hover {
  transform: translateY(-5px);
}

.other-project-card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.other-project-card h4 {
  margin: 0;
  font-size: 1rem;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .project-title-section h1 {
    font-size: 2rem;
  }

  .overview-grid,
  .comparison-card,
  .before-after,
  .challenges-learning-grid {
    grid-template-columns: 1fr;
  }

  .project-links {
    flex-direction: column;
  }

  .project-content {
    padding: 1rem;
  }

  .project-narrative {
    padding: 1.5rem;
  }

  .narrative-content {
    padding: 1rem;
  }

  .narrative-content p {
    font-size: 0.95rem;
    text-align: left;
  }
}
</style>

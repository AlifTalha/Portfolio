import Project1 from "../assets/images/Api.png";
import Project2 from "../assets/images/Auth.png";
import Project3 from "../assets/images/block.jpg";
import Project4 from "../assets/images/ecom.jpg";
import Project5 from "../assets/images/portfolio.png";
export const PortfolioContent = {
  about: {
    tag: "About Me",
    title: "Passionate about creating",
    titleHighlight: "digital experiences",
    paragraphs: [
      "I'm a Full Stack Developer with a passion for building elegant, responsive, and user-friendly web applications. With over 4 years of experience, I've worked on various projects ranging from startup MVPs to enterprise-level applications.",
      "My approach combines clean code with beautiful design, ensuring that every project I work on is both functional and visually appealing. I believe in continuous learning and staying up-to-date with the latest technologies.",
    ],
    stats: [
      { number: "2+", label: "Years Experience" },
      { number: "20+", label: "Projects" },
      { number: "12", label: "Technologies" },
    ],
    skills: [
      { name: "Express.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "ASP.NET", level: 88 },
      { name: "React.js", level: 88 },
      { name: "PostgreSQL", level: 82 },
    ],
  },

  hero: {
    badge: "Available for work",
    greeting: "Hey, I'm",
    name: "ALIF HOSSAIN TALHA",
    title: "Software Engineer",
    description:
      "I craft elegant digital experiences and build robust web applications with modern technologies.",
    buttons: {
      primary: "Download CV",
      secondary: "View Projects",
    },
    stats: [
      { number: "2+", label: "Years Experience" },
      { number: "20+", label: "Projects Done" },
      { number: "12+", label: "Tech Stack" },
      { number: "500+", label: "Commits" },
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
    ],
  },

  skills: {
    tag: "Expertise",
    title: "My",
    titleHighlight: "Skills",
    description:
      "A comprehensive overview of my technical skills and expertise across different domains of software development.",
    categories: [
      { id: "all", label: "All Skills" },
      { id: "backend", label: "Backend" },
      { id: "frontend", label: "Frontend" },
      { id: "database", label: "Database" },
      { id: "tools", label: "Tools & Others" },
    ],
    skills: {
      backend: [
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          level: 90,
          description: "Routing, Authentication",
        },
        {
          name: "NestJS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
          level: 85,
          description: "REST APIs, Modules, Dependency Injection",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg",
          level: 88,
          description: "Server-Side Rendering, Static Generation",
        },

        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          level: 85,
          description: "Type Safety, Backend Architecture",
        },

        {
          name: "ASP.NET",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
          level: 88,
          description: "MVC, Web API, Entity Framework",
        },
      ],
      frontend: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          level: 95,
          description: "Hooks, Context, Redux",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          level: 92,
          description: "ES6+, Async/Await, DOM",
        },

        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
          level: 85,
          description: "Utility-first CSS",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          level: 82,
          description: "Responsive Design",
        },
      ],
      database: [
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          level: 85,
          description: "Queries, Relationships",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          level: 80,
          description: "Queries, Relationships",
        },
        {
          name: "Microsoft SQL Server",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
          level: 80,
          description: "Queries, Relationships",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          level: 85,
          description: "Mongoose, Aggregation",
        },

        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
          level: 78,
          description: "Firestore, Auth",
        },
      ],
      tools: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          level: 85,
          description: "Version Control, GitHub",
        },

        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          level: 70,
          description: "Containerization",
        },
        {
          name: "Postman",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
          level: 88,
          description: "API Testing, Collections, Documentation",
        },
        {
          name: "Prisma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
          level: 82,
          description: "ORM, Schema, Migrations",
        },
        {
          name: "Redis",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
          level: 78,
          description: "Caching, Sessions, Pub/Sub",
        },
        {
          name: "VPS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
          level: 80,
          description: "Server Setup, Deployment, Linux",
        },

        {
          name: "Vercel",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
          level: 85,
          description: "Deployment, CI/CD, Serverless Functions",
        },

        {
          name: "Linux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
          level: 75,
          description: "Command Line, Bash",
        },
      ],
    },
    summary: [
      { number: "12+", label: "Technologies" },
      { number: "2+", label: "Years Experience" },
      { number: "20+", label: "Projects Delivered" },
      { number: "100%", label: "Client Satisfaction" },
    ],
  },

  projects: {
    tag: "Portfolio",
    title: "Featured",
    titleHighlight: "Projects",
    description:
      "Here are some of the projects I've worked on. Each one represents a unique challenge and solution.",
    categories: [
      { id: "all", label: "All Projects" },
      { id: "frontend", label: "Frontend" },
      { id: "fullstack", label: "Full Stack" },
      { id: "other", label: "Others" },
    ],
    items: [
      {
        id: 1,
        title: "Api Tester v2.0",
        description:
          "A powerful API testing tool with intuitive interface, request history, and response visualization",
        imageUrl: Project1,
        emoji: "🚀",
        category: "fullstack",
        tags: ["React.js", "Css3", "Node.js", "LocalStorage", "Express.js"],
        liveUrl: "https://api-tester-v2-0-frontend.vercel.app",
        githubUrl: "https://github.com/npm-335i/Api-Tester-v2.0",
      },

      {
        id: 2,
        title: "Auth System MERN",
        description:
          "Production-ready authentication system with account lockout, rate limiting, and secure JWT-based authentication",
        imageUrl: Project2,
        emoji: "🔐",
        category: "fullstack",
        tags: ["React", "Node.js", "MongoDB", "JWT", "Authentication"],
        liveUrl: "https://auth-system-frontend-six.vercel.app/auth",
        githubUrl: "https://github.com/npm-335i/Auth-System-MERN",
      },
      {
        id: 3,
        title: "MediCart - Online Pharmacy Store",
        description:
          "Modern frontend for an online medicine store with product browsing, shopping cart, and responsive design",
        imageUrl: Project4,
        emoji: "💊",
        category: "frontend",
        tags: [
          "React",
          "CSS",
          "E-Commerce",
          "Responsive",
          "Theme",
          "Animations",
        ],
        liveUrl: "",
        githubUrl: "https://github.com/npm-335i/MediCart-Frontend",
      },
      {
        id: 4,
        title: "My Portfolio",
        description:
          "Modern 3D portfolio website with interactive UI, glass-morphism design, and immersive user experience",
        imageUrl: Project5,
        emoji: "🧑‍💻",
        category: "frontend",
        tags: [
          "React",
          "Three.js",
          "Framer Motion",
          "3D",
          "Responsive",
          "Animations",
        ],
        liveUrl:
          "https://portfolio-react-git-main-npm-335is-projects.vercel.app",
        githubUrl: "https://github.com/npm-335i/Portfolio-React",
      },
      {
        id: 5,
        title: "Website Blocker Tool",
        description:
          "Batch script tool to block/unblock websites by editing the hosts file",
        imageUrl: Project3,
        emoji: "🚫",
        category: "other",
        tags: ["Batch Scripting", "Hosts File", "Productivity"],
        liveUrl: "",
        githubUrl: "https://github.com/npm-335i/Site-Blocker-Batch-Project",
      },
    ],
  },
  contact: {
    tag: "Contact",
    title: "Let's work",
    titleHighlight: "together",
    description:
      "Have a project in mind? Let's discuss how we can bring it to life. I'm always open to new opportunities and collaborations.",
    info: [
      {
        icon: "email", // Changed from emoji to string identifier
        title: "Email",
        value: "uzaaiaamirr@gmail.com",
      },
      {
        icon: "location",
        title: "Location",
        value: "Remote / Worldwide",
      },
      {
        icon: "availability",
        title: "Availability",
        value: "Open to work",
      },
    ],
    social: [
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        url: "https://github.com/AlifTalha",
      },
      {
        name: "LinkedIn",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
        url: "https://www.linkedin.com/in/aliftalha/",
      },
    ],
    form: {
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Tell me about your project...",
      submitText: "Send Message",
    },
  },

  footer: {
    brand: "ALIF HOSSAIN TALHA.",
    text: "Building elegant digital experiences with passion and creativity.",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    copyright: "All rights reserved.",
    heart: "Made with ❤️ By ALIF HOSSAIN TALHA",
  },

  navbar: {
    brand: "ALIF HOSSAIN TALHA",
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Contact",
  },
};

export default PortfolioContent;

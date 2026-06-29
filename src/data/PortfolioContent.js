import Project1 from "../assets/images/Api.png";
import Project2 from "../assets/images/Auth.png";
import Project3 from "../assets/images/block.png";
import Project4 from "../assets/images/ecom.png";
import Project5 from "../assets/images/portfolio.png";
import Project6 from "../assets/images/skyridge.png";
import Project7 from "../assets/images/mccann.png";
import Project8 from "../assets/images/property-file.png";
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
        title: "Courier Service System",
        summary:
          "Scalable courier management platform with role-based access and end-to-end delivery workflows.",
        highlights: [
          "Role-based access for Admin, Manager, Customer, and Driver",
          "RESTful APIs for parcel booking, tracking, and delivery management",
          "Integrated Stripe payments and SMTP notifications",
        ],
        imageUrl: Project1,
        emoji: "🚀",
        category: "fullstack",
        tags: ["React.js", "PostgreSQL", "SMTP", "Stripe", "Express.js"],
        liveUrl: "https://m19logistics.com/",
        githubUrl: "",
      },

      {
        id: 2,
        title: "Elyxa AI – Smart Productivity & Tracking Platform",
        summary:
          "AI-powered productivity platform for goal tracking with smart chatbot assistance.",
        highlights: [
          "AI-based chatbot and smart plan generation for personalized assistance",
          "Daily, weekly, and monthly goal tracking dashboard",
          "OpenAI integration for intelligent user interactions",
        ],
        imageUrl: Project2,
        emoji: "🔐",
        category: "fullstack",
        tags: ["React", "Express.js", "PostgreSQL", "OpenAI", "AI Integration"],
        liveUrl: "https://elyxaai.com",
        githubUrl: "",
      },
      {
        id: 3,
        title: "C4R Auto Marketplace",
        summary:
          "Car listing marketplace for browsing vehicles and connecting buyers with sellers.",
        highlights: [
          "Search and filter by make, model, year, and price range",
          "Seller listings with direct buyer enquiry system",
          "Stripe payments and Cloudinary image management",
        ],
        imageUrl: Project4,
        emoji: "💊",
        category: "frontend",
        tags: [
          "React",
          "Express.js",
          "PostgreSQL",
          "Stripe",
          "Cloudinary",
          "Tailwind CSS",
        ],
        liveUrl: "https://c4r.co.uk/",
        githubUrl: "",
      },
      {
        id: 4,
        title: "My Portfolio",
        summary:
          "Modern 3D portfolio with interactive UI, glass-morphism, and immersive animations.",
        highlights: [
          "Interactive 3D elements powered by Three.js",
          "Glass-morphism design with Framer Motion animations",
          "Fully responsive across all device sizes",
        ],
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
        liveUrl: "",
        githubUrl: "https://github.com/AlifTalha/Portfolio.git",
      },
      {
        id: 5,
        title: "Crypto Trading & Wallet Platform",
        summary:
          "Crypto trading and wallet platform with real-time market data and secure transactions.",
        highlights: [
          "Real-time market data and portfolio tracking",
          "Secure wallet and transaction capabilities",
          "Web3 and blockchain integration",
        ],
        imageUrl: Project3,
        emoji: "🚫",
        category: "other",
        tags: ["React", "Express.js", "PostgreSQL", "Web3", "Blockchain"],
        liveUrl: "https://rainbitx.com/home",
        githubUrl: "",
      },
      {
        id: 6,
        title: "Real Estate Investment & Property Management Platform",
        summary:
          "Real estate investment and property management platform with role-based workflows.",
        highlights: [
          "Property listing, booking, and management features",
          "Role-based system for Buyer, Seller, Investor, and Builder",
          "Stripe payments and Cloudinary media handling",
        ],
        imageUrl: Project6,
        emoji: "🚫",
        category: "fullstack",
        tags: ["React", "Express.js", "PostgreSQL", "Stripe", "Cloudinary"],
        liveUrl: "https://skyridgegroup.com/",
        githubUrl: "",
      },
      {
        id: 7,
        title: "Property Management & Tenant Portal",
        summary:
          "Property management portal for landlords and tenants with secure document access.",
        highlights: [
          "Secure client login with property and tenancy documents",
          "Financial statements and rental management data",
          "Real-time access to property information",
        ],
        imageUrl: Project7,
        emoji: "🚫",
        category: "fullstack",
        tags: ["React", "Nest.js", "PostgreSQL", "Cloudinary", "Tailwind CSS"],
        liveUrl: "https://mccannandcurran.com/",
        githubUrl: "",
      },
      {
        id: 8,
        title: "Real Estate Marketplace & Property Service Platform",
        summary:
          "Real estate marketplace for verified properties and related services.",
        highlights: [
          "Search verified properties and explore listings",
          "Request properties and access buying/selling services",
          "Renovation, construction, and interior decoration services",
        ],
        imageUrl: Project8,
        emoji: "🚫",
        category: "fullstack",
        tags: ["React", "Nest.js", "PostgreSQL", "AWS S3", "Tailwind CSS"],
        liveUrl: "https://prodev.property-file.com/",
        githubUrl: "",
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

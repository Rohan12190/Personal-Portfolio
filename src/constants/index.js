// index.js
export const servicesData = [
  {
    title: "Frontend Development",
    description:
      "I create responsive, accessible, and user-friendly web interfaces using modern technologies. My focus is on clean design, smooth interactions, and performance-driven builds.",
    items: [
      {
        title: "Core Web",
        description: "(HTML5, CSS3, JavaScript, Responsive Design)",
      },
      {
        title: "Frameworks",
        description: "(React, Next.js, Tailwind CSS)",
      },
      {
        title: "UI/UX",
        description: "(Interactive UI, Accessibility, Animations)",
      },
    ],
  },
  {
    title: "Backend & APIs",
    description:
      "I build scalable backends and secure APIs to connect apps and services. I enjoy solving logic, structuring data, and ensuring smooth communication between systems.",
    items: [
      {
        title: "Node.js & Express",
        description: "(REST APIs, Authentication, Middleware)",
      },
      {
        title: "Databases",
        description: "(MySQL, MongoDB, Query Optimization)",
      },
      {
        title: "Integrations",
        description: "(3rd-party APIs, Stripe, OAuth)",
      },
    ],
  },
  {
    title: "Data & Analytics",
    description:
      "With a passion for data science, I analyze, visualize, and make sense of data using modern tools. I aim to bridge data and applications for smarter solutions.",
    items: [
      {
        title: "Python Libraries",
        description: "(Pandas, NumPy, Matplotlib, scikit-learn)",
      },
      {
        title: "SQL",
        description: "(Joins, CTEs, Window Functions)",
      },
      {
        title: "Visualization",
        description: "(Seaborn, Plotly, Tableau basics)",
      },
    ],
  },
  {
    title: "Deployment & Tools",
    description:
      "I use modern tools and workflows to ship projects efficiently. From version control to hosting, I ensure reliability and collaboration throughout the process.",
    items: [
      {
        title: "Version Control",
        description: "(Git, GitHub, GitHub Actions basics)",
      },
      {
        title: "Deployment",
        description: "(Vercel, Netlify, Render, MongoDB Atlas)",
      },
      {
        title: "Collaboration",
        description: "(Agile Mindset, Documentation, Clean Code)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Mobile Accessories E-commerce",
    description:
      "An online store specializing in phone accessories including cases, chargers, cables, and power banks with MagSafe compatibility.",
    href: "",
    image: "/assets/projects/mobile-accessories-store.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "GTA Landing Page", 
    description:
      "A visually engaging landing page concept with smooth animations, inspired by modern gaming websites.", 
    href: "",
    image: "/assets/projects/gtaLandingPage.png", 
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Gsap" },
      { id: 3, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Mojito Brand Page", 
    description:
      "A stylish and interactive brand page for a beverage company, focusing on animations and user experience.", // Updated Description
    href: "",
    image: "/assets/projects/MojitoProject.png", 
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Gsap" },
      { id: 3, name: "ScrollTrigger" },
      { id: 3, name: "Lenis" },
      { id: 3, name: "Tailwind CSS" },
    ],
  },
  {
    id: 4,
    name: "Sonar Rock vs. Mine Classifier", 
    description:
      "A machine learning model that classifies sonar signals to distinguish between underwater rocks and mines, presented in an interactive Streamlit dashboard.", // New Description
    href: "",
    image: "/assets/projects/sonarproject.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Streamlit" },
      { id: 2, name: "Scikit-learn" },
      { id: 3, name: "Pandas" },
      { id: 4, name: "Seaborn" },
    ],
  },
 {
    id: 5,
    name: "Leakshield AI",
    description:
      "An AI-powered cybersecurity tool designed to scan systems and files for vulnerabilities, leveraging a machine learning model to identify potential threats.", // New Description
    href: "",
    image: "/assets/projects/LeakSheild.png", 
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Flask" },
      { id: 2, name: "Python" },
      { id: 3, name: "GSAP" },
      { id: 4, name: "JavaScript" },
      { id: 5, name: "Scikit-learn" },
    ],
  },
  {
    id: 6,
    name: "Digital Game Store",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
    ],
  },
];

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/_.rohan.09" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/rohan-kumar-640b72346/" },
  { name: "GitHub", href: "https://github.com/rohan12190" },
];

import portfolioImg from "../../../assets/Project/portfolio.png";
import project1Img from "../../../assets/Project/Project1.png";
import project2Img from "../../../assets/Project/Project2.png";
import project3Img from "../../../assets/Project/Project3.png";

const projectData = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Full Stack",
    description:
      "A responsive portfolio website built with React, Tailwind CSS, and Spring Boot.",
    image: portfolioImg,
    tech: ["React", "Tailwind", "Spring Boot", "MySQL"],
    github: "https://github.com/username/portfolio",
    live: "https://portfolio-demo.com",
    status: "Published",
    featured: true,
    createdAt: "2026-07-01",
  },
  {
    id: 2,
    title: "Student Management System",
    category: "Java Project",
    description:
      "A complete CRUD application for managing students using Java and MySQL.",
    image: project1Img,
    tech: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/username/student-management",
    live: "https://student-demo.com",
    status: "Published",
    featured: false,
    createdAt: "2026-06-20",
  },
  {
    id: 3,
    title: "E-Commerce Store",
    category: "Full Stack",
    description:
      "Modern e-commerce platform with product management, authentication, and payments.",
    image: project2Img,
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/username/ecommerce",
    live: "https://ecommerce-demo.com",
    status: "Draft",
    featured: true,
    createdAt: "2026-06-12",
  },
  {
    id: 4,
    title: "Task Management App",
    category: "Web Application",
    description:
      "Task management application with authentication, drag & drop, and dashboards.",
    image: project3Img,
    tech: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/username/task-manager",
    live: "https://task-demo.com",
    status: "Published",
    featured: false,
    createdAt: "2026-05-30",
  },
];

export default projectData;
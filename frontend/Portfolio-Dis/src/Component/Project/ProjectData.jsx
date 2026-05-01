// src/components/Project/ProjectData.jsx
import portfolio from "../../assets/Project/portfolio.png";
import Project1 from "../../assets/Project/Project1.png";
import Project2 from "../../assets/Project/Project2.png";
import Project3 from "../../assets/Project/Project3.png";

export const demoProjects = [

  {
    title: "My Portfolio Website",
    description: "Modern responsive portfolio built with React, Tailwind CSS, Framer Motion, dark/light mode, and project showcase system.",
    image: portfolio,
    tech: ["React", "TailwindCSS", "Framer Motion"],
    liveLink: "https://prabhat-dis.vercel.app/",
    githubLink: "https://github.com/prabhatpra/dis-coder-react-taiwlind/tree/main/frontend/Portfolio-Dis",
    detailLink: "#",
  }, 

  {
    title: "Tourism Management System",
    description: "A desktop-based application built using Java Swing and AWT for managing tourism services like bookings, destinations, and customer details.",
    image: Project1,
    tech: ["Java", "Swing", "AWT"],
    liveLink: "#",      
    githubLink: "https://github.com/prabhatpra/travel-management-system",
    detailLink: "#",
  },
  {
    title: "E-commerce Store",
    description: "A simple e-commerce store with cart functionality.",
    image: Project2,
    tech: ["React", "Redux", "Stripe API"],
    liveLink: "#",
    githubLink: "#",
    detailLink: "#",
  },

];
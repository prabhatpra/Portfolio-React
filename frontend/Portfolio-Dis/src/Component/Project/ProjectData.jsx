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
    githubLink: "#",
    detailLink: "#",
  }, 

  {
    title: "Portfolio Website",
    description: "Personal portfolio with dark mode and animations.",
    image: Project1,
    tech: ["React", "Tailwind", "Framer Motion"],
    liveLink: "#",
    githubLink: "#",
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
  {
    title: "Blog Platform",
    description: "Write and share articles with Markdown support.",
    image: Project3,
    tech: ["Next.js", "Tailwind", "Sanity.io"],
    liveLink: "#",
    githubLink: "#",
    detailLink: "#",
  },
  {
    title: "Task Manager",
    description: "Organize and manage tasks efficiently.",
    image: "https://via.placeholder.com/400x300.png?text=Task+Manager",
    tech: ["React", "Firebase", "Framer Motion"],
    liveLink: "#",
    githubLink: "#",
    detailLink: "#",
  },
  {
    title: "Chat App",
    description: "Real-time chat application with WebSocket.",
    image: "https://via.placeholder.com/400x300.png?text=Chat+App",
    tech: ["React", "Socket.io", "Tailwind"],
    liveLink: "#",
    githubLink: "#",
    detailLink: "#",
  },
];
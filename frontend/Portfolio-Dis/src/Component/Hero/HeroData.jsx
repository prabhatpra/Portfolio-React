import Github from "../../assets/socialImg/github.png";
import Intsta from "../../assets/socialImg/insta.png";
import Linkedin from "../../assets/socialImg/linkedin.png";
import Facebook from "../../assets/socialImg/facebook.png";

// Typewriter roles
export const roles = [
  { title: "Java Developer" },
  { title: "React JS Developer" },
  { title: "Backend Developer" },
  { title: "Frontend Developer" },
  { title: "Full Stack Developer" },
  { title: "UI/UX Designer" },
];



export const scrollingDetails = `

🌟 Hi, I'm Prabhat Prajapati — a passionate Java & Full Stack Developer 🚀  

💻 I have built this portfolio using **React + Vite + Tailwind CSS**, focusing on 
modern design, performance, and responsiveness.  

🔑 My expertise lies in building **secure, scalable, and production-ready 
applications** using Java, Spring Boot, Microservices, MySQL, and React.  

✅ I have completed my internship at **HulkHire Tech**, where I learned industry-level 
development practices, team collaboration, and advanced integration techniques.  

⚡ Some of my key projects include:  
- 🔒 **Authentication Service** – Role-based authentication, authorization, hashing, global exception handling, JDBC-MySQL.  
- 📂 **Project Management Service** – Secure project storage & frontend showcase, with user project upload & feedback features.  
- 🌍 **Travel & Tourism Management System** – A Java desktop app for bookings with secure login and intuitive dashboard.  

📌 I actively update my GitHub with new features and improvements, reflecting my 
continuous learning journey. Until I secure a role in the industry, I will keep 
building **real-world projects**, learning new technologies, and polishing my skills.  

🎯 My goal is simple: **to deliver value, write clean and scalable code, and grow 
as a developer while contributing to impactful projects.**
`

  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line);


export const typewriterSettings = {
  TYPING_SPEED: 120,
  DELETING_SPEED: 60,
  PAUSE_TIME: 1800,
};


export const basicProfileDescriptions = {
  instagram: {
    title: "Instagram Profile",
    lines: [
      "📸 Sharing creative moments.",
      "🌟 Engaging with followers.",
      "🎨 Passionate about photography and design.",
    ],
  },
  facebook: {
    title: "Facebook Profile",
    lines: [
      "👥 Connecting with friends and community.",
      "💬 Sharing updates and ideas.",
      "🌐 Engaging in groups and discussions.",
    ],
  },
  linkedin: {
    title: "LinkedIn Profile",
    lines: [
      "🔗 Let's connect professionally.",
      "💬 Available for collaboration.",
      "🌐 Building connections & learning.",
    ],
  },
  github: {
    title: "GitHub Profile",
    lines: [
      "🛠️ Open-source contributions.",
      "📂 Clean, well-documented projects.",
      "🎯 Focused on real-world solutions.",
    ],
  },
};


export const profileWithImages = {
  instagram: {
    title: "Instagram Profile",
    lines: [
      "Follow me on Instagram!",
      "📸 Explore my latest posts.",
    ],
    img: Intsta,
    link: "https://www.instagram.com/prabhatprajapati_01/",
  },
  facebook: {
    title: "Facebook Profile",
    lines: ["Connect with me on Facebook!"],
    img: Facebook,
    link: "https://www.facebook.com/prabhatprajapati.prajapati.18",
  },
  linkedin: {
    title: "LinkedIn Profile",
    lines: ["Connect professionally on LinkedIn!"],
    img: Linkedin,
    link: "https://www.linkedin.com/in/prabhat-prajapati-01p6/",
  },
  github: {
    title: "GitHub Profile",
    lines: ["Check out my projects on GitHub!"],
    img: Github,
    link: "https://github.com/prabhatpra",
  },
};

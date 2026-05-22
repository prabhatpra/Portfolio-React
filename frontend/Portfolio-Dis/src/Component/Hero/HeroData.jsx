import Github from "../../assets/socialImg/github.png";
import Insta from "../../assets/socialImg/insta.png";
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

🌟 Hi, I'm Prabhat Prajapati — a Java Full Stack Developer (2024 Graduate) 🚀

I have been actively learning and building projects in Java, Spring Boot, Microservices, MySQL, React, and Tailwind CSS since my graduation. My focus has been on improving my skills through real-world projects and continuous development practice.

💻 I built this portfolio using React + Vite + Tailwind CSS, focusing on performance, responsiveness, and clean UI design.

🔑 I have hands-on experience with backend development, REST APIs, authentication systems, and full-stack integration.

🧑‍💻 I completed my internship at HulkHire Tech, where I worked on a Stripe-based Payment System built on a microservices architecture.

During this project, I contributed to building:

💳 Stripe Payment Integration – Created Stripe checkout sessions for initial payment flow
🔗 Microservice Communication – Worked in a distributed system where services interacted with each other for payment processing
🧾 User Interaction Module – Developed features for user payment flow and transaction handling
⚡ Webhook Handling – Implemented Stripe webhooks to manage payment status updates (success/failure events)

This experience helped me understand real-world payment workflows, API communication between microservices, and event-driven architecture basics.

⚡ Key Projects:

🔒 Authentication System – Secure login system with role-based access, hashing, JWT, and MySQL integration
📂 Contact Portfolio System (Spring Boot Backend) – A full-stack backend system for portfolio contact management, featuring email notifications using Resend API, rate limiting (spam protection), duplicate message detection, and MySQL-based message storage.
🌍 Travel & Tourism System – Java-based application with booking system and authentication features

📌 Since my graduation, I have consistently worked on improving my skills and building projects, and I actively maintain my GitHub with new updates.

🎯 My goal is to join a development team where I can contribute to real-world projects, improve my skills, and grow as a software engineer.
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
    img: Insta,
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

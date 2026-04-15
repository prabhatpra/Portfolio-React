// src/Component/Resume/ResumeData.js
const ResumeData = {
  name: "Prabhat Prajapati",
  title: "Junior Backend & Full-Stack Developer",
  careerObjective:
    "Motivated and adaptable professional with strong problem-solving abilities and quick learning skills. Experienced in team collaboration and independent work, with a focus on delivering quality results and growth.",
  contact: {
    email: "prabhatprajapati01@gmail.com",
    phone: "+91 8409363297",
    location: "Ranchi, India",
    linkedin: "www.linkedin.com/in/prabhat-prajapati-01p6",
    github: "github.com/prabhatpra"
  },
  workExperience: [
    {
      role: "Dispatch Executive",
      company: "Redex Enterprise",
      duration: "2020",
      details: ["Handled System-based Dispatch operations ensuring timely delivery and accuracy in records."]
    },
    {
      role: "PLC Operator",
      company: "Jindal Steel Plant",
      duration: "May 2025 – Sep 2025",
      details: ["Operated and monitored PLC system in plant operations. Ensured accurate command execution and maintained logs."]
    }
  ],
  technicalSkills: [
    "Java, Spring Boot",
    "JavaScript, React",
    "Python (Pandas, Matplotlib)",
    "MySQL",
    "Git, Maven, Jira, Postman",
    "AWS (EC2, RDS), Tomcat"
  ],
  education: [
    "Dr. S. P. Mukherjee University, Ranchi — BSc (IT), 76.38% (2024)",
    "O.P Jindal School, Patratu — 12th Science (PCM), 69.8% (2020)",
    "O.P Jindal School, Patratu — 10th, 61.2% (2018)"
  ],
  internships: [
    {
      title: "Java Developer Intern",
      company: "HulkHire Tech, Hyderabad",
      duration: "Feb 2025 – Mar 2025",
      details: [
        "Developed Stripe integration using Spring Boot & Microservices.",
        "Built payment status tracking system, integrated ActiveMQ for async communication.",
        "Worked with MySQL (Spring JDBC) & AWS (EC2, RDS, Secret Manager).",
        "Awarded STAR Performer of the Month."
      ]
    },
    {
      title: "Web Development Intern",
      company: "LifeTech Software, Ranchi",
      duration: "May 2022 – Aug 2022",
      details: ["Created responsive websites using HTML, CSS, JavaScript, PHP & MySQL."]
    },
    {
      title: "Python (ML & Visualization)",
      company: "Briztech Infosystems, Ranchi",
      duration: "Dec 2022 – Feb 2023",
      details: ["Applied ML algorithms & Python libraries (Pandas, Matplotlib) for data analysis and visualization."]
    }
  ],
  projects: [
    {
      title: "Desktop App",
      tech: "Java AWT/Swing, JDBC",
      details: ["CRUD app with DB connectivity."],
      link: "https://github.com/prabhatpra/Travel-Management-System"
    },
    {
      title: "Dynamic Portfolio",
      tech: "React, TailwindCSS",
      details: ["Responsive portfolio with dynamic components."],
      link: "https://github.com/prabhatpra/portfolio-fullstack/tree/main/frontend/Portfolio-Dis"
    },
    {
      title: "Authentication Service",
      tech: "Spring Boot, JWT",
      details: ["Auth with token generation & password recovery."],
      link: "https://github.com/prabhatpra/Auth-Service"
    }
  ]
};

export default ResumeData;

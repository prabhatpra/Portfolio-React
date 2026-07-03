import {
  FaHome,
  FaProjectDiagram,
  FaCode,
  FaTools,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaEnvelope,
  FaCog,
} from "react-icons/fa";

export const menuItems = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: FaHome,
  },
  {
    name: "Projects",
    path: "/admin/projects",
    icon: FaProjectDiagram,
  },
  {
    name: "Skills",
    path: "/admin/skills",
    icon: FaCode,
  },
  {
    name: "Services",
    path: "/admin/services",
    icon: FaTools,
  },
  {
    name: "Experience",
    path: "/admin/experience",
    icon: FaBriefcase,
  },
  {
    name: "Education",
    path: "/admin/education",
    icon: FaGraduationCap,
  },
  {
    name: "Certificates",
    path: "/admin/certificates",
    icon: FaCertificate,
  },
  {
    name: "Messages",
    path: "/admin/messages",
    icon: FaEnvelope,
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: FaCog,
  },
];
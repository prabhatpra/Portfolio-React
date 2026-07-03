import {
  FaProjectDiagram,
  FaCode,
  FaTools,
  FaEnvelope,
} from "react-icons/fa";

export const statsData = [
  {
    id: 1,
    title: "Projects",
    value: 12,
    change: "+15%",
    description: "Total Projects",
    icon: FaProjectDiagram,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Skills",
    value: 28,
    change: "+8%",
    description: "Technical Skills",
    icon: FaCode,
    color: "bg-emerald-500",
  },
  {
    id: 3,
    title: "Services",
    value: 6,
    change: "+4%",
    description: "Available Services",
    icon: FaTools,
    color: "bg-orange-500",
  },
  {
    id: 4,
    title: "Messages",
    value: 18,
    change: "+20%",
    description: "Unread Messages",
    icon: FaEnvelope,
    color: "bg-purple-500",
  },
];
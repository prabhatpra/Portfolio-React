// src/components/Project/ProjectCard.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, tech, liveLink, githubLink, detailLink, openModal }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(-(y - centerY) / 20);
    setRotateY((x - centerX) / 20);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => { setIsHovering(false); setRotateX(0); setRotateY(0); }}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        boxShadow: isHovering
          ? `0 -10px 20px rgba(0,153,255,0.5), 0 10px 20px rgba(255,0,85,0.4), inset ${rotateY/5}px ${-rotateX/5}px 12px rgba(255,255,255,0.08)`
          : "none",
        transition: "box-shadow 0.15s ease-out, transform 0.2s ease-out",
      }}
      className="bg-gradient-to-br dark:from-gray-900/80 dark:via-purple-900/60 dark:to-indigo-800/70 p-4 rounded-2xl flex flex-col gap-2 cursor-pointer"
      onClick={openModal}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl" />
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
      <div className="flex flex-wrap gap-1 mt-2">
        {tech.map((t,i) => (
          <span key={i} className="px-2 py-0.5 rounded-full bg-blue-500 text-white text-xs">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";

import ExperiencePanel from "./ExperiencePanel";
import { FilterTabs, LogoGrid } from "./ExperienceUtils";
import { data } from "./experienceData";

function Experience() {
  const [filter, setFilter] = useState("All");
  const [selectedId, setSelectedId] = useState(data?.[0]?.id || null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  if (!data || data.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-300">
        <p>No experience data available.</p>
      </section>
    );
  }

  const items = data.filter((d) => filter === "All" || d.type === filter);

  const selected =
    items.find((it) => it.id === selectedId) || items[0] || null;

  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-4 md:px-12 lg:px-20 
      transition-colors duration-300 w-full"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14">

        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          data-aos="fade-down"
        >
          <div>
            <h2 className="text-4xl font-bold 
            bg-gradient-to-r from-emerald-400 via-red-300 to-cyan-400
            bg-clip-text text-transparent">
              Experience Dashboard
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Interactive & recruiter-friendly experience section
            </p>
          </div>

          <div className="hidden sm:block">
            <FilterTabs active={filter} onChange={setFilter} />
          </div>
        </div>

        {/* Logo Grid */}
        <div data-aos="fade-up">
          <LogoGrid
            items={items}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>

        {/* Experience Panel */}
        <AnimatePresence mode="wait">
          <div data-aos="fade-up" data-aos-delay="100">
            <ExperiencePanel selected={selected} />
          </div>
        </AnimatePresence>

        {/* Mobile Filter */}
        <div className="mt-6 sm:hidden" data-aos="fade-up">
          <FilterTabs active={filter} onChange={setFilter} />
        </div>

      </div>
    </section>
  );
}

export default Experience;
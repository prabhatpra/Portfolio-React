import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ExperiencePanel from "./ExperiencePanel";
import { FilterTabs, LogoGrid } from "./ExperienceUtils";
import { data } from "./experienceData";

function Experience() {
  const [filter, setFilter] = useState("All");
  const [selectedId, setSelectedId] = useState(data?.[0]?.id || null);

  // ✅ FIX: filter change pe selected reset
  useEffect(() => {
    const filteredItems = data.filter(
      (d) => filter === "All" || d.type === filter
    );

    if (filteredItems.length > 0) {
      setSelectedId(filteredItems[0].id);
    }
  }, [filter]);

  if (!data || data.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-300">
        <p className="text-lg font-medium">
          No experience data available.
        </p>
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
      transition-colors duration-700 w-full"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14">

        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <motion.h2
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl font-bold 
            bg-gradient-to-r from-emerald-400 via-red-300 to-cyan-400
            bg-clip-text text-transparent">
              Experience Dashboard

               <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Interactive & recruiter-friendly experience section
            </p>
            </motion.h2>
          </div>

          <div className="hidden sm:block">
            <FilterTabs active={filter} onChange={setFilter} />
          </div>
        </div>

        {/* Logo Grid */}
        <div>
          <LogoGrid
            items={items}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>

        {/* Experience Panel */}
        <AnimatePresence mode="wait">
          <div>
            <ExperiencePanel selected={selected} />
          </div>
        </AnimatePresence>

        {/* Mobile Filter */}
        <div className="mt-6 sm:hidden">
          <FilterTabs active={filter} onChange={setFilter} />
        </div>

      </div>
    </section>
  );
}

export default Experience;
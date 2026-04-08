import React from "react";

// FILTERS
export const FILTERS = ["All", "Intern", "Job", "Freelance"];

// Filter Tabs
export function FilterTabs({ active, onChange }) {
  return (
    <div className="flex gap-3 flex-wrap">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`px-4 py-2 rounded-full text-sm font-medium 
          transition-all duration-300

          ${
            active === f
              ? "bg-teal-500 text-white shadow-md"
              : "bg-gray-100 dark:bg-gray-700 hover:scale-105"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

// Logo Grid
export function LogoGrid({ items, selectedId, onSelect }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-4">
      {items.map((it) => (
        <button
          key={it.id}
          onClick={() => onSelect(it.id)}
          className={`p-3 rounded-xl flex items-center justify-center
          transition-all duration-300

          ${
            selectedId === it.id
              ? "bg-teal-100/40 dark:bg-teal-900/30 scale-105 shadow-lg"
              : "bg-gray-100 dark:bg-gray-800 hover:scale-105"
          }`}
        >
          <img
            src={it.logo}
            alt={it.company}
            className="w-12 h-12 object-contain"
          />
        </button>
      ))}
    </div>
  );
}

// Snapshots
export function SnapshotRow({ snapshots }) {
  if (!snapshots || snapshots.length === 0) {
    return <p className="text-sm text-gray-500">No snapshots</p>;
  }

  return (
    <div className="flex gap-4 overflow-x-auto">
      {snapshots.map((s, i) => (
        <img
          key={i}
          src={s}
          alt="snapshot"
          className="w-40 h-28 object-cover rounded-lg hover:scale-105 transition"
        />
      ))}
    </div>
  );
}
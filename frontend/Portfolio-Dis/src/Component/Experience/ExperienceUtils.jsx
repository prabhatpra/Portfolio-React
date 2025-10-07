// ExperienceUtils.jsx
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export const FILTERS = ["All", "Intern", "Job", "Freelance"];

export function FilterTabs({ active, onChange }) {
  return (
    <div className="flex gap-3 flex-wrap justify-center md:justify-start">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-shadow focus:outline-none focus:ring-2 focus:ring-sky-300 ${
            active === f
              ? "bg-sky-600 text-white shadow-md"
              : "bg-white bg-opacity-60 dark:bg-gray-800 dark:bg-opacity-60"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export function LogoGrid({ items, selectedId, onSelect }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-4">
      {items.map((it) => (
        <button
          key={it.id}
          onClick={() => onSelect(it.id)}
          className={`group p-3 rounded-lg shadow-sm transform transition-all focus:outline-none focus:ring-2 focus:ring-sky-300 flex items-center justify-center ${
            selectedId === it.id
              ? "scale-105 bg-sky-50 dark:bg-sky-900/30 shadow-lg"
              : "bg-white/70 dark:bg-gray-900/60"
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

export function TechChart({ tech }) {
  return (
    <div style={{ width: "100%", height: 140 }} className="mt-2">
      <ResponsiveContainer>
        <BarChart
          data={tech}
          layout="vertical"
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" hide domain={[0, 100]} />
          <YAxis dataKey="name" type="category" width={90} />
          <Tooltip />
          <Bar dataKey="value" barSize={14} radius={[6, 6, 6, 6]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SnapshotRow({ snapshots }) {
  if (!snapshots || snapshots.length === 0)
    return (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        No snapshots available.
      </p>
    );
  return (
    <div className="flex gap-4 overflow-x-auto py-2">
      {snapshots.map((s, i) => (
        <div
          key={i}
          className="min-w-[180px] rounded-md overflow-hidden shadow-md"
        >
          <img
            src={s}
            alt={`snapshot-${i}`}
            className="w-full h-32 object-cover"
          />
        </div>
      ))}
    </div>
  );
}

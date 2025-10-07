// src/Component/Resume/ResumePreview.jsx
import React from "react";

function SectionHeader({ children, icon }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-md bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white shadow-md">
        <span className="text-xl">{icon}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{children}</h3>
    </div>
  );
}

function SmallBadge({ children }) {
  return <span className="text-xs px-3 py-1 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-200 shadow-sm">{children}</span>;
}

export default function ResumePreview({ data }) {
  return (
    <div className="w-full bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/40 p-5 md:p-6 transition-all duration-500 max-h-[85vh] overflow-y-auto">
      
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">{data.name}</h1>
          <p className="text-sm text-gray-700 dark:text-gray-300">{data.title}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{data.contact.email} • {data.contact.phone} • {data.contact.location}</p>
        </div>
        <div className="flex gap-2">
          <SmallBadge>{data.internships.length} Internships</SmallBadge>
          <SmallBadge>{data.projects.length} Projects</SmallBadge>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-4">
        {/* Left (Main Info) */}
        <div className="col-span-2 space-y-3">
          
          {/* Career Objective */}
          <div>
            <SectionHeader icon="🎯">Objective</SectionHeader>
            <p className="text-xs text-gray-700 dark:text-gray-200 leading-snug">{data.careerObjective}</p>
          </div>

          {/* Work Experience */}
          <div>
            <SectionHeader icon="💼">Experience</SectionHeader>
            {data.workExperience.map((w, i) => (
              <div key={i} className="mt-1">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{w.role} — {w.company}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{w.duration}</p>
                <ul className="list-disc pl-4 text-xs text-gray-700 dark:text-gray-300 leading-tight">
                  {w.details.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Internships */}
          <div>
            <SectionHeader icon="🧪">Internships</SectionHeader>
            {data.internships.map((it, i) => (
              <div key={i} className="mt-1">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{it.title} — {it.company}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{it.duration}</p>
                <ul className="list-disc pl-4 text-xs text-gray-700 dark:text-gray-300 leading-tight">
                  {it.details.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <SectionHeader icon="📁">Projects</SectionHeader>
            {data.projects.map((p, i) => (
              <div key={i} className="mt-1">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{p.title} — {p.tech}</p>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-xs text-sky-600 hover:text-sky-800 underline">
                    View Code →
                  </a>
                )}
                <ul className="list-disc pl-4 text-xs text-gray-700 dark:text-gray-300 leading-tight">
                  {p.details.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right (Sidebar) */}
        <aside className="space-y-3">
          {/* Skills */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">Skills</h4>
            <div className="flex flex-wrap gap-1 mt-2">
              {data.technicalSkills.map((s, i) => <SmallBadge key={i}>{s}</SmallBadge>)}
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">Education</h4>
            <ul className="text-xs mt-2 text-gray-700 dark:text-gray-300 space-y-1">
              {data.education.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">Contact</h4>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{data.contact.email}</p>
            <p className="text-xs text-gray-700 dark:text-gray-300">{data.contact.phone}</p>
            <p className="text-xs text-gray-700 dark:text-gray-300">{data.contact.location}</p>
            <p className="text-xs text-gray-700 dark:text-gray-300">LinkedIn: <a href={`https://${data.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 underline">{data.contact.linkedin}</a></p>
            <p className="text-xs text-gray-700 dark:text-gray-300">GitHub: <a href={`https://${data.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 underline">{data.contact.github}</a></p>
            
          </div>
        </aside>
      </div>
    </div>
  );
}

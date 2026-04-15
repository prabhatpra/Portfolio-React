import React from "react";
import RsumeData from "./ResumeData";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">

      {/* Download Button (only screen pe dikhega) */}
      <button
        onClick={() => window.print()}
        className="print:hidden fixed top-5 right-5 px-4 py-2 bg-blue-500 text-white rounded-lg shadow"
      >
        Download CV
      </button>

      {/* Resume Container */}
      <div className="resume-container w-full max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-4 md:p-8">

        {/* HEADER */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold dark:text-white">{ResumeData.name}</h1>
          <p className="text-gray-600 dark:text-gray-300">
            {ResumeData.title}
          </p>
        </div>

        {/* CAREER OBJECTIVE */}
        <section className="mb-5">
          <h2 className="text-lg dark:text-white font-semibold border-b mb-1">Career Objective</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {ResumeData.careerObjective}
          </p>
        </section>

        {/* CONTACT */}
        <section className="mb-5">
          <h2 className="text-lg font-semibold dark:text-white border-b mb-1">Contact</h2>
          <p className="text-sm dark:text-gray-300">Email: {ResumeData.contact.email}</p>
          <p className="text-sm dark:text-gray-300">Phone: {ResumeData.contact.phone}</p>
          <p className="text-sm dark:text-gray-300">Location: {ResumeData.contact.location}</p>
          <p className="text-sm dark:text-gray-300">LinkedIn: {ResumeData.contact.linkedin}</p>
          <p className="text-sm dark:text-gray-300">GitHub: {ResumeData.contact.github}</p>
        </section>

        {/* SKILLS */}
        <section className="mb-5">
          <h2 className="text-lg font-semibold dark:text-white border-b mb-2">Technical Skills</h2>
          <div className="flex flex-wrap gap-2">
            {ResumeData.technicalSkills.map((skill, i) => (
              <span
                key={i}
                className="bg-gray-200 dark:text-gray-300 dark:bg-gray-700 px-3 py-1 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section className="mb-5">
          <h2 className="text-lg font-semibold dark:text-white border-b mb-2">Work Experience</h2>
          {ResumeData.workExperience.map((exp, i) => (
            <div key={i} className="mb-3">
              <h3 className="font-semibold text-sm dark:text-white">
                {exp.role} - {exp.company}
              </h3>
              <p className="text-xs dark:text-gray-300">{exp.duration}</p>
              <ul className="list-disc ml-5 text-xs dark:text-gray-300">
                {exp.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* INTERNSHIPS */}
        <section className="mb-5">
          <h2 className="text-lg font-semibold dark:text-white border-b mb-2">Internships</h2>
          {ResumeData.internships.map((intern, i) => (
            <div key={i} className="mb-3">
              <h3 className="font-semibold dark:text-gray-300 text-sm">
                {intern.title} - {intern.company}
              </h3>
              <p className="text-xs dark:text-gray-300">{intern.duration}</p>
              <ul className="list-disc ml-5 text-xs dark:text-gray-300">
                {intern.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* PROJECTS */}
        <section className="mb-5">
          <h2 className="text-lg font-semibold dark:text-white border-b mb-2">Projects</h2>
          {ResumeData.projects.map((proj, i) => (
            <div key={i} className="mb-3">
              <h3 className="font-semibold text-sm dark:text-white">{proj.title}</h3>
              <p className="text-xs dark:text-gray-300">{proj.tech}</p>
              <ul className="list-disc ml-5 text-xs dark:text-gray-300">
                {proj.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* EDUCATION */}
        <section>
          <h2 className="text-lg font-semibold dark:text-white border-b mb-2">Education</h2>
          <ul className="list-disc ml-5 text-xs dark:text-gray-300">
            {ResumeData.education.map((edu, i) => (
              <li key={i}>{edu}</li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Resume;
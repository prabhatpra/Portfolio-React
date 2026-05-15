import React from "react";
import { motion } from "framer-motion";

const fadeUp = (i = 1) => ({
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.12,
            duration: 0.6,
            ease: "easeOut"
        }
    }
});

export default function JavaDetails() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-6 md:px-20 py-6 text-center border-b border-white/10"
            >
                <h1 className="text-4xl md:text-5xl font-bold">
                    Internship Experience
                </h1>
                <p className="text-gray-400 mt-2">
                    Backend development journey
                </p>
            </motion.div>

            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 px-6 md:px-20 py-10 space-y-12 overflow-y-auto scrollbar-hide">

                {/* COMPANY */}
                <motion.section
                    variants={fadeUp(1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-3xl text-teal-400 font-semibold">
                        HulkHire Tech
                    </h2>
                    <p className="text-gray-300 mt-1">
                        Java Developer Intern • Remote
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        Feb 2025 - Mar 2025
                    </p>
                </motion.section>

                {/* OVERVIEW */}
                <motion.section
                    variants={fadeUp(2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3 className="text-2xl font-semibold mb-3">Overview</h3>
                    <p className="text-gray-300 leading-8">
                        Worked as a Java Backend Developer Intern contributing to
                        APIs, database handling, debugging, and real-world project workflow.
                    </p>
                </motion.section>

                {/* RESPONSIBILITIES */}
                <motion.section
                    variants={fadeUp(3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3 className="text-2xl font-semibold mb-4">Responsibilities</h3>

                    <ul className="grid md:grid-cols-2 gap-2 text-gray-300 list-disc pl-5">
                        <li>Java backend development</li>
                        <li>MySQL database handling</li>
                        <li>Bug fixing & debugging</li>
                        <li>REST API support</li>
                        <li>Team collaboration</li>
                        <li>Code testing</li>
                    </ul>
                </motion.section>

                {/* ACHIEVEMENTS */}
                <motion.section
                    variants={fadeUp(4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3 className="text-2xl font-semibold mb-4">Key Achievements</h3>

                    <div className="space-y-2 text-gray-300">
                        <p>✔ Completed 2-month internship successfully</p>
                        <p>✔ Improved backend debugging skills</p>
                        <p>✔ Learned Java + MySQL integration</p>
                        <p>✔ Understood real project workflow</p>
                    </div>
                </motion.section>

                {/* TECHNOLOGIES */}
                <motion.section
                    variants={fadeUp(5)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3 className="text-2xl font-semibold mb-4">Technologies</h3>

                    <div className="flex flex-wrap gap-3">
                        {["Java", "Spring Boot", "MySQL", "JDBC", "Git", "GitHub"].map(
                            (t, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-teal-300"
                                >
                                    {t}
                                </span>
                            )
                        )}
                    </div>
                </motion.section>

                {/* SKILLS */}
                <motion.section
                    variants={fadeUp(6)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3 className="text-2xl font-semibold mb-4">Skills Improved</h3>

                    <div className="text-gray-300 space-y-2">
                        <p>✔ Problem solving mindset</p>
                        <p>✔ Backend architecture understanding</p>
                        <p>✔ API handling & request flow</p>
                        <p>✔ Team communication skills</p>
                    </div>
                </motion.section>

                {/* BUTTONS */}
                <motion.div
                    variants={fadeUp(7)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex gap-4 flex-wrap pt-6"
                >
                    <button className="px-6 py-3 bg-teal-500 text-black rounded-xl hover:scale-105 transition">
                        Download Certificate
                    </button>

                    <button className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl hover:scale-105 transition">
                        Back to Portfolio
                    </button>
                </motion.div>

            </div>
        </div>
    );
}
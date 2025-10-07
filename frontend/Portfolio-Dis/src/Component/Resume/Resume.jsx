// src/Component/Resume/Resume.jsx
import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { motion } from "framer-motion";
import BubbleBackground from "../BubbleBackground/BubbleBackground.jsx";
import ResumeData from "./ResumeData.js";
import ResumePDF from "./ResumePDF.jsx";
import ResumePreview from "./ResumePreview.jsx";

export default function Resume() {
  return (
    <div id = "resume" className="relative py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-cyan-200 to-purple-100/70 dark:from-gray-900/80 dark:via-purple-900/60 dark:to-indigo-800/70 min-h-screen w-screen overflow-hidden">
      <BubbleBackground />

      <div className="relative max-w-6xl mx-auto z-10">
        <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Resume</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">Clean, downloadable and personalized PDF (watermarked with your name).</p>
            </div>

            <div className="flex items-center gap-3">
              <PDFDownloadLink
                document={<ResumePDF user={ResumeData} />}
                fileName={`Resume_${ResumeData.name.replace(/\s+/g, "_")}.pdf`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-md shadow"
              >
                {({ loading }) => (loading ? "Preparing PDF..." : "Download PDF")}
              </PDFDownloadLink>

              <button
                onClick={() => window.print()}
                className="px-4 py-2 border rounded-md text-sm bg-white/60 hover:bg-white dark:bg-gray-800/60"
              >
                Print
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }}>
          <ResumePreview data={ResumeData} />
        </motion.div>
      </div>
    </div>
  );
}

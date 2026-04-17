import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all required fields ⚠️");
      return;
    }

    alert("Message sent successfully 🚀");
    setForm({ name: "", email: "", reason: "", message: "" });
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-4 py-10">

      <div className="relative z-10 w-full max-w-3xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Contact Me 📩
          </h1>

          <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-400">
            Have a project idea or opportunity? Send a message and I’ll respond soon.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          onSubmit={handleSubmit}
          className="
            w-full rounded-2xl p-6 md:p-10 shadow-2xl space-y-5
            backdrop-blur-xl

            bg-white/10
            dark:bg-gradient-to-br dark:from-slate-900/40 dark:via-indigo-950/40 dark:to-slate-900/40
            border border-white/10 dark:border-white/20
          "
        >

          {/* NAME + EMAIL */}
          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <motion.input
              variants={item}
              whileFocus={{ scale: 1.02 }}
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="
                p-3 rounded-xl outline-none transition
                bg-white/20 dark:bg-white/10 backdrop-blur-md
                text-black dark:text-white
                border border-white/20
                placeholder:text-gray-600 dark:placeholder:text-gray-400
                focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300
              "
            />

            <motion.input
              variants={item}
              whileFocus={{ scale: 1.02 }}
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="
                p-3 rounded-xl outline-none transition
                bg-white/20 dark:bg-white/10 backdrop-blur-md
                text-black dark:text-white
                border border-white/20
                placeholder:text-gray-600 dark:placeholder:text-gray-400
                focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300
              "
            />
          </motion.div>

          {/* SELECT */}
          <motion.div variants={item} className="relative">
            <motion.select
              whileFocus={{ scale: 1.02 }}
              name="reason"
              value={form.reason}
              onChange={handleChange}
              className="
                w-full p-3 rounded-xl outline-none transition
                bg-white/20 dark:bg-white/10 backdrop-blur-md
                text-black dark:text-slate-400
                border border-white/20
                focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300
                appearance-none cursor-pointer
              "
            >
              <option value="">Select Reason</option>
              <option value="project">Project Collaboration</option>
              <option value="job">Job Opportunity</option>
              <option value="freelance">Freelance Work</option>
              <option value="support">Support / Help</option>
              <option value="other">Other</option>
            </motion.select>

            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300 pointer-events-none">
              ▼
            </span>
          </motion.div>

          {/* MESSAGE */}
          <motion.textarea
            variants={item}
            whileFocus={{ scale: 1.02 }}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows="6"
            className="
              w-full p-3 rounded-xl outline-none resize-none transition
              bg-white/20 dark:bg-white/10 backdrop-blur-md
              text-black dark:text-white
              border border-white/20
              placeholder:text-gray-600 dark:placeholder:text-gray-400
              focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300
            "
          />

          {/* BUTTON */}
          <motion.button
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="
              w-full py-3 rounded-xl
              flex items-center justify-center gap-2 text-sm font-medium text-black
              bg-gradient-to-r from-green-200 via-teal-300 to-fuchsia-300
              transition-all duration-300
            "
          >
            Send Message 🚀
          </motion.button>

        </motion.form>
      </div>
    </div>
  );
}

export default Contact;
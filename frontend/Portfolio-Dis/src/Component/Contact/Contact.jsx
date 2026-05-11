import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    // remove error while typing
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    // NAME
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    // EMAIL
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    // SUBJECT
    if (!form.subject.trim()) {
      newErrors.subject = "Please select reason";
    }

    // MESSAGE
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    // stop if errors exist
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      setLoading(true);
      setResponse("");

      console.log("Sending data 👉", form);

      const res = await fetch("http://localhost:8089/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      console.log("Status 👉", res.status);

      const data = await res.json();
      console.log("Response 👉", data);

      if (res.ok) {
        setResponse("✅ Message sent successfully!");

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setErrors({});
      } else {
        setResponse("❌ Failed to send message");
      }

    } catch (error) {
      console.log("Error 👉", error);
      setResponse("❌ Server error");
    } finally {
      setLoading(false);
    }
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
    <div
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-10"
    >

      <div className="relative z-10 w-full max-w-3xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
            Get In Touch 📩
          </h1>

          <p className="mt-3 text-sm font-bold md:text-base leading-relaxed bg-gradient-to-r from-yellow-500 via-indigo-500 to-green-600 bg-clip-text text-transparent">
            Have an idea, project, or opportunity in mind?
            Feel free to reach out — I’d love to hear from you and build something amazing together.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          onSubmit={handleSubmit}
          className="w-full rounded-2xl p-6 md:p-10 shadow-2xl space-y-5 backdrop-blur-xl bg-white/10 dark:bg-gradient-to-br dark:from-slate-900/40 dark:via-indigo-950/40 dark:to-slate-900/40 border border-white/10 dark:border-white/20"
        >

          {/* NAME + EMAIL */}
          <motion.div
            variants={item}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >

            {/* NAME */}
            <div>
              <motion.input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-3 rounded-xl outline-none transition bg-white/20 dark:bg-gray-800 backdrop-blur-md text-black dark:text-white border border-white/20"
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  * {errors.name}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <motion.input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-3 rounded-xl outline-none transition bg-white/20 dark:bg-gray-800 backdrop-blur-md text-black dark:text-white border border-white/20"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  * {errors.email}
                </p>
              )}
            </div>

          </motion.div>

          {/* SUBJECT */}
          <motion.div variants={item}>

            <motion.select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-xl outline-none transition bg-white/20 dark:bg-gray-800 backdrop-blur-md text-black dark:text-white border border-white/20"
            >
              <option value="">
                Select Reason
              </option>

              <option value="project">
                Project Collaboration
              </option>

              <option value="job">
                Job Opportunity
              </option>

              <option value="freelance">
                Freelance Work
              </option>

              <option value="support">
                Support / Help
              </option>

              <option value="other">
                Other
              </option>

            </motion.select>

            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                * {errors.subject}
              </p>
            )}

          </motion.div>

          {/* MESSAGE */}
          <motion.div variants={item}>

            <motion.textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="6"
              className="w-full p-3 rounded-xl bg-white/20 dark:bg-gray-800 text-black dark:text-white border border-white/20"
            />

            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                * {errors.message}
              </p>
            )}

          </motion.div>

          {/* BUTTON */}
          <motion.button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-green-200 via-teal-300 to-fuchsia-300 font-semibold"
          >
            {loading ? "Sending..." : "Send Message 🚀"}
          </motion.button>

          {/* RESPONSE */}
          {response && (
            <p className="text-center text-sm mt-2 text-white">
              {response}
            </p>
          )}

        </motion.form>

      </div>
    </div>
  );
}

export default Contact;
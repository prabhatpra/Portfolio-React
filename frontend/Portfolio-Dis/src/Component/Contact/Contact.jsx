import React, { useState } from "react";
import { motion } from "framer-motion";
import { sendContactMessage } from "./contactService";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    customSubject: "",
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

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Please select reason";
    }

    if (
      form.subject === "Other" &&
      form.customSubject.trim().length < 5
    ) {
      newErrors.customSubject =
        "Please enter at least 5 characters";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const finalData = {
      ...form,
      subject:
        form.subject === "Other"
          ? form.customSubject
          : form.subject,
    };

    try {
      setLoading(true);
      setResponse("");

      const result = await sendContactMessage(finalData);

      if (result.ok) {
        setResponse("✅ Message sent successfully!");

        setForm({
          name: "",
          email: "",
          subject: "",
          customSubject: "",
          message: "",
        });

        setErrors({});
      } else {
        setResponse("❌ Failed to send message");
      }

    } catch (error) {
      setResponse("❌ Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-10"
    >

      <div className="relative z-10 w-full max-w-3xl">

        {/* HEADER (UNCHANGED) */}
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

        {/* FORM (UNCHANGED UI) */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full rounded-2xl p-6 md:p-10 shadow-2xl space-y-5 backdrop-blur-xl bg-white/10 dark:bg-gradient-to-br dark:from-slate-900/40 dark:via-indigo-950/40 dark:to-slate-900/40 border border-white/10 dark:border-white/20"
        >

          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* NAME */}
            <div>
              <input
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
              <input
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

          </div>

          {/* SUBJECT */}
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full p-3 rounded-xl outline-none transition bg-white/20 dark:bg-gray-800 backdrop-blur-md text-black dark:text-white border border-white/20"
          >
            <option value="">Select Reason</option>
            <option value="Project Collaboration">Project Collaboration</option>
            <option value="Job Opportunity">Job Opportunity</option>
            <option value="Freelance Work">Freelance Work</option>
            <option value="Support Help">Support / Help</option>
            <option value="Other">Other</option>
          </select>

          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">
              * {errors.subject}
            </p>
          )}

          {/* CUSTOM SUBJECT */}
          {form.subject === "Other" && (
            <input
              type="text"
              name="customSubject"
              value={form.customSubject}
              onChange={handleChange}
              placeholder="Enter your reason"
              className="w-full p-3 rounded-xl outline-none transition bg-white/20 dark:bg-gray-800 backdrop-blur-md text-black dark:text-white border border-white/20"
            />
          )}

          {errors.customSubject && (
            <p className="text-red-500 text-sm mt-1">
              * {errors.customSubject}
            </p>
          )}

          {/* MESSAGE */}
          <textarea
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

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-green-200 via-teal-300 to-fuchsia-300 font-semibold"
          >
            {loading ? "Sending..." : "Send Message 🚀"}
          </button>

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
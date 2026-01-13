import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css"; // Tailwind + any custom CSS

// toast.configure();

export default function ContactPage() {
  const contactLinks = [
    {
      name: "Instagram",
      icon: <Instagram size={28} />,
      link: "https://instagram.com/yourusername",
      color: "#FF6B81",
    },
    {
      name: "Email",
      icon: <Mail size={28} />,
      link: "mailto:your@email.com",
      color: "#FF6B5B",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://lg-2-y7q2.onrender.com/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Failed to send message. Try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#FFF7ED] to-[#FFE8CC] min-h-screen overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-tr from-[#FFD699] via-[#FFB870] to-[#FFCBA0] opacity-20"></div>

      <div className="relative max-w-4xl mx-auto px-6 z-10">
        {/* Header */}
        <motion.header
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-5xl md:text-6xl font-extrabold mb-4 text-orange-500"
            style={{ textShadow: "0 0 15px #FF9F43, 0 0 25px #FFB870" }}
          >
            Get in Touch
          </h1>
          <p
            className="text-lg md:text-xl text-gray-800"
            style={{ textShadow: "0 0 5px #FFAB6B" }}
          >
            We’d love to hear from you! Reach out via Instagram, email, or fill out the contact form below.
          </p>
        </motion.header>

        {/* Divider Icon */}
        <div className="flex justify-center mb-12">
          <FaStar className="text-orange-400 text-xl animate-pulse" />
        </div>

        {/* Contact Methods */}
        <section className="grid md:grid-cols-2 gap-12 mb-16">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 p-6 bg-white/10 rounded-xl shadow-lg backdrop-blur-md cursor-pointer"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                style={{ color: contact.color }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {contact.icon}
              </motion.div>
              <span
                className="text-lg md:text-xl font-semibold"
                style={{ textShadow: "0 0 3px #FFAB6B" }}
              >
                {contact.name}
              </span>
            </motion.a>
          ))}
        </section>

        {/* Section Divider */}
        <div className="my-12 h-[2px] bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 rounded-full opacity-50"></div>

        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none h-32"
              required
            />
            <button
              type="submit"
              className="mt-2 bg-[#FFB66D] hover:bg-[#FF9A5B] text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </motion.section>
      </div>
    </section>
  );
}

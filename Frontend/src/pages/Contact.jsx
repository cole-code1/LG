import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";

export default function ContactPage() {
  const contactLinks = [
    {
      name: "Instagram",
      icon: <Instagram size={28} />,
      link: "https://instagram.com/lg.marketinghub",
      color: "#FF6B81",
    },
{
  name: "Email",
  icon: <Mail size={28} />,
  link: "https://mail.google.com/mail/?view=cm&fs=1&to=lg.marketinghub@gmail.com",
  color: "#FF6B5B",
}

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
      await fetch("https://lg-4.onrender.com/api/send-email", {
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
    <section className="relative pt-32 pb-20 min-h-screen overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
      {/* subtle glow overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.03) 0%, transparent 60%), radial-gradient(circle, rgba(255,151,22,0.02) 0%, transparent 70%)",
        }}
      ></div>

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
            className="text-4xl md:text-5xl font-extrabold mb-4 text-orange-400"
          >
            Get in Touch
          </h1>
          <p
            className="text-black text-lg md:text-xl"
          >
            We’d love to hear from you! Reach out via Instagram, email, or fill out the form below.
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
              className="flex items-center justify-center gap-4 p-6 bg-black/20 rounded-2xl shadow-lg glow-box cursor-pointer"
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
                className="text-lg md:text-xl font-semibold text-orange-400"

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
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-3 rounded-2xl border border-white/20 bg-black/20 text-white placeholder-black focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-3 rounded-2xl border border-white/20 bg-black/20 text-white placeholder-black focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="px-4 py-3 rounded-2xl border border-white/20 bg-black/20 text-white placeholder-black focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none h-32"
              required
            />
            <button
              type="submit"
              className="mt-2 bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-2xl font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </motion.section>
      </div>
    </section>
  );
}

import { useService } from "../context/ServiceContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export default function ServiceRequest() {
  const { selectedService } = useService();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Redirect if no service selected
  useEffect(() => {
    if (!selectedService) navigate("/services");
  }, [selectedService, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://lg-3-nugv.onrender.com/api/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, service: selectedService }),
        }
      );

      if (!response.ok) throw new Error("Failed to send request");

      toast.success("Request sent successfully!", {
        position: "bottom-right",
        autoClose: 3000,
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Failed to send request. Try again.", {
        position: "bottom-right",
      });
      console.error(err);
    }
  };

  if (!selectedService) return null;

  return (
    <section
      className="relative pt-32 pb-20 min-h-screen overflow-hidden"
      style={{
        backgroundColor: "#1a1a1a",
        backgroundImage:
          "radial-gradient(circle at 30% 30%, rgba(255,151,22,0.03), transparent 70%), radial-gradient(circle at 70% 70%, rgba(249,115,22,0.03), transparent 70%)",
      }}
    >
      {/* Subtle orange glow overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.02) 0%, transparent 60%), radial-gradient(circle, rgba(255,151,22,0.01) 0%, transparent 70%)",
        }}
      ></div>

      <div className="relative max-w-xl mx-auto px-6 z-10">
        <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4 text-white"
            style={{ textShadow: "0 0 15px #f97316, 0 0 28px rgba(249,115,22,0.6)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Service Request: {selectedService}
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <input
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-white/20 bg-white/10 text-gray-200 placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-white/20 bg-white/10 text-gray-200 placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />

          <textarea
            name="message"
            placeholder="Tell us about your project"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-white/20 bg-white/10 text-gray-200 placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none h-32 transition"
          />

          <motion.button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Send Request
          </motion.button>
        </motion.form>

        <ToastContainer />
      </div>
    </section>
  );
}

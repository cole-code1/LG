import { useService } from "../context/ServiceContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ServiceRequest() {
  const { selectedService } = useService();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (!selectedService) {
      navigate("/services");
    }
  }, [selectedService, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://lg-xg00.onrender.com/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: selectedService,
        }),
      });

      if (!response.ok) throw new Error("Failed to send request");

      // Show success toast
      toast.success("Request sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Clear form after submission
      setFormData({ name: "", email: "", message: "" });

    } catch (err) {
      toast.error("Failed to send request. Try again.", {
        position: "top-right",
      });
      console.error(err);
    }
  };

  if (!selectedService) return null;

  return (
    <div className="max-w-xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-6">Request: {selectedService}</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <textarea
          name="message"
          placeholder="Tell us about your project"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full border p-3 rounded h-32"
        />

        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition"
        >
          Send Request
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

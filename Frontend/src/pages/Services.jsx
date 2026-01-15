import { Link, useNavigate } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
// import OrangeParallaxBg from "../components/OrangeParallaxBg";
import { useService } from "../context/ServiceContext";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import "./Home.css";

// Images
const DigitalMarketingImg =
  "https://res.cloudinary.com/daqtttdb0/image/upload/v1768241399/Marketing_o540uk.jpg";
const WebDevelopmentImg =
  "https://res.cloudinary.com/daqtttdb0/image/upload/v1768241402/web-development_hci4yv.jpg";
const SEOImg =
  "https://res.cloudinary.com/daqtttdb0/image/upload/v1768241405/SEO_i4ndhf.jpg";

export default function ServicesPage() {
  const navigate = useNavigate();
  const { setSelectedService } = useService();

  // ================= HANDLE CURSOR GLOW =================
  const handleMouseMove = (e) => {
    const box = e.currentTarget;
    const rect = box.getBoundingClientRect();
    box.style.setProperty("--x", `${e.clientX - rect.left}px`);
    box.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const handleServiceClick = (serviceName) => {
    setSelectedService(serviceName);
    localStorage.setItem("selectedService", serviceName);
    navigate("/service-request");
  };

  const services = [
    {
      title: "Digital Marketing",
      content: `Digital marketing is more than just running ads—it's about creating meaningful connections with your audience and turning them into loyal customers.`,
      features: [
        "Social Media Marketing",
        "Google & Meta Ads",
        "Email Campaigns",
        "Conversion Optimization",
        "Social Media Strategy Development",
        "Content Creation and Curation",
        "Social Media Campaigns",
        "Community Management",
        "Influencer Marketing",
        "Social Media Account Management",
        "Social Media Analytics and Reporting"
      ],
      image: DigitalMarketingImg,
      buttonText: "Get Marketing Help",
    },
    {
      title: "Web Development",
      content: `Your website is the foundation of your digital presence. We build modern, fast, and scalable websites that reflect your brand identity and engage users.`,
      features: [
        "React & Tailwind",
        "Landing Pages",
        "E-commerce Solutions",
        "API Integrations",
        "Website Design & Website Redesign",
        "Custom Website Development",
        "E-commerce Web Development",
        "CMS and Portal Development",
        "Website Optimization & Website Security",
        "Website Maintenance and Support",
        "Website Hosting and Domain Setup"
      ],
      image: WebDevelopmentImg,
      buttonText: "Build My Website",
    },
    {
      title: "SEO Optimization",
      content: `Visibility is everything. Our SEO strategies help your website rank higher, attract organic traffic, and increase leads.`,
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Analytics & Reporting",
      "Keyword Research and Mapping",
"Competitors Analysis",
"Content Optimization",
"Local SEO & Technical SEO",
"Links Audit and Building",
"Website Speed Optimization",
"SEO Analytics and Reporting",
      ],
      image: SEOImg,
      buttonText: "Improve My Rankings",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* ================= HEADER ================= */}
      <section
        className="relative pt-32 pb-20 text-center"
        style={{ backgroundColor: "#ac9e9e" }}
      >
        
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4 text-black"
            style={{ textShadow: "0 0 6px rgba(249,115,22,0.4)" }}
          >
            Our Services
          </h1>
          <p
            className="text-lg md:text-xl text-white"
            style={{ textShadow: "0 0 6px rgba(249,115,22,0.4)" }}
          >
            We combine strategy, creativity, and technology to deliver digital solutions that
            transform businesses and engage audiences across the web.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      {services.map((service, index) => (
        <FadeInSection key={index}>
          <section
            className={`py-20 ${
              index % 2 === 0 ? "bg-black" : "bg-neutral-950"
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <motion.div
                onMouseMove={handleMouseMove}
                className="glow-box p-8 rounded-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {index > 0 && (
                  <div className="flex justify-center mb-6">
                    <FaStar className="text-orange-400 text-xl animate-pulse" />
                  </div>
                )}

                <h2
                  className="text-3xl font-bold mb-4 text-orange-400"
                  style={{ textShadow: "0 0 10px #f97316" }}
                >
                  {service.title}
                </h2>

                <p
                  className="text-gray-300 text-lg mb-6 leading-relaxed"
                  style={{ textShadow: "0 0 6px rgba(249,115,22,0.4)" }}
                >
                  {service.content}
                </p>

                <ul className="space-y-2 text-gray-400 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i}>✔ {feature}</li>
                  ))}
                </ul>

                <button
                  onClick={() => handleServiceClick(service.title)}
                  className="mt-6 bg-orange-500 hover:bg-orange-400 text-black px-6 py-3 rounded-lg font-semibold transition"
                >
                  {service.buttonText}
                </button>
              </motion.div>

              {/* Image */}
              <div
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 md:h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </section>
        </FadeInSection>
      ))}

      {/* ================= CTA ================= */}
      <FadeInSection>
        <section
          className="relative py-20 text-center"
          style={{ backgroundColor: "#ac9e9e" }}
        >
          
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-black"
              style={{ textShadow: "0 0 6px rgba(249,115,22,0.4)" }}
            >
              Let’s grow your business together
            </h2>
            <p
              className="mb-6 text-white"
              style={{ textShadow: "0 0 6px rgba(249,115,22,0.4)" }}
            >
              Ready to start your next digital project? Contact us today and let’s create
              something extraordinary together.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </FadeInSection>
    </section>
  );
}

import { Link, useNavigate } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
import OrangeParallaxBg from "../components/OrangeParallaxBg";
import { useService } from "../context/ServiceContext";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import "./Home.css";

// Images
import DigitalMarketingImg from "../assets/images/Marketing.jpg";
import WebDevelopmentImg from "../assets/images/web-development.jpg";
import SEOImg from "../assets/images/SEO.jpg";

export default function ServicesPage() {
  const navigate = useNavigate();
  const { setSelectedService } = useService();

  const handleServiceClick = (serviceName) => {
    setSelectedService(serviceName);
    localStorage.setItem("selectedService", serviceName);
    navigate("/service-request");
  };

  const services = [
    {
      title: "Digital Marketing",
      content: `
        Digital marketing is more than just running ads—it's about creating meaningful connections
        with your audience and turning them into loyal customers. We design campaigns that combine
        creativity and data-driven strategies, leveraging social media, Google & Meta Ads, and
        personalized email campaigns to maximize ROI. Conversion optimization ensures that every
        click brings value, helping your business grow sustainably.
      `,
      features: [
        "Social Media Marketing",
        "Google & Meta Ads",
        "Email Campaigns",
        "Conversion Optimization",
      ],
      image: DigitalMarketingImg,
      buttonText: "Get Marketing Help",
    },
    {
      title: "Web Development",
      content: `
        Your website is the foundation of your digital presence. We build modern, fast, and
        scalable websites that reflect your brand identity and engage users. From responsive
        landing pages to full e-commerce solutions and API integrations, we ensure your
        digital storefront is optimized for performance and conversions.
      `,
      features: [
        "React & Tailwind",
        "Landing Pages",
        "E-commerce Solutions",
        "API Integrations",
      ],
      image: WebDevelopmentImg,
      buttonText: "Build My Website",
    },
    {
      title: "SEO Optimization",
      content: `
        Visibility is everything. Our SEO strategies help your website rank higher on Google,
        attract high-quality organic traffic, and increase leads. From keyword research and
        on-page optimization to technical SEO and analytics reporting, we provide a
        comprehensive approach to long-term growth.
      `,
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Analytics & Reporting",
      ],
      image: SEOImg,
      buttonText: "Improve My Rankings",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#FFF7ED] to-[#FFE8CC] overflow-hidden">
      {/* Header */}
      <section className="relative pt-32 pb-20 text-center">
        <OrangeParallaxBg />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4 text-white-500"
            style={{ textShadow: "0 0 15px #ffffff, 0 0 25px #000000" }}
          >
            Our Services
          </h1>
          <p
            className="text-lg md:text-xl text-white"
            style={{ textShadow: "0 0 5px #111111" }}
          >
            We combine strategy, creativity, and technology to deliver digital solutions that
            transform businesses and engage audiences across the web.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <FadeInSection key={index}>
          <section
            className={`py-20 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <motion.div
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
                  className="text-3xl font-bold mb-4 text-orange-500"
                  style={{ textShadow: "0 0 10px #FF9F43, 0 0 20px #FFB870" }}
                >
                  {service.title}
                </h2>
                <p
                  className="text-gray-800 text-lg mb-6 leading-relaxed"
                  style={{ textShadow: "0 0 3px #FFAB6B" }}
                >
                  {service.content}
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i}>✔ {feature}</li>
                  ))}
                </ul>
                <button
                  onClick={() => handleServiceClick(service.title)}
                  className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  {service.buttonText}
                </button>
              </motion.div>

              {/* Image */}
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 md:h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Section Divider */}
            <div className="my-12 h-[2px] bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 rounded-full opacity-50"></div>
          </section>
        </FadeInSection>
      ))}

      {/* CTA */}
      <FadeInSection>
        <section className="relative py-20 text-white text-center overflow-hidden">
          <OrangeParallaxBg />
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-black"
              style={{ textShadow: "0 0 15px #ffffff, 0 0 25px #1a1a1a" }}
            >
              Let’s grow your business together
            </h2>
            <p
              className="mb-6 text-white"
              style={{ textShadow: "0 0 5px #000000" }}
            >
              Ready to start your next digital project? Contact us today and let’s create
              something extraordinary together.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </FadeInSection>
    </section>
  );
}

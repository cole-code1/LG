import { useNavigate } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
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

const ContentMarketingImg =
  "https://res.cloudinary.com/daqtttdb0/image/upload/v1768649515/Content-Marketing_sr7kxj.jpg";
const PPCAdsImg =
  "https://res.cloudinary.com/daqtttdb0/image/upload/v1768649515/PPC-Advertising_ewhgbs.jpg";

const GraphicDesignImg =
  "https://res.cloudinary.com/daqtttdb0/image/upload/v1768649514/Graphic-Design_ja3pnn.jpg";

const socialMarketingImg =
  "https://res.cloudinary.com/daqtttdb0/image/upload/v1768649515/Social-Media-Marketing_zvq8ce.png";

const businessBrandingImg =
  "https://res.cloudinary.com/daqtttdb0/image/upload/v1768649515/Business-Branding_rbmtax.png"; 

export default function ServicesPage() {
  const navigate = useNavigate();
  const { setSelectedService } = useService();

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
    id: "social-marketing",
    title: "Social Marketing",
    content:
      "Build strong brand presence and convert attention into real customers through strategic social campaigns.",
    features: [
      "Social Media Strategy",
      "Content Creation & Curation",
      "Paid Social Campaigns",
      "Community Management",
      "Influencer Marketing",
      "Analytics & Reporting",
    ],
    image: socialMarketingImg,
    buttonText: "Boost My Social Presence",
  },

  {
    id: "web-development",
    title: "Web Development",
    content:
      "Fast, scalable, and secure websites built to convert visitors into customers.",
    features: [
      "Website Design & Redesign",
      "Custom Web Development",
      "E-commerce Solutions",
      "CMS & Portals",
      "Optimization & Security",
      "Hosting & Domain Setup",
    ],
    image: WebDevelopmentImg,
    buttonText: "Build My Website",
  },

  {
    id: "seo",
    title: "SEO Optimization",
    content:
      "Rank higher, drive qualified traffic, and grow your business organically.",
    features: [
      "Keyword Research",
      "Competitor Analysis",
      "Technical & Local SEO",
      "Content Optimization",
      "Link Building",
      "SEO Reporting",
    ],
    image: SEOImg,
    buttonText: "Improve My Rankings",
  },

  {
    id: "google-ads",
    title: "Google Ads / PPC Advertising",
    content:
      "Data-driven ad campaigns designed for maximum ROI and scalable growth.",
    features: [
      "Keyword Research & Ad Creation",
      "Google Ads Management",
      "Facebook & Instagram Ads",
      "Retargeting Campaigns",
      "Performance Tracking",
    ],
    image: PPCAdsImg,
    buttonText: "Launch Paid Ads",
  },

  {
    id: "content-marketing",
    title: "Content Marketing",
    content:
      "Engaging content that builds trust, authority, and conversions.",
    features: [
      "Content Strategy",
      "Blog & Article Writing",
      "Website Copywriting",
      "Email Campaigns",
      "Content Distribution",
      "Performance Reporting",
    ],
    image: ContentMarketingImg,
    buttonText: "Create Content",
  },

  {
    id: "graphic-design",
    title: "Graphic Design",
    content:
      "High-impact visuals that elevate your brand and communicate clearly.",
    features: [
      "Logo Design",
      "Brand Identity",
      "UI/UX Design",
      "Marketing Materials",
      "Design Systems",
      "Creative Consultation",
    ],
    image: GraphicDesignImg,
    buttonText: "Design My Brand",
  },

  {
    id: "website-maintenance",
    title: "Website Maintenance",
    content:
      "Keep your website secure, fast, and always up to date.",
    features: [
      "Regular Updates",
      "Security Monitoring",
      "Malware Removal",
      "Content Updates",
    ],
    image: WebDevelopmentImg,
    buttonText: "Maintain My Website",
  },

  {
    id: "business-branding",
    title: "Business Corporate Branding",
    content:
      "Create a strong, consistent brand identity that builds trust and recognition.",
    features: [
      "Brand Strategy",
      "Visual Identity Design",
      "Brand Guidelines",
      "Messaging & Positioning",
      "Brand Management",
    ],
    image: businessBrandingImg,
    buttonText: "Build My Brand",
  },
];


  return (
    <section className="relative overflow-hidden">
      {/* HEADER */}
      <section className="pt-32 pb-20 text-center bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-4 text-orange-400">
            Our Services
          </h1>
          <p className="text-xl text-black">
            Strategy, creativity, and technology combined for real growth.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      {services.map((service, index) => (
        <FadeInSection key={service.id}>
          <section
            id={service.id}
            className={`py-20 ${index % 2 === 0 ? "bg-black" : "bg-neutral-950"}`}
          >
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                onMouseMove={handleMouseMove}
                className="glow-box p-8 rounded-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {index > 0 && (
                  <div className="flex justify-center mb-6">
                    <FaStar className="text-orange-400 animate-pulse" />
                  </div>
                )}

                <h2 className="text-3xl font-bold mb-4 text-orange-400">
                  {service.title}
                </h2>

                <p className="text-gray-300 mb-6">
                  {service.content}
                </p>

                <ul className="space-y-2 text-gray-400">
                  {service.features.map((f, i) => (
                    <li key={i}>✔ {f}</li>
                  ))}
                </ul>

                <button
                  onClick={() => handleServiceClick(service.title)}
                  className="mt-6 bg-orange-500 hover:bg-orange-400 text-black px-6 py-3 rounded-lg font-semibold"
                >
                  {service.buttonText}
                </button>
              </motion.div>

              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 md:h-full object-cover rounded-xl hover:scale-105 transition"
              />
            </div>
          </section>
        </FadeInSection>
      ))}
    </section>
  );
}

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

// Example project images
import EcommerceImg from "../assets/images/Donex.png";
// import MarketingImg from "../assets/images/project-marketing.jpg";
// import SEOImg from "../assets/images/project-seo.jpg";

export default function Projectsboard() {
  const projects = [
    {
      title: "Automated Donation Platform Website",
      description:
        "A fully responsive donation platform with payment gateway and admin panel.",
      tags: ["React", "Tailwind", "API", "Stripe"],
      image: EcommerceImg,
    },
    {
      title: "Digital Marketing Campaign",
      description:
        "Social media and paid ad campaign that increased conversions by 35%.",
      tags: ["SEO", "Meta Ads", "Google Ads", "Analytics"],
    //   image: MarketingImg,
    },
    {
      title: "SEO Optimization Project",
      description:
        "On-page and technical SEO for a corporate website to rank higher on Google.",
      tags: ["SEO", "Technical SEO", "Analytics", "Content Strategy"],
    //   image: SEOImg,
    },
  ];

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#FFF7ED] to-[#FFE8CC] min-h-screen overflow-hidden">
      {/* Gradient overlay for depth */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-tr from-[#FFD699] via-[#FFB870] to-[#FFCBA0] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* HEADER */}
        <header className="mb-16 text-center">
          <h1
            className="text-5xl font-extrabold mb-4 text-white-500"
            style={{ textShadow: "0 0 15px #fffcfa, 0 0 25px #000000" }}
          >
            Our Projects
          </h1>
          <p
            className="text-gray-700 text-lg"
            style={{ textShadow: "0 0 5px #FF9F43" }}
          >
            Explore some of the digital solutions we've built for our clients.
          </p>
        </header>

        {/* PROJECT CARDS */}
        <div className="grid gap-16">
          {projects.map((project, index) => (
            <motion.section
              key={index}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } bg-white rounded-2xl shadow-lg overflow-hidden`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* TEXT */}
              <div className="p-8">
                {index > 0 && (
                  <div className="flex justify-center md:justify-start mb-4">
                    <FaStar className="text-orange-400 text-xl animate-pulse" />
                  </div>
                )}

                <h2
                  className="text-3xl font-bold mb-4 text-orange-500"
                  style={{
                    textShadow: "0 0 10px #FF9F43, 0 0 20px #FFB870",
                  }}
                >
                  {project.title}
                </h2>
                <p
                  className="text-gray-800 mb-6 leading-relaxed"
                  style={{ textShadow: "0 0 3px #FFAB6B" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-orange-100 text-orange-600 text-sm font-semibold px-3 py-1 rounded-full transition hover:bg-orange-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* IMAGE */}
              <div className="overflow-hidden md:rounded-r-2xl rounded-b-2xl md:rounded-l-none shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.section>
          ))}

          {/* Section Divider */}
          <div className="my-12 h-[2px] bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  );
}

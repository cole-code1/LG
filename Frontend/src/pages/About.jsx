import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import FadeInSection from "../components/FadeInSection";

export default function About() {
  const sections = [
    {
      title: "Our Story",
      content: `We started with a simple mission: to help businesses thrive in the digital world. Over the years, we've combined creativity, technology, and data-driven strategies to deliver measurable results for our clients. We believe in building long-term relationships and growing together with our clients.`,
    },
    {
      title: "Our Mission",
      content: `Our mission is to empower businesses of all sizes to grow online. We focus on providing end-to-end digital solutions that drive engagement, increase sales, and improve brand visibility. Every project we undertake is guided by strategy, creativity, and measurable impact.`,
    },
    {
      title: "Our Vision",
      content: `To become a globally recognized digital agency known for innovation, reliability, and transformative digital experiences. We aim to inspire businesses to leverage technology to grow sustainably and make a real difference in their industries.`,
    },
    {
      title: "Meet the Team",
      content: `Our team is made up of passionate marketers, designers, developers, and strategists who collaborate to deliver outstanding results. Each member brings unique expertise, creativity, and dedication, ensuring that every project exceeds expectations and achieves measurable success.`,
    },
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden"  style={{ backgroundColor: "#ffffff" }}>
      {/* subtle glow overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.03) 0%, transparent 60%), radial-gradient(circle, rgba(255,151,22,0.02) 0%, transparent 70%)",
        }}
      ></div>

      <div className="relative max-w-4xl mx-auto px-6 z-10">
        {/* PAGE HEADER */}
        <header className="mb-16 text-center">
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4 text-orange-400"
          >
            About Us
          </h1>
          <p
            className="text-black text-lg sm:text-xl"
             
          >
            Learn more about our story, mission, vision, and the team behind our success.
          </p>
        </header>

        {/* ABOUT CONTENT */}
        {sections.map((section, index) => (
          <FadeInSection key={index}>
            <motion.div
              className="mb-16 p-8 rounded-2xl glow-box bg-black"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Divider Icon */}
              {index > 0 && (
                <div className="flex justify-center mb-6">
                  <FaStar className="text-orange-400 text-xl animate-pulse" />
                </div>
              )}

              {/* Section Title */}
              <h2
                className="text-3xl font-bold mb-4 text-orange-400"
              >
                {section.title}
              </h2>

              {/* Section Content */}
              <p
                className="text-gray-300 text-lg leading-relaxed"
              >
                {section.content}
              </p>

              {/* Section Gradient Divider */}
              <div className="my-8 h-[2px] bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 rounded-full opacity-50"></div>
            </motion.div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}

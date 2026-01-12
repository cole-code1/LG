import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function About() {
  const sections = [
    {
      title: "Our Story",
      content: `
        We started with a simple mission: to help businesses thrive in the digital world.
        Over the years, we've combined creativity, technology, and data-driven strategies
        to deliver measurable results for our clients.
      `,
    },
    {
      title: "Our Mission",
      content: `
        Our mission is to empower businesses of all sizes to grow online.
        We focus on providing end-to-end digital solutions that drive engagement,
        increase sales, and improve brand visibility.
      `,
    },
    {
      title: "Our Vision",
      content: `
        To become a globally recognized digital agency known for innovation,
        reliability, and transformative digital experiences that make a real impact
        for our clients.
      `,
    },
    {
      title: "Meet the Team",
      content: `
        Our team is made up of passionate marketers, designers, developers,
        and strategists who collaborate to deliver outstanding results.
        Each team member brings expertise, creativity, and dedication to every project.
      `,
    },
  ];

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#FFF7ED] to-[#FFE8CC] min-h-screen overflow-hidden">
      {/* Gradient overlay for depth */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-tr from-[#FFD699] via-[#FFB870] to-[#FFCBA0] opacity-20"></div>

      <div className="relative max-w-4xl mx-auto px-6 z-10">
        {/* Page Header */}
        <motion.header
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-5xl md:text-6xl font-extrabold mb-4 text-white-500"
            style={{ textShadow: "0 0 15px #fffcfa, 0 0 25px #000000" }}
          >
            About Us
          </h1>
          <p
            className="text-lg md:text-xl text-white-800"
            style={{ textShadow: "0 0 5px #ebe6e2" }}
          >
            Learn more about our story, mission, vision, and the team behind our success.
          </p>
        </motion.header>

        {/* Sections */}
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Divider icon between sections */}
            {index > 0 && (
              <div className="flex justify-center mb-6">
                <FaStar className="text-orange-400 text-xl animate-pulse" />
              </div>
            )}

            <h2
              className="text-3xl font-bold mb-4 text-orange-500"
              style={{ textShadow: "0 0 10px #FF9F43, 0 0 20px #FFB870" }}
            >
              {section.title}
            </h2>
            <p
              className="text-gray-800 text-lg leading-relaxed"
              style={{ textShadow: "0 0 3px #FFAB6B" }}
            >
              {section.content}
            </p>

            {/* Gradient divider line */}
            <div className="my-8 h-[2px] bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 rounded-full opacity-50"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

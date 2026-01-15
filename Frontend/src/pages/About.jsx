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
    <section
      className="relative pt-32 pb-20 min-h-screen overflow-hidden"
      style={{
        backgroundColor: "#1a1a1a", // dark base
        backgroundImage:
          "radial-gradient(circle at 30% 30%, rgba(255,151,22,0.05), transparent 70%), radial-gradient(circle at 70% 70%, rgba(249,115,22,0.05), transparent 70%)",
      }}
    >
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
        <motion.header
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-white"
            style={{ textShadow: "0 0 15px #f97316, 0 0 28px rgba(249,115,22,0.6)" }}
          >
            About Us
          </h1>
          <p
            className="text-gray-300 text-lg md:text-xl"
            style={{ textShadow: "0 0 6px rgba(249,115,22,0.4)" }}
          >
            Learn more about our story, mission, vision, and the team behind our success.
          </p>
        </motion.header>

        {/* SECTIONS */}
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

            {/* Section Title */}
            <h2
              className="text-3xl font-bold mb-4 text-orange-500"
              style={{
                textShadow:
                  "0 0 10px #f97316, 0 0 20px rgba(249,115,22,0.5)",
              }}
            >
              {section.title}
            </h2>

            {/* Section Content */}
            <p
              className="text-gray-300 text-lg leading-relaxed"
              style={{ textShadow: "0 0 3px rgba(249,115,22,0.3)" }}
            >
              {section.content}
            </p>

            {/* Section Gradient Divider */}
            <div className="my-8 h-[2px] bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 rounded-full opacity-50"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

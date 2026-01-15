import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import FadeInSection from "../components/FadeInSection";

export default function Blog() {
  const sections = [
    {
      title: "Introduction",
      content: `In today’s fast-moving digital world, having an online presence is essential. Businesses that fail to adapt risk being left behind by competitors who understand how to leverage technology, data, and user experience.`,
    },
    {
      title: "1. Why Digital Presence Matters",
      content: `Consumers research, compare, and make purchasing decisions online. A strong digital presence allows your business to reach customers 24/7, build trust, compete with larger companies, and generate consistent leads.`,
    },
    {
      title: "2. Digital Marketing: Turning Traffic into Customers",
      content: `Digital marketing is about understanding your audience and delivering the right message at the right time. Social media, Google & Meta Ads, and email campaigns are essential.`,
    },
    {
      title: "3. Web Development: Your Digital Foundation",
      content: `Your website is often the first impression users have of your brand. A modern website should be fast, responsive, mobile-first, visually appealing, and optimized for conversions.`,
    },
    {
      title: "4. SEO: Winning the Long-Term Game",
      content: `Search Engine Optimization (SEO) is one of the most powerful long-term growth strategies. Technical SEO, on-page SEO, and content strategy help you rank higher on Google and attract organic traffic.`,
    },
    {
      title: "5. Data, Analytics, and Continuous Improvement",
      content: `One of the biggest advantages of digital marketing is measurability. Tools like Google Analytics and Search Console provide valuable insights into user behavior and campaign performance. Businesses that succeed online continuously analyze data and optimize based on results.`,
    },
    {
      title: "Conclusion",
      content: `Digital success requires strategy, consistency, and the right expertise. Combining marketing, web development, and SEO practices builds a powerful and sustainable online presence. The future belongs to brands that invest in digital growth today.`,
    },
  ];

  return (
    <section
      className="relative pt-32 pb-20 overflow-hidden"
      style={{ backgroundColor: "#ac9e9e" }}// dark base
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
        <header className="mb-16 text-center">
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4 text-black"
 style={{ textShadow: "0 0 6px rgba(249,115,22,0.4)" }}
          >
            The Ultimate Guide to Growing Your Business Online
          </h1>
          <p
            className="text-white text-lg sm:text-xl"
            style={{ textShadow: "0 0 6px rgba(249,115,22,0.4)" }}
          >
            Digital marketing, web development, and SEO strategies that actually work
          </p>
        </header>

        {/* BLOG CONTENT */}
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
                style={{
                  textShadow: "0 0 10px #f97316",
                }}
              >
                {section.title}
              </h2>

              {/* Section Content */}
              <p
                className="text-gray-300 text-lg leading-relaxed"
                style={{ textShadow: "0 0 6px rgba(249,115,22,0.4)" }}
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

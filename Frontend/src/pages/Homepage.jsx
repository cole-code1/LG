import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
import "./Home.css";

export default function Home() {
  return (
    <div className="container-bg min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 text-white text-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <FadeInSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Grow Your Business With Digital Marketing
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              We help brands scale with SEO, web development, and performance marketing.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/services"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Get Started
              </Link>
              <Link
                to="/projectsboard"
                className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition"
              >
                View Projects
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Digital Marketing", desc: "Ads, social media & conversions", link: "/services#digital-marketing" },
              { title: "Web Development", desc: "Modern, fast & scalable sites", link: "/services#web-development" },
              { title: "SEO Optimization", desc: "Rank higher on Google", link: "/services#seo" },
            ].map((service, i) => (
              <FadeInSection key={i}>
                <Link
                  to={service.link}
                  className="block bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-4">Ready to scale your business?</h2>
          <p className="mb-6">Let’s build something amazing together.</p>
          <Link
            to="/contact"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </FadeInSection>
      </section>
    </div>
  );
}

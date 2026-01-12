import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
import "./Home.css";

export default function Home() {
  const services = [
    {
      title: "Digital Marketing",
      desc: "Ads, social media & conversions",
      link: "/services#digital-marketing",
    },
    {
      title: "Web Development",
      desc: "Modern, fast & scalable sites",
      link: "/services#web-development",
    },
    {
      title: "SEO Optimization",
      desc: "Rank higher on Google",
      link: "/services#seo",
    },
  ];

  return (
    <div className="container-bg ">
      {/* HERO SECTION */}
      <section className="pt-28 text-white text-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <FadeInSection>
            <h1
              className="text-4xl md:text-6xl text-black font-bold mb-6"
              style={{
                textShadow: "0 0 15px #fbf9f8, 0 0 25px #000000",
              }}
            >
              Grow Your Business With Digital Marketing
            </h1>
            <p
              className="max-w-2xl mx-auto mb-8 text-lg"
              style={{ color: "#ffffff", textShadow: "0 0 5px #000000" }}
            >
              We help brands scale with SEO, web development, and performance marketing.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
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

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
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

      {/* CTA SECTION */}
      <section className="py-20 bg-dark-orange-600 text-white text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-black mb-4"
            style={{ textShadow: "0 0 15px #f9f2eb, 0 0 25px #181513" }}
          >Ready to scale your business?</h2>
          <p className="mb-6 text-white">Let’s build something amazing together.</p>
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

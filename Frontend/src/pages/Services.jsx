import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
import "./Home.css";

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-20 bg-indigo-600 text-white text-center">
          <div className="diagonal-bg absolute inset-0 z-0"></div>
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="max-w-2xl mx-auto">
          We provide end-to-end digital solutions to grow your business online.
        </p>
      </section>

      {/* Digital Marketing */}
      <FadeInSection>
        <section id="digital-marketing" className="py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Digital Marketing</h2>
              <p className="text-gray-600 mb-6">
                Data-driven campaigns that convert visitors into customers.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✔ Social Media Marketing</li>
                <li>✔ Google & Meta Ads</li>
                <li>✔ Email Campaigns</li>
                <li>✔ Conversion Optimization</li>
              </ul>
              <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg">
                Get Marketing Help
              </button>
            </div>
            <div className="bg-gray-100 h-64 rounded-xl" />
          </div>
        </section>
      </FadeInSection>

      {/* Web Development */}
      <FadeInSection>
        <section id="web-development" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-100 h-64 rounded-xl" />
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4">Web Development</h2>
              <p className="text-gray-600 mb-6">
                Fast, modern websites built for performance and scalability.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✔ React & Tailwind</li>
                <li>✔ Landing Pages</li>
                <li>✔ E-commerce Solutions</li>
                <li>✔ API Integrations</li>
              </ul>
              <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg">
                Build My Website
              </button>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* SEO */}
      <FadeInSection>
        <section id="seo" className="py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">SEO Optimization</h2>
              <p className="text-gray-600 mb-6">
                Rank higher on Google and attract high-quality organic traffic.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✔ Keyword Research</li>
                <li>✔ On-Page SEO</li>
                <li>✔ Technical SEO</li>
                <li>✔ Analytics & Reporting</li>
              </ul>
              <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg">
                Improve My Rankings
              </button>
            </div>
            <div className="bg-gray-100 h-64 rounded-xl" />
          </div>
        </section>
      </FadeInSection>

      {/* CTA */}
      <FadeInSection>
        <section className="py-20 bg-indigo-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let’s grow your business together
          </h2>
          <p className="mb-6">
            Ready to start your next digital project?
          </p>
          <Link to="/contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold">
            Contact Us
          </Link>
        </section>
      </FadeInSection>
    </>
  );
}

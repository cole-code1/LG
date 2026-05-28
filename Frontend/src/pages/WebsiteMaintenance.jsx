import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useService } from "../context/ServiceContext";
import FadeInSection from "../components/FadeInSection.jsx";

export default function WebsiteMaintenance() {
  const { setSelectedService } = useService();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle service request
  const handleRequest = () => {
    const serviceName = "Website Maintenance";

    setSelectedService(serviceName);
    localStorage.setItem("selectedService", serviceName);
  };

  const maintenanceServices = [
    "Website Updates & Version Control",
    "Security Monitoring & Protection",
    "Malware Scanning & Removal",
    "Regular Website Backups",
    "Performance Optimization",
    "Bug Fixes & Issue Resolution",
    "Content Updates & Edits",
    "Uptime Monitoring",
    "Plugin & Theme Maintenance",
    "Speed Optimization (Core Web Vitals)",
  ];

  const benefits = [
    {
      title: "Keep Your Website Secure",
      description:
        "Protect your website from hackers, malware, and vulnerabilities with continuous security monitoring and updates.",
    },
    {
      title: "Ensure Maximum Uptime",
      description:
        "Minimize downtime and keep your website accessible 24/7 for customers and visitors.",
    },
    {
      title: "Improve Performance & Speed",
      description:
        "Optimize website loading times for better user experience and improved SEO rankings.",
    },
    {
      title: "Avoid Costly Technical Issues",
      description:
        "Prevent major breakdowns and expensive repairs through proactive maintenance and monitoring.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Website Audit",
      description:
        "We analyze your website’s structure, performance, security, and technical health.",
    },
    {
      step: "02",
      title: "Setup & Monitoring",
      description:
        "We implement monitoring tools for uptime, security threats, and performance tracking.",
    },
    {
      step: "03",
      title: "Regular Maintenance",
      description:
        "We perform updates, backups, bug fixes, and optimizations on a scheduled basis.",
    },
    {
      step: "04",
      title: "Security Management",
      description:
        "We actively protect your website from malware, attacks, and vulnerabilities.",
    },
    {
      step: "05",
      title: "Reporting & Improvements",
      description:
        "We provide regular reports and continuous improvements for long-term stability.",
    },
  ];

  const faqs = [
    {
      question: "Why is website maintenance important?",
      answer:
        "Website maintenance ensures security, performance, uptime, and long-term functionality of your website.",
    },
    {
      question: "How often is website maintenance done?",
      answer:
        "Maintenance is typically performed weekly or monthly depending on your plan and website complexity.",
    },
    {
      question: "Do you fix broken websites?",
      answer:
        "Yes. We fix bugs, errors, broken pages, and performance issues as part of maintenance support.",
    },
    {
      question: "Do you provide backups?",
      answer:
        "Yes. We perform regular automated and manual backups to ensure data safety and recovery options.",
    },
  ];

  return (
    <main className="bg-white text-black overflow-hidden">
      {/* HERO SECTION */}
      <FadeInSection>
      <section className="relative py-32 px-6 bg-gradient-to-br from-white via-orange-50 to-zinc-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-orange-400 mb-4 text-sm font-bold">
              Website Maintenance
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Keep Your Website Secure, Fast & Fully Optimized
            </h1>

            <p className="text-black text-lg leading-relaxed mb-8">
              Professional website maintenance services that ensure your site
              stays updated, secure, fast, and fully functional at all times.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/service-request"
                onClick={handleRequest}
                className="bg-orange-500 hover:bg-orange-400 transition px-8 py-4 rounded-xl font-semibold text-black"
              >
                Maintain My Website
              </Link>

              <Link
                to="/service-request"
                onClick={handleRequest}
                className="border border-orange-500 hover:bg-orange-500/10 transition px-8 py-4 rounded-xl font-semibold text-orange-400"
              >
                Get Maintenance Plan
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://res.cloudinary.com/daqtttdb0/image/upload/v1768241402/web-development_hci4yv.jpg"
              alt="Website Maintenance"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* SERVICES SECTION */}
        <FadeInSection>
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-orange-400">
              Maintenance Services Included
            </h2>

            <p className="text-black max-w-3xl mx-auto">
              Complete website care solutions designed to keep your website
              healthy, secure, and high-performing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {maintenanceServices.map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500 transition"
              >
                <div className="text-orange-400 text-2xl mb-4">✦</div>

                <h3 className="text-xl font-semibold text-white">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* BENEFITS SECTION */}
      <FadeInSection>
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-400 mb-4">
              Why Website Maintenance Matters
            </h2>

            <p className="text-black max-w-3xl mx-auto">
              Regular maintenance protects your business, improves performance,
              and ensures a reliable online presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800"
              >
                <h3 className="text-2xl font-bold mb-4 text-orange-400">
                  {benefit.title}
                </h3>

                <p className="text-zinc-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* PROCESS SECTION */}
      <FadeInSection>
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-400 mb-4">
              Our Maintenance Process
            </h2>

            <p className="text-black max-w-3xl mx-auto">
              A proactive system designed to keep your website secure,
              optimized, and fully functional at all times.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-800 rounded-2xl p-6"
              >
                <div className="text-5xl font-extrabold text-orange-500/20 mb-4">
                  {item.step}
                </div>

                <h3 className="text-xl font-bold mb-3 text-orange-400">
                  {item.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* FAQ SECTION */}
      <FadeInSection>
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-400 mb-4">
              Frequently Asked Questions?
            </h2>

            <p className="text-black">
              Common questions about website maintenance services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold mb-4 text-orange-400">
                  {faq.question}
                </h3>

                <p className="text-zinc-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>
      {/* CTA SECTION */}
      <FadeInSection>
      <section className="py-28 px-6 bg-white text-orange-400 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6">
            Keep Your Website Running Perfectly
          </h2>

          <p className="text-lg mb-10 font-medium text-black">
            Let’s secure, maintain, and optimize your website for long-term
            stability and performance.
          </p>

          <Link
            to="/service-request"
            onClick={handleRequest}
            className="inline-block bg-orange-400 hover:bg-zinc-900 transition text-white px-10 py-5 rounded-2xl font-bold text-lg"
          >
            Start Maintenance Plan
          </Link>
        </div>
      </section>
      </FadeInSection>
    </main>
  );
}
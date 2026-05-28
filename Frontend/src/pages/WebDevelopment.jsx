import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useService } from "../context/ServiceContext";
import FadeInSection from "../components/FadeInSection.jsx";

export default function WebDevelopment() {
  const { setSelectedService } = useService();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle service selection
  const handleRequest = () => {
    const serviceName = "Web Development";

    setSelectedService(serviceName);
    localStorage.setItem("selectedService", serviceName);
  };

  const webServices = [
    "Custom Website Development",
    "Business Website Design",
    "Responsive Mobile Design",
    "E-Commerce Development",
    "Landing Page Development",
    "CMS & Admin Dashboard Integration",
    "Website Speed Optimization",
    "API & Third-Party Integrations",
    "Website Security & Protection",
    "Hosting & Deployment Support",
  ];

  const benefits = [
    {
      title: "Build a Professional Online Presence",
      description:
        "Create modern, visually impressive websites that represent your brand professionally and build customer trust.",
    },
    {
      title: "Improve User Experience",
      description:
        "Responsive and optimized websites provide smooth navigation and better experiences across all devices.",
    },
    {
      title: "Increase Conversions & Sales",
      description:
        "Conversion-focused layouts and strategic design elements help turn visitors into customers.",
    },
    {
      title: "Scale Your Business Digitally",
      description:
        "Modern web solutions help businesses grow online with scalable infrastructure and performance optimization.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We analyze your business goals, target audience, and project requirements to build a strategic development plan.",
    },
    {
      step: "02",
      title: "UI/UX Design",
      description:
        "We create modern layouts and user-focused designs that improve usability and engagement.",
    },
    {
      step: "03",
      title: "Development & Integration",
      description:
        "We build secure, scalable, and responsive websites using modern development technologies.",
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description:
        "We test performance, responsiveness, speed, and security to ensure a high-quality final product.",
    },
    {
      step: "05",
      title: "Launch & Support",
      description:
        "We deploy your website and provide ongoing support, updates, and maintenance assistance.",
    },
  ];

  const faqs = [
    {
      question: "What types of websites do you build?",
      answer:
        "We build business websites, e-commerce platforms, landing pages, portfolios, dashboards, and custom web applications.",
    },
    {
      question: "Will my website be mobile responsive?",
      answer:
        "Yes. Every website is fully responsive and optimized for desktops, tablets, and mobile devices.",
    },
    {
      question: "Do you provide hosting and domain setup?",
      answer:
        "Yes. We assist with hosting setup, domain configuration, deployment, and website launch support.",
    },
    {
      question: "Can you redesign an existing website?",
      answer:
        "Yes. We provide complete website redesign services to improve design, speed, functionality, and performance.",
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
              Web Development
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Modern Websites Built for Performance & Growth
            </h1>

            <p className="text-black text-lg leading-relaxed mb-8">
              Professional web development services focused on building fast,
              scalable, secure, and conversion-focused websites that help your
              business grow online.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/service-request"
                onClick={handleRequest}
                className="bg-orange-500 hover:bg-orange-400 transition px-8 py-4 rounded-xl font-semibold text-black"
              >
                Build My Website
              </Link>

              <Link
                to="/service-request"
                onClick={handleRequest}
                className="border border-orange-500 hover:bg-orange-500/10 transition px-8 py-4 rounded-xl font-semibold text-orange-400"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://res.cloudinary.com/daqtttdb0/image/upload/v1768241402/web-development_hci4yv.jpg"
              alt="Web Development"
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
              Web Development Services
            </h2>

            <p className="text-black max-w-3xl mx-auto">
              Complete website development solutions designed to improve
              performance, user experience, and business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webServices.map((service, index) => (
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
              Why Professional Web Development Matters
            </h2>

            <p className="text-black max-w-3xl mx-auto">
              A high-performing website improves customer trust, strengthens
              brand identity, and increases business opportunities online.
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
              Our Development Process
            </h2>

            <p className="text-black max-w-3xl mx-auto">
              A structured workflow designed to deliver secure, scalable, and
              high-performing web solutions.
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
              Common questions about web development services.
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
            Ready to Build Your Website?
          </h2>

          <p className="text-lg mb-10 font-medium text-black">
            Let’s create a modern, scalable, and high-performing website that
            helps your business grow online.
          </p>

          <Link
            to="/service-request"
            onClick={handleRequest}
            className="inline-block bg-orange-400 hover:bg-zinc-900 transition text-white px-10 py-5 rounded-2xl font-bold text-lg"
          >
            Start My Web Project
          </Link>
        </div>
      </section>
      </FadeInSection>
    </main>
  );
}
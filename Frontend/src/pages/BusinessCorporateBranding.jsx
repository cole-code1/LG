import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";

export default function BusinessCorporateBranding() {
  const brandingServices = [
    "Brand Strategy Development",
    "Corporate Identity Design",
    "Logo & Visual Identity Systems",
    "Brand Messaging & Positioning",
    "Typography & Color Guidelines",
    "Brand Voice Development",
    "Company Profile Design",
    "Marketing & Presentation Materials",
    "Rebranding & Brand Refresh",
    "Brand Guidelines & Documentation",
  ];

  const benefits = [
    {
      title: "Stronger Brand Recognition",
      description:
        "Create a memorable brand identity that helps your business stand out in competitive markets.",
    },
    {
      title: "Professional Brand Consistency",
      description:
        "Maintain consistent visuals, messaging, and customer experiences across all platforms.",
    },
    {
      title: "Improved Customer Trust",
      description:
        "Build credibility and long-term customer confidence through professional branding.",
    },
    {
      title: "Market Differentiation",
      description:
        "Position your business uniquely with strategic branding and visual storytelling.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description:
        "We analyze your business, audience, competitors, and industry positioning.",
    },
    {
      step: "02",
      title: "Brand Strategy",
      description:
        "We define your brand mission, values, messaging, and positioning.",
    },
    {
      step: "03",
      title: "Visual Identity Design",
      description:
        "We create logos, color systems, typography, and brand assets.",
    },
    {
      step: "04",
      title: "Brand Guidelines",
      description:
        "We build a complete brand system to ensure long-term consistency.",
    },
    {
      step: "05",
      title: "Launch & Support",
      description:
        "We help implement your brand across digital and print platforms.",
    },
  ];

  const faqs = [
    {
      question: "What is included in branding services?",
      answer:
        "Branding services include strategy development, logo design, visual identity systems, messaging, typography, and brand guidelines.",
    },
    {
      question: "Why is branding important for businesses?",
      answer:
        "Strong branding improves recognition, builds trust, increases credibility, and helps businesses stand out from competitors.",
    },
    {
      question: "Can you redesign an existing brand?",
      answer:
        "Yes. Rebranding and brand refresh services are available for businesses looking to modernize or reposition their identity.",
    },
    {
      question: "Do you create social media branding assets?",
      answer:
        "Yes. We create branded social media kits, templates, marketing graphics, and digital assets.",
    },
  ];

  return (
    <main className="bg-white text-black overflow-hidden">

      {/* HERO */}
      <FadeInSection>
      <section className="relative py-32 px-6 bg-gradient-to-br from-white via-orange-50 to-zinc-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="uppercase tracking-[0.3em] text-orange-400 mb-4 text-sm font-bold">
              Business Corporate Branding
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Build a Powerful Brand That Customers Remember
            </h1>

            <p className="text-black text-lg leading-relaxed mb-8 max-w-xl">
              Create a strong, professional, and memorable brand identity designed
              to increase trust, improve recognition, and position your business
              for long-term growth.
            </p>

            <Link
              to="/service-request"
              className="inline-block bg-orange-500 hover:bg-orange-400 transition px-8 py-4 rounded-xl font-semibold text-black"
            >
              Build My Brand
            </Link>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/daqtttdb0/image/upload/v1768649515/Business-Branding_rbmtax.png"
              alt="Business Branding"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* SERVICES */}
      <FadeInSection>
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-400 mb-4">
            What’s Included
          </h2>
          <p className="text-black max-w-3xl mx-auto">
            Comprehensive branding solutions designed for consistency, clarity,
            and long-term business impact.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandingServices.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 text-white border border-zinc-800 rounded-2xl p-6 hover:border-orange-500 hover:-translate-y-1 transition duration-300"
            >
              <div className="text-orange-400 text-2xl mb-4">✦</div>
              <h3 className="text-xl font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </section>
      </FadeInSection>

      {/* BENEFITS */}
      <FadeInSection>
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-400 mb-4">
            Why Strong Branding Matters
          </h2>
          <p className="text-black max-w-3xl mx-auto">
            Branding creates emotional connection, trust, and long-term recognition.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-black border border-zinc-200 rounded-2xl p-8 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                {item.title}
              </h3>
              <p className="text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      </FadeInSection>

      {/* PROCESS */}
      <FadeInSection>
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-400 mb-4">
            Our Branding Process
          </h2>
          <p className="text-black max-w-3xl mx-auto">
            A structured system for building powerful brand identities.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {process.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-950 text-white border border-zinc-800 rounded-2xl p-6"
            >
              <div className="text-5xl font-extrabold text-orange-500/20 mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-orange-400 mb-2">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      </FadeInSection>

      {/* FAQ */}
      <FadeInSection>
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-400 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-900 text-white border border-zinc-800 rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold text-orange-400 mb-3">
                {faq.question}
              </h3>
              <p className="text-zinc-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      </FadeInSection>

      {/* CTA */}
      <FadeInSection>
      <section className="py-28 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6 text-orange-400">
            Ready to Build a Powerful Brand?
          </h2>

          <p className="text-lg mb-10 text-black">
            Let’s create a brand identity that builds trust and drives growth.
          </p>

          <Link
            to="/service-request"
            className="inline-block bg-orange-500 hover:bg-zinc-600 transition text-white px-10 py-5 rounded-2xl font-bold text-lg"
          >
            Start Your Branding Project
          </Link>
        </div>
      </section>
        </FadeInSection>

    </main>
  );
}
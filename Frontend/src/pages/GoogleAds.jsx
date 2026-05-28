import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";

export default function GoogleAds() {
  const advertisingServices = [
    "Google Search Ads",
    "Display Advertising Campaigns",
    "YouTube Advertising",
    "Facebook & Instagram Ads",
    "Retargeting & Remarketing",
    "Landing Page Optimization",
    "Conversion Tracking Setup",
    "Audience Targeting Strategies",
    "Ad Copywriting & Creative Testing",
    "Campaign Analytics & Reporting",
  ];

  const benefits = [
    {
      title: "Generate Immediate Traffic",
      description:
        "Drive highly targeted traffic to your website immediately through strategic PPC advertising campaigns.",
    },
    {
      title: "Increase Qualified Leads",
      description:
        "Reach users actively searching for your products and services with high-converting ads.",
    },
    {
      title: "Maximize Advertising ROI",
      description:
        "Optimize campaigns, budgets, and targeting strategies to improve performance and reduce wasted spend.",
    },
    {
      title: "Scale Business Growth",
      description:
        "Use data-driven advertising strategies to grow revenue and expand your market reach.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Research & Strategy",
      description:
        "We analyze your audience, competitors, and goals to build an effective advertising strategy.",
    },
    {
      step: "02",
      title: "Campaign Setup",
      description:
        "We create campaigns, ad groups, targeting systems, and conversion tracking infrastructure.",
    },
    {
      step: "03",
      title: "Creative Development",
      description:
        "We develop compelling ad copy, visuals, and landing page experiences.",
    },
    {
      step: "04",
      title: "Optimization & Testing",
      description:
        "We continuously test, optimize, and improve campaign performance using analytics.",
    },
    {
      step: "05",
      title: "Scaling & Reporting",
      description:
        "We scale successful campaigns and provide detailed performance reporting.",
    },
  ];

  const faqs = [
    {
      question: "How quickly can Google Ads generate results?",
      answer:
        "Google Ads campaigns can begin driving traffic and leads immediately after launch and optimization.",
    },
    {
      question: "Do you manage Facebook and Instagram Ads?",
      answer:
        "Yes. We manage campaigns across Google, Facebook, Instagram, YouTube, and remarketing platforms.",
    },
    {
      question: "Can you track conversions and sales?",
      answer:
        "Yes. Conversion tracking systems measure leads, calls, purchases, and campaign performance.",
    },
    {
      question: "How do you optimize advertising campaigns?",
      answer:
        "We use analytics, A/B testing, audience refinement, and bid optimization to improve ROI and reduce wasted spend.",
    },
  ];

  return (
    <main className="bg-white text-black overflow-hidden">
      {/* HERO SECTION */}
      <FadeInSection>
      <section className="relative py-32 px-6 bg-gradient-to-br from-white via-orange-50 to-zinc-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-orange-500 mb-4 text-sm font-bold">
              Google Ads / PPC Advertising
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-zinc-900">
              High-Converting PPC Campaigns That Drive Real Results
            </h1>

            <p className="text-zinc-700 text-lg leading-relaxed mb-8">
              Generate targeted traffic, qualified leads, and measurable
              business growth through strategic Google Ads and paid advertising
              campaigns optimized for maximum ROI.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/service-request"
                className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-8 py-4 rounded-xl font-semibold text-white shadow-lg"
              >
                Launch My Campaign
              </Link>

              <Link
                to="/service-request"
                className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 px-8 py-4 rounded-xl font-semibold"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://res.cloudinary.com/daqtttdb0/image/upload/v1768649515/PPC-Advertising_ewhgbs.jpg"
              alt="Google Ads PPC Advertising"
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
            <h2 className="text-4xl font-bold mb-4 text-orange-500">
              Advertising Services Included
            </h2>

            <p className="text-zinc-600 max-w-3xl mx-auto">
              Comprehensive paid advertising solutions designed to maximize
              traffic, conversions, and business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advertisingServices.map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-orange-400 text-2xl mb-4">✦</div>

                <h3 className="text-xl text-white font-semibold">
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
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">
              Why PPC Advertising Matters
            </h2>

            <p className="text-zinc-600 max-w-3xl mx-auto">
              Paid advertising helps businesses generate fast traffic,
              measurable leads, and scalable revenue growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-black rounded-2xl p-8 border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-orange-500">
                  {benefit.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
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
            <h2 className="text-4xl font-bold text-orange-500 mb-4">
              Our PPC Process
            </h2>

            <p className="text-zinc-600 max-w-3xl mx-auto">
              A proven advertising workflow designed to maximize conversions
              and advertising performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500 transition-all duration-300"
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
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">
              Frequently Asked Questions
            </h2>

            <p className="text-zinc-600">
              Common questions about Google Ads and PPC advertising.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-200 rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-orange-500">
                  {faq.question}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
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
      <section className="py-28 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6 text-orange-400">
            Ready to Scale Your Business With PPC Advertising?
          </h2>

          <p className="text-lg mb-10 font-medium text-black">
            Let’s build high-performing advertising campaigns that generate
            targeted traffic, qualified leads, and measurable business growth.
          </p>

          <Link
            to="/service-request"
            className="inline-block bg-orange-500 hover:bg-zinc-600 transition-all duration-300 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl"
          >
            Start Your PPC Campaign
          </Link>
        </div>
      </section>
      </FadeInSection>
    </main>
  );
}
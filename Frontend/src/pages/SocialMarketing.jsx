import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useService } from "../context/ServiceContext";
import FadeInSection from "../components/FadeInSection.jsx";
export default function SocialMarketing() {
  const { setSelectedService } = useService();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle service request
  const handleRequest = () => {
    const serviceName = "Social Marketing";

    setSelectedService(serviceName);
    localStorage.setItem("selectedService", serviceName);
  };

  const socialServices = [
    "Social Media Strategy",
    "Content Creation & Publishing",
    "Instagram & Facebook Marketing",
    "TikTok & Short-Form Video Campaigns",
    "Influencer Marketing",
    "Community Management",
    "Paid Social Advertising",
    "Audience Growth Strategies",
    "Brand Awareness Campaigns",
    "Social Analytics & Reporting",
  ];

  const benefits = [
    {
      title: "Increase Brand Awareness",
      description:
        "Expand your reach and build a recognizable online presence across major social media platforms.",
    },
    {
      title: "Boost Audience Engagement",
      description:
        "Create meaningful interactions that improve customer relationships and brand loyalty.",
    },
    {
      title: "Generate More Leads",
      description:
        "Turn followers into qualified customers through strategic campaigns and conversion-focused content.",
    },
    {
      title: "Build Long-Term Community Growth",
      description:
        "Develop a loyal online audience that continuously supports and promotes your brand.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Research & Planning",
      description:
        "We analyze your audience, competitors, and goals to develop a strategic social marketing plan.",
    },
    {
      step: "02",
      title: "Content Strategy",
      description:
        "We create engaging content calendars, campaign ideas, and platform-specific strategies.",
    },
    {
      step: "03",
      title: "Content Creation",
      description:
        "We produce branded graphics, videos, captions, and social media creatives.",
    },
    {
      step: "04",
      title: "Campaign Management",
      description:
        "We manage publishing, engagement, paid campaigns, and audience interactions.",
    },
    {
      step: "05",
      title: "Analytics & Optimization",
      description:
        "We monitor performance metrics and optimize campaigns for maximum growth and engagement.",
    },
  ];

  const faqs = [
    {
      question: "Which social media platforms do you manage?",
      answer:
        "We manage Instagram, Facebook, TikTok, LinkedIn, X, and other major social media platforms.",
    },
    {
      question: "Do you create social media content?",
      answer:
        "Yes. We create graphics, captions, reels, videos, carousel posts, and branded content.",
    },
    {
      question: "Can you manage paid social advertising?",
      answer:
        "Yes. We manage Facebook Ads, Instagram Ads, retargeting campaigns, and audience targeting strategies.",
    },
    {
      question: "How do you measure social media success?",
      answer:
        "We track engagement, reach, audience growth, clicks, conversions, and overall campaign performance.",
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
              Social Marketing
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-black">
              Grow Your Brand Through Strategic Social Media Marketing
            </h1>

            <p className="text-black text-lg leading-relaxed mb-8">
              Build stronger audience connections, increase engagement, and
              drive measurable business growth through powerful social media
              marketing strategies designed for modern digital platforms.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/service-request"
                onClick={handleRequest}
                className="bg-orange-500 hover:bg-orange-400 transition px-8 py-4 rounded-xl font-semibold text-black"
              >
                Boost My Social Presence
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
              src="https://res.cloudinary.com/daqtttdb0/image/upload/v1768649515/Social-Media-Marketing_zvq8ce.png"
              alt="Social Marketing"
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
              Social Marketing Services
            </h2>

            <p className="text-black max-w-3xl mx-auto">
              Comprehensive social media marketing solutions designed to
              increase visibility, engagement, and audience growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialServices.map((service, index) => (
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
              Why Social Media Marketing Matters
            </h2>

            <p className="text-black max-w-3xl mx-auto">
              Social media marketing helps businesses connect with audiences,
              build trust, and drive long-term digital growth.
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
              Our Social Marketing Process
            </h2>

            <p className="text-black max-w-3xl mx-auto">
              A strategic workflow designed to maximize engagement, audience
              growth, and social media performance.
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
              Frequently Asked Questions
            </h2>

            <p className="text-black">
              Common questions about social media marketing services.
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
      <section className="py-28 px-6 bg-white text-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6 text-orange-400">
            Ready to Grow Your Social Presence?
          </h2>

          <p className="text-lg mb-10 font-medium text-black">
            Let’s create strategic social media campaigns that increase
            engagement, build trust, and drive business growth.
          </p>

          <Link
            to="/service-request"
            onClick={handleRequest}
            className="inline-block bg-orange-500 hover:bg-zinc-900 transition text-white px-10 py-5 rounded-2xl font-bold text-lg"
          >
            Start My Social Campaign
          </Link>
        </div>
      </section>
        </FadeInSection>
    </main>
  );
}
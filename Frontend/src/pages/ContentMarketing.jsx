import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
export default function ContentMarketing() {
  const contentServices = [
    "Content Strategy Development",
    "SEO Blog Writing",
    "Website Copywriting",
    "Email Marketing Campaigns",
    "Lead Magnet Creation",
    "Social Media Content",
    "Brand Storytelling",
    "Content Repurposing",
    "Editorial Calendar Planning",
    "Content Performance Analysis",
  ];

  const benefits = [
    {
      title: "Increase Brand Authority",
      description:
        "Position your business as a trusted industry leader through valuable and strategic content.",
    },
    {
      title: "Drive Organic Traffic",
      description:
        "Attract targeted visitors through SEO-focused content and search engine visibility.",
    },
    {
      title: "Generate Qualified Leads",
      description:
        "Convert audiences into customers with persuasive and conversion-driven messaging.",
    },
    {
      title: "Build Long-Term Growth",
      description:
        "Create evergreen content assets that continue generating traffic and engagement over time.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Research & Strategy",
      description:
        "We analyze your audience, competitors, and business goals to build a content roadmap.",
    },
    {
      step: "02",
      title: "Content Planning",
      description:
        "We create content calendars, topic clusters, and publishing strategies.",
    },
    {
      step: "03",
      title: "Content Creation",
      description:
        "We produce high-quality articles, copy, campaigns, and branded content.",
    },
    {
      step: "04",
      title: "Optimization & Distribution",
      description:
        "Content is optimized for SEO and distributed across multiple digital channels.",
    },
    {
      step: "05",
      title: "Analytics & Growth",
      description:
        "We monitor performance metrics and continuously improve content effectiveness.",
    },
  ];

  const faqs = [
    {
      question: "What types of content do you create?",
      answer:
        "We create blogs, website copy, landing pages, email campaigns, social media content, guides, and marketing materials.",
    },
    {
      question: "Can content marketing improve SEO?",
      answer:
        "Yes. High-quality content improves keyword rankings, search visibility, and organic traffic growth.",
    },
    {
      question: "Do you provide content strategies?",
      answer:
        "Yes. We create customized content strategies based on audience behavior, industry trends, and business goals.",
    },
    {
      question: "How often should content be published?",
      answer:
        "Publishing frequency depends on your industry, competition, and marketing goals, but consistency is critical.",
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
              Content Marketing
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Content That Builds Trust & Drives Growth
            </h1>

            <p className="text-black text-lg leading-relaxed mb-8 max-w-xl">
              Strategic content marketing solutions designed to attract,
              engage, and convert your audience while strengthening your
              online authority and brand presence.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/service-request"
                className="bg-orange-500 hover:bg-orange-400 transition px-8 py-4 rounded-xl font-semibold text-black"
              >
                Start Content Strategy
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://res.cloudinary.com/daqtttdb0/image/upload/v1768649515/Content-Marketing_sr7kxj.jpg"
              alt="Content Marketing"
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
            Comprehensive content marketing services built to improve engagement,
            visibility, and customer acquisition.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentServices.map((service, index) => (
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
            Why Content Marketing Matters
          </h2>
          <p className="text-black max-w-3xl mx-auto">
            Effective content builds relationships, improves SEO, and drives long-term growth.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-black rounded-2xl p-8 border border-zinc-200 hover:shadow-lg transition"
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
            Our Content Process
          </h2>
          <p className="text-black max-w-3xl mx-auto">
            A structured workflow designed for measurable content performance.
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
              <p className="text-zinc-400">{faq.answer}</p>
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
            Ready to Grow With Strategic Content?
          </h2>

          <p className="text-lg mb-10 text-black">
            Let’s create high-performing content that attracts and converts your audience.
          </p>

          <Link
            to="/service-request"
            className="inline-block bg-orange-500 hover:bg-zinc-600 transition text-white px-10 py-5 rounded-2xl font-bold text-lg"
          >
            Start Your Content Project
          </Link>
        </div>
      </section>
      </FadeInSection>
    </main>
  );
}
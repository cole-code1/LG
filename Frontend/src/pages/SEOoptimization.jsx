import { useNavigate } from "react-router-dom";
import { useService } from "../context/ServiceContext";
import FadeInSection from "../components/FadeInSection.jsx";

export default function SEOoptimization() {
  const navigate = useNavigate();
  const { setSelectedService } = useService();

  const handleServiceRequest = () => {
    setSelectedService("SEO Optimization");
    localStorage.setItem("selectedService", "SEO Optimization");
    navigate("/service-request");
  };

  const seoServices = [
    "Keyword Research & Strategy",
    "Technical SEO Optimization",
    "On-Page SEO Improvements",
    "Local SEO & Google Business Profile",
    "SEO Content Optimization",
    "Website SEO Audits",
    "Internal Linking Strategies",
    "Link Building Campaigns",
    "Performance Tracking & Analytics",
    "Competitor SEO Analysis",
  ];

  const benefits = [
    {
      title: "Increase Organic Traffic",
      description:
        "Drive targeted visitors to your website through improved search engine visibility and keyword rankings.",
    },
    {
      title: "Improve Search Engine Rankings",
      description:
        "Optimize your website structure, content, and authority to rank higher on Google and other search engines.",
    },
    {
      title: "Generate Qualified Leads",
      description:
        "Attract users actively searching for your products and services with strategic SEO targeting.",
    },
    {
      title: "Build Long-Term Online Growth",
      description:
        "Create sustainable digital growth through ongoing optimization and organic visibility improvements.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "SEO Audit & Research",
      description:
        "We analyze your website, competitors, keywords, and current search performance.",
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "We create a custom SEO strategy aligned with your business goals and target audience.",
    },
    {
      step: "03",
      title: "Optimization & Implementation",
      description:
        "We improve technical SEO, content structure, metadata, and on-page performance.",
    },
    {
      step: "04",
      title: "Content & Authority Building",
      description:
        "We strengthen your website authority through optimized content and link-building strategies.",
    },
    {
      step: "05",
      title: "Monitoring & Growth",
      description:
        "We continuously monitor rankings, traffic, and SEO performance for ongoing improvement.",
    },
  ];

  const faqs = [
    {
      question: "How long does SEO take to show results?",
      answer:
        "SEO is a long-term strategy, and results typically begin appearing within several weeks to months depending on competition and website condition.",
    },
    {
      question: "What is included in SEO services?",
      answer:
        "SEO services include keyword research, technical optimization, on-page SEO, local SEO, analytics, and content optimization.",
    },
    {
      question: "Can SEO help local businesses?",
      answer:
        "Yes. Local SEO improves visibility in location-based searches and Google Maps results.",
    },
    {
      question: "Do you provide SEO reports?",
      answer:
        "Yes. We provide performance reports including rankings, traffic growth, keyword insights, and optimization progress.",
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
              SEO Optimization
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Increase Rankings, Traffic & Business Growth
            </h1>

            <p className="text-black text-lg leading-relaxed mb-8">
              Strategic SEO solutions designed to improve search visibility,
              attract qualified traffic, and generate long-term organic growth
              for your business.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleServiceRequest}
                className="bg-orange-500 hover:bg-orange-400 transition px-8 py-4 rounded-xl font-semibold text-black"
              >
                Improve My Rankings
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://res.cloudinary.com/daqtttdb0/image/upload/v1768241405/SEO_i4ndhf.jpg"
              alt="SEO Optimization"
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
              SEO Services Included
            </h2>

            <p className="text-black max-w-3xl mx-auto">
              Comprehensive SEO solutions focused on increasing visibility,
              improving rankings, and driving qualified organic traffic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
            {seoServices.map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500 transition"
              >
                <div className="text-orange-400 text-2xl mb-4">✦</div>

                <h3 className="text-xl font-semibold">{service}</h3>
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
              Why SEO Matters
            </h2>

            <p className="text-black max-w-3xl mx-auto">
              SEO helps businesses improve online visibility, attract
              high-intent customers, and achieve sustainable digital growth.
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
              Our SEO Process
            </h2>

            <p className="text-black max-w-3xl mx-auto">
              A structured SEO workflow designed to improve rankings, traffic,
              and long-term search performance.
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
              Frequently Asked Questions ?
            </h2>

            <p className="text-black">
              Common questions about SEO optimization services.
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
            Ready to Grow Your Organic Traffic?
          </h2>

          <p className="text-lg mb-10 font-medium text-black">
            Let’s improve your search rankings, increase visibility, and drive
            more qualified traffic to your business.
          </p>

          <button
            onClick={handleServiceRequest}
            className="bg-orange-500 hover:bg-zinc-900 transition text-white px-10 py-5 rounded-2xl font-bold text-lg"
          >
            Start My SEO Strategy
          </button>
        </div>
      </section>
        </FadeInSection>
    </main>
  );
}
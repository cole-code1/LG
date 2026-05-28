import { useNavigate } from "react-router-dom";
import { useService } from "../context/ServiceContext";
import FadeInSection from "../components/FadeInSection.jsx";

export default function GraphicDesign() {
  const navigate = useNavigate();
  const { setSelectedService } = useService();

  const handleServiceRequest = () => {
    setSelectedService("Graphic Design");
    localStorage.setItem("selectedService", "Graphic Design");
    navigate("/service-request");
  };

  const designServices = [
    "Logo Design & Brand Identity",
    "UI/UX Design",
    "Marketing & Advertising Graphics",
    "Social Media Design Assets",
    "Presentation & Pitch Deck Design",
    "Print & Packaging Design",
    "Brand Guidelines & Design Systems",
    "Motion Graphics & Visual Content",
    "Creative Consultation",
    "Website & Landing Page Design",
  ];

  const benefits = [
    {
      title: "Build Strong Brand Recognition",
      description:
        "Professional design helps businesses create memorable visual identities that stand out in competitive markets.",
    },
    {
      title: "Improve Customer Trust",
      description:
        "Consistent and high-quality visuals improve credibility and strengthen audience confidence.",
    },
    {
      title: "Enhance User Experience",
      description:
        "Modern UI/UX design improves usability, engagement, and customer satisfaction.",
    },
    {
      title: "Increase Marketing Performance",
      description:
        "Strategic visual communication improves campaign engagement and conversion rates.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description:
        "We analyze your business goals, audience, competitors, and visual direction.",
    },
    {
      step: "02",
      title: "Creative Strategy",
      description:
        "We develop a design strategy aligned with your brand identity and marketing objectives.",
    },
    {
      step: "03",
      title: "Design & Development",
      description:
        "We create visually compelling graphics, interfaces, and brand assets.",
    },
    {
      step: "04",
      title: "Refinement & Feedback",
      description:
        "We refine designs through revisions and collaborative feedback processes.",
    },
    {
      step: "05",
      title: "Delivery & Support",
      description:
        "Final design assets are optimized and delivered for digital and print use.",
    },
  ];

  const faqs = [
    {
      question: "What graphic design services do you offer?",
      answer:
        "We offer logo design, brand identity systems, UI/UX design, marketing materials, social media graphics, presentations, and more.",
    },
    {
      question: "Can you redesign existing branding?",
      answer:
        "Yes. We provide rebranding and brand refresh services for businesses looking to modernize their visual identity.",
    },
    {
      question: "Do you provide editable source files?",
      answer:
        "Yes. Final deliverables can include editable source files depending on the project requirements.",
    },
    {
      question: "Can you design social media content?",
      answer:
        "Yes. We create branded social media graphics, ad creatives, story templates, and promotional visuals.",
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
              Graphic Design
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Creative Design Solutions That Elevate Your Brand
            </h1>

            <p className="text-black text-lg leading-relaxed mb-8">
              Professional graphic design services focused on building strong
              brand identities, improving visual communication, and creating
              engaging customer experiences across digital and print platforms.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleServiceRequest}
                className="bg-orange-500 hover:bg-orange-400 transition px-8 py-4 rounded-xl font-semibold text-black"
              >
                Start My Design Project
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://res.cloudinary.com/daqtttdb0/image/upload/v1768649514/Graphic-Design_ja3pnn.jpg"
              alt="Graphic Design"
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
              Design Services Included
            </h2>

            <p className="text-black max-w-3xl mx-auto">
              Comprehensive design solutions built to strengthen branding,
              improve communication, and increase engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designServices.map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500 transition"
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
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-400 mb-4">
              Why Great Design Matters
            </h2>

            <p className="text-black max-w-3xl mx-auto">
              Strong visual branding improves trust, communication, customer
              engagement, and long-term business recognition.
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
              Our Creative Process
            </h2>

            <p className="text-black max-w-3xl mx-auto">
              A structured creative workflow designed to deliver impactful and
              visually compelling design solutions.
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
              Common questions about graphic design services.
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
            Ready to Elevate Your Brand Design?
          </h2>

          <p className="text-lg mb-10 font-medium text-black">
            Let’s create professional visuals and brand experiences that
            connect with your audience and grow your business.
          </p>

          <button
            onClick={handleServiceRequest}
            className="bg-orange-500 hover:bg-zinc-400 transition text-white px-10 py-5 rounded-2xl font-bold text-lg"
          >
            Start Your Design Project
          </button>
        </div>
      </section>
      </FadeInSection>
    </main>
  );
}
import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
import "./Home.css";

export default function Home() {
  const services = [
    { title: "Social  Marketing", desc: "Ads, social media & conversion-focused campaigns", features: ["Social Media Strategy Development",
        "Content Creation and Curation",
        "Social Media Campaigns",
        "Community Management",
        "Influencer Marketing",
        "Social Media Account Management",
        "Social Media Analytics and Reporting"], link: "/services#social-marketing" },
    { title: "Web Development", desc: "Modern, fast & scalable websites", features: [
        "Website Design & Website Redesign",
        "Custom Website Development",
        "E-commerce Web Development",
        "CMS and Portal Development",
        "Website Optimization & Website Security",
        "Website Maintenance and Support",
        "Website Hosting and Domain Setup"], link: "/services#web-development" },
    { title: "SEO Optimization", desc: "Rank higher and grow organic traffic",
      features: ["Keyword Research and Mapping",
        "Competitors Analysis",
        "Content Optimization",
        "Local SEO & Technical SEO",
        "Links Audit and Building",
        "Website Speed Optimization",
        "SEO Analytics and Reporting"], link: "/services#seo" },
    { title: "Google Ads / PPC Advertising", desc: "Data-driven ads that scale", features: ["Keyword Research & Ads Creation",
        "Google Ads Management",
        "FB & IG Ads Management",
        "Retargeting Campaigns",
        "Ad Performance Analytics & Reporting"], link: "/services#google-ads" },

    { title: "Content Marketing", desc: "Engage & convert with quality content", features: ["Content Strategy Development",
        "Blog Writing & Article Creation",
        "Website Copywriting",
        "Email Marketing Campaigns",
        "Content Distribution & Promotion",
        "Content Performance Analytics & Reporting"], link: "/services#content-marketing" },

    { title: "Graphic Design", desc: "Visuals that captivate and convert", features: ["Logo Design",
        "Brand Identity Development",
        "Web & App UI/UX Design",
        "Print & Digital Marketing Materials",
        "Design System Creation",
        "Design Consultation & Strategy"], link: "/services#graphic-design" },

    { title: "Website Maintenance", desc: "Keep your site secure and up-to-date", features: ["Regular Software Updates",
        "Security Monitoring & Malware Removal",
        "Content Updates & Edits"], link: "/services#website-maintenance" },

    { title: "Business Corporate Branding", desc: "Business Corporate Branding services: Logo Design, Brand Identity Development, Corporate Stationery Design, Brand Guidelines Creation, Website Branding, Packaging Design and Brand Messaging.", features: ["Brand Strategy Development",
        "Brand Identity Design",
        "Brand Guidelines Creation",
        "Brand Messaging & Positioning",
        "Brand Implementation & Management"], link: "/services#business-branding" }
  ];

  // ================= HANDLE CURSOR GLOW =================
  const handleMouseMove = (e) => {
    const box = e.currentTarget;
    const rect = box.getBoundingClientRect();
    box.style.setProperty("--x", `${e.clientX - rect.left}px`);
    box.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="text-black container-bg" style={{ backgroundColor: "#ffffff" }}>
      {/* ================= HERO ================= */}
      <section className="pt-28 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <FadeInSection>
            <h1
              className="text-4xl md:text-6xl font-bold mb-6 text-orange-400"
            >
              Grow Your Business With Data-Driven Digital Marketing
            </h1>
            <p
              className="max-w-2xl mx-auto mb-8 text-lg text-black"
            >
              We help brands generate leads, increase visibility, and scale revenue through SEO, web development, and performance marketing.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link className="bg-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-orange-400 transition" to="/services">
                Get Started
              </Link>
              <Link className="border border-orange-500 text-orange-400 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-black transition" to="/projectsboard">
                View Projects
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Our Services
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index}>
               <Link
  to={service.link}
  onMouseMove={handleMouseMove}
  className="glow-box block"
>
  <h3 className="text-xl font-semibold mb-3 text-orange-400">
    {service.title}
  </h3>

  <p className="text-gray-400 mb-4">
    {service.desc}
  </p>

  <ul className="text-gray-400 text-sm space-y-1">
    {service.features.slice(0, 4).map((feature, i) => (
      <li key={i} className="flex items-start gap-2">
        <span className="text-orange-400">✔</span>
        <span>{feature}</span>
      </li>
    ))}
  </ul>

  <span className="inline-block mt-4 text-orange-400 font-semibold text-sm">
    Learn more →
  </span>
</Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Why Choose Us
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Results-Driven", desc: "We focus on ROI and measurable growth." },
              { title: "Modern Technology", desc: "Built with fast, scalable, and secure tools." },
              { title: "Transparent Process", desc: "Clear communication and real reporting." },
            ].map((item, index) => (
              <FadeInSection key={index}>
                <div onMouseMove={handleMouseMove} className="glow-box">
                  <h3 className="text-xl font-semibold mb-4 text-orange-400">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              How We Work
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {["Research & Discovery","Strategy & Planning","Build & Launch","Optimize & Scale"].map((step, index) => (
              <FadeInSection key={index}>
                <div onMouseMove={handleMouseMove} className="glow-box">
                  <span className="text-orange-400 font-bold">Step {index + 1}</span>
                  <h4 className="mt-3 font-semibold">{step}</h4>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "100+", label: "Projects Completed" },
              { value: "50+", label: "Happy Clients" },
              { value: "5x", label: "Average Growth" },
            ].map((stat, index) => (
              <FadeInSection key={index}>
                <div>
                  <h3 className="text-4xl font-bold mb-2" style={{ textShadow: "0 0 12px #f97316" }}>
                    {stat.value}
                  </h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20  text-center" style={{backgroundColor: "#ffffff"}}>
        <FadeInSection>
          <h2 className="text-3xl text-orange-400 font-bold mb-4" >
            Ready to scale your business?
          </h2>
          <p className="mb-6 text-black">Let’s build something amazing together.</p>
          <Link className="bg-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 transition" to="/contact">
            Contact Us
          </Link>
        </FadeInSection>
      </section>
    </div>
  );
}

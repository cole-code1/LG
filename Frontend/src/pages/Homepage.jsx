import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
import "./Home.css";

export default function Home() {
  const services = [
    { title: "Digital Marketing", desc: "Ads, social media & conversion-focused campaigns", link: "/services#digital-marketing" },
    { title: "Web Development", desc: "Modern, fast & scalable websites", link: "/services#web-development" },
    { title: "SEO Optimization", desc: "Rank higher and grow organic traffic", link: "/services#seo" },
  ];

  // ================= HANDLE CURSOR GLOW =================
  const handleMouseMove = (e) => {
    const box = e.currentTarget;
    const rect = box.getBoundingClientRect();
    box.style.setProperty("--x", `${e.clientX - rect.left}px`);
    box.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="text-black container-bg" style={{ backgroundColor: "#ac9e9e" }}>
      {/* ================= HERO ================= */}
      <section className="pt-28 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <FadeInSection>
            <h1
              className="text-4xl md:text-6xl font-bold mb-6" style={{textShadow: "0 0 6px rgba(249,115,22,0.4)"}}
            >
              Grow Your Business With Data-Driven Digital Marketing
            </h1>
            <p
              className="max-w-2xl mx-auto mb-8 text-lg text-white"
              style={{ textShadow: "0 0 6px rgba(249,115,22,0.4)" }}
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
            <h2 className="text-3xl font-bold text-center mb-12" style={{ textShadow: "0 0 10px #f97316" }}>
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
                  <h3 className="text-xl font-semibold mb-4 text-orange-400">{service.title}</h3>
                  <p className="text-gray-400">{service.desc}</p>
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
            <h2 className="text-3xl font-bold text-center mb-12" style={{ textShadow: "0 0 10px #f97316" }}>
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
            <h2 className="text-3xl font-bold text-center mb-12" style={{ textShadow: "0 0 10px #f97316" }}>
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
      <section className="py-20  text-center" style={{backgroundColor: "#ac9e9e"}}>
        <FadeInSection>
          <h2 className="text-3xl text-black font-bold mb-4" >
            Ready to scale your business?
          </h2>
          <p className="mb-6 " style={{ textShadow: "0 0 6px rgba(249,115,22,0.4)" }}>Let’s build something amazing together.</p>
          <Link className="bg-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 transition" to="/contact">
            Contact Us
          </Link>
        </FadeInSection>
      </section>
    </div>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaMoon, FaSun, FaTwitter, FaLinkedin, FaLink, FaCheckCircle } from "react-icons/fa";

// ── Fade-in wrapper (replaces external FadeInSection) ──────────────────────
function FadeInSection({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────
const stats = [
  { num: "120+", desc: "Clients worldwide" },
  { num: "8 yrs", desc: "In the industry" },
  { num: "98%", desc: "Client satisfaction" },
  { num: "3×", desc: "Avg. ROI delivered" },
];

const values = [
  { icon: "🎯", title: "Strategy first", body: "Every decision we make is grounded in data and aligned with your business goals — not guesswork." },
  { icon: "🤝", title: "Long-term partnership", body: "We don't do one-off projects. We build relationships and grow alongside the businesses we work with." },
  { icon: "💡", title: "Relentless innovation", body: "The digital landscape changes fast. We stay ahead so our clients never fall behind." },
  { icon: "📊", title: "Measurable impact", body: "If we can't measure it, we don't celebrate it. Every campaign is tied to real, trackable outcomes." },
];

const team = [
  { initials: "LG", name: "Linus Muiruri", role: "CEO & Founder", bio: "12 years in digital strategy. Obsessed with data, growth loops, and great coffee.", twitter: "#", linkedin: "#" },
  { initials: "Cole", name: "Collins Kathurima", role: "Lead Developer", bio: "Full-stack engineer with a designer's eye. Builds things that are fast, clean, and conversion-ready.", twitter: "#", linkedin: "#" },
  ];

const timeline = [
  { year: "2016", event: "Founded in a shared office with 2 laptops and a big whiteboard." },
  { year: "2018", event: "Reached our first 20 clients across 3 countries." },
  { year: "2020", event: "Launched our proprietary analytics dashboard for clients." },
  { year: "2022", event: "Grew to a team of 15. Opened our second office." },
  { year: "2024", event: "Recognized as a top-50 digital agency in our region." },
  { year: "2026", event: "120+ active clients. Still growing. Still hungry." },
];

const avatarColors = [
  "from-orange-400 to-orange-700",
  "from-rose-400 to-rose-700",
  "from-violet-400 to-violet-700",
  "from-teal-400 to-teal-700",
];

// ── Main Component ─────────────────────────────────────────────────────────
export default function About() {
  const [dark, setDark] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const bg = dark ? "bg-gray-950 text-gray-100" : "bg-white text-gray-900";
  const cardBg = dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100";
  const mutedText = dark ? "text-gray-400" : "text-gray-500";
  const sectionBg = dark ? "bg-gray-900 border-gray-800" : "bg-black border-gray-800";

  return (
    <div className={`min-h-screen transition-colors duration-300 ${bg}`}>

      {/* ── Dark Mode Toggle ── */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDark((d) => !d)}
          className={`p-2 rounded-full border transition ${dark ? "bg-gray-800 border-gray-700 text-yellow-400" : "bg-white border-gray-200 text-gray-600"}`}
          title="Toggle dark mode"
        >
          {dark ? <FaSun size={14} /> : <FaMoon size={14} />}
        </button>
      </div>

      {/* ── Subtle glow overlay ── */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.03) 0%, transparent 60%), radial-gradient(circle, rgba(255,151,22,0.02) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 pt-32 pb-24 z-10">

        {/* ── Header ── */}
        <FadeInSection>
          <header className="mb-14 text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange-500 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full mb-4">
              Who we are
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-orange-400">
              About Us
            </h1>
            <p className={`text-lg sm:text-xl italic ${mutedText}`}>
              Learn more about our story, mission, vision, and the team behind our success.
            </p>
          </header>
        </FadeInSection>

        {/* ── Stats Bar ── */}
        <FadeInSection delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
            {stats.map((s, i) => (
              <div key={i} className="rounded-xl border border-orange-100 bg-orange-50 p-4 text-center">
                <span className="block text-3xl font-extrabold text-orange-500">{s.num}</span>
                <span className="mt-1 block text-xs text-orange-700 leading-snug">{s.desc}</span>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* ── Our Story ── */}
        <FadeInSection delay={0.1}>
          <div className={`mb-10 p-8 rounded-2xl border ${sectionBg}`}>
            <p className="text-xs font-semibold tracking-widest uppercase text-orange-500 mb-2">Our Story</p>
            <h2 className="text-3xl font-bold mb-4 text-orange-400">Where it all began</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We started with a simple mission: to help businesses thrive in the digital world. Over the years, we've combined creativity, technology, and data-driven strategies to deliver measurable results. We believe in building long-term relationships and growing together with our clients — not just running campaigns and walking away.
            </p>
            <div className="my-6 h-px bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 opacity-40 rounded-full" />
            <p className="text-gray-400 text-base leading-relaxed">
              What began as a two-person operation in a shared office has grown into a full-service digital agency with a global client roster. Every win our clients celebrate is a win we celebrate too.
            </p>
          </div>
        </FadeInSection>

        {/* ── Mission & Vision ── */}
        <FadeInSection delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              {
                label: "Our Mission",
                title: "Empower every business to grow online",
                body: "We provide end-to-end digital solutions that drive engagement, increase sales, and improve brand visibility. Every project is guided by strategy, creativity, and measurable impact — no matter the size of the business.",
                icon: "🎯",
              },
              {
                label: "Our Vision",
                title: "A globally recognized force for digital innovation",
                body: "To become the agency businesses trust when it matters most — known for innovation, reliability, and transformative digital experiences that make a real difference in their industries.",
                icon: "🌍",
              },
            ].map((card, i) => (
              <div key={i} className={`p-7 rounded-2xl border ${sectionBg}`}>
                <div className="flex justify-center mb-4">
                  <FaStar className="text-orange-400 text-xl animate-pulse" />
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase text-orange-500 mb-2">{card.label}</p>
                <h2 className="text-xl font-bold mb-3 text-orange-400">{card.title}</h2>
                <p className="text-gray-300 text-base leading-relaxed">{card.body}</p>
                <div className="mt-6 h-px bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 opacity-40 rounded-full" />
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* ── Our Values ── */}
        <FadeInSection delay={0.1}>
          <div className={`mb-10 p-8 rounded-2xl border ${sectionBg}`}>
            <div className="flex justify-center mb-5">
              <FaStar className="text-orange-400 text-xl animate-pulse" />
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase text-orange-500 mb-2">What drives us</p>
            <h2 className="text-3xl font-bold mb-6 text-orange-400">Our Values</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <div key={i} className="rounded-xl bg-gray-800 border border-gray-700 p-5">
                  <p className="text-2xl mb-2">{v.icon}</p>
                  <p className="text-base font-bold text-orange-300 mb-1">{v.title}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 h-px bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 opacity-40 rounded-full" />
          </div>
        </FadeInSection>

        {/* ── Timeline ── */}
        <FadeInSection delay={0.1}>
          <div className={`mb-10 p-8 rounded-2xl border ${sectionBg}`}>
            <div className="flex justify-center mb-5">
              <FaStar className="text-orange-400 text-xl animate-pulse" />
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase text-orange-500 mb-2">How we got here</p>
            <h2 className="text-3xl font-bold mb-8 text-orange-400">Our Journey</h2>
            <div className="relative pl-6 border-l border-gray-700 space-y-8">
              {timeline.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative"
                >
                  <span className="absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full bg-orange-400 border-2 border-gray-900" />
                  <span className="text-xs font-bold text-orange-500 mb-1 block">{t.year}</span>
                  <p className="text-gray-300 text-sm leading-relaxed">{t.event}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 h-px bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 opacity-40 rounded-full" />
          </div>
        </FadeInSection>

        {/* ── Meet the Team ── */}
        <FadeInSection delay={0.1}>
          <div className={`mb-10 p-8 rounded-2xl border ${sectionBg}`}>
            <div className="flex justify-center mb-5">
              <FaStar className="text-orange-400 text-xl animate-pulse" />
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase text-orange-500 mb-2">The people behind the work</p>
            <h2 className="text-3xl font-bold mb-6 text-orange-400">Meet the Team</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {team.map((member, i) => (
                <div key={i} className="rounded-xl bg-gray-800 border border-gray-700 p-5 flex gap-4 items-start">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatarColors[i]} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                    {member.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-bold text-orange-300">{member.name}</p>
                    <p className="text-xs text-orange-500 font-semibold mb-2">{member.role}</p>
                    <p className="text-sm text-gray-400 leading-relaxed mb-3">{member.bio}</p>
                    <div className="flex gap-3">
                      <a href={member.twitter} className="text-gray-500 hover:text-orange-400 transition"><FaTwitter size={13} /></a>
                      <a href={member.linkedin} className="text-gray-500 hover:text-orange-400 transition"><FaLinkedin size={13} /></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 h-px bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 opacity-40 rounded-full" />
          </div>
        </FadeInSection>

        {/* ── CTA ── */}
        <FadeInSection delay={0.1}>
          <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 p-10 mb-10 text-center text-white">
            <p className="text-xs uppercase tracking-widest font-semibold mb-2 opacity-80">Ready to grow?</p>
            <h3 className="text-2xl font-extrabold mb-3">Let's build something great together</h3>
            <p className="text-sm opacity-80 mb-6 max-w-md mx-auto">Whether you're starting from scratch or scaling an existing brand, we'd love to hear about your goals.</p>
            <a
              href="/contact"
              className="inline-block bg-white text-orange-600 font-semibold text-sm px-7 py-3 rounded-xl hover:bg-orange-50 transition"
            >
              Get in touch →
            </a>
          </div>
        </FadeInSection>

        {/* ── Share ── */}
        <FadeInSection delay={0.1}>
          <div className={`rounded-2xl border p-6 ${cardBg}`}>
            <p className={`text-sm font-semibold mb-3 ${mutedText}`}>Share this page</p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <FaTwitter />, label: "Share on X", href: "https://twitter.com/intent/tweet" },
                { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com/sharing/share-offsite/" },
              ].map((btn) => (
                <a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg border transition hover:border-orange-400 hover:text-orange-500 ${dark ? "border-gray-700 text-gray-400" : "border-gray-200 text-gray-500"}`}>
                  {btn.icon} {btn.label}
                </a>
              ))}
              <button onClick={handleCopy}
                className={`inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg border transition hover:border-orange-400 hover:text-orange-500 ${dark ? "border-gray-700 text-gray-400" : "border-gray-200 text-gray-500"}`}>
                {copied ? <FaCheckCircle className="text-green-500" /> : <FaLink />}
                {copied ? "Copied!" : "Copy link"}
              </button>
            </div>
          </div>
        </FadeInSection>

      </div>
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaTwitter, FaLinkedin, FaFacebook, FaLink, FaBookmark, FaRegBookmark, FaMoon, FaSun, FaCheckCircle } from "react-icons/fa";

// ── Fade-in wrapper (replaces external FadeInSection) ──────────────────────
function FadeInSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────
const sections = [
  {
    id: "intro",
    label: "Introduction",
    title: "Why digital presence matters more than ever",
    content: `In today's fast-moving world, your online presence is often the first — and sometimes only — impression a potential customer has of your business. Consumers research, compare, and make purchasing decisions online before ever picking up a phone or walking into a store. Businesses that fail to adapt risk being invisible to their most valuable audience.`,
    content2: `A strong digital presence doesn't just mean having a website. It means showing up consistently across search engines, social platforms, and email inboxes — with the right message, at the right moment, for the right person.`,
    stats: [
      { num: "81%", desc: "of buyers research online before purchasing" },
      { num: "3.5B", desc: "Google searches happen every single day" },
      { num: "4.7×", desc: "higher revenue growth for digitally mature firms" },
    ],
  },
  {
    id: "marketing",
    label: "01 — Digital Marketing",
    title: "Turning traffic into customers",
    content: `Digital marketing is about understanding your audience deeply — and delivering the right message at exactly the right moment. Unlike traditional advertising, digital campaigns are measurable, targetable, and adjustable in real time.`,
    quote: "The best marketing doesn't feel like marketing. It feels like the answer to a question your customer was already asking.",
    content2: `Social media advertising on platforms like Meta and TikTok allows hyper-targeted campaigns based on demographics, interests, and behaviours. Google Ads puts you in front of people actively searching for what you offer. Email campaigns nurture leads who already know you exist.`,
    tip: { icon: "💡", title: "Pro tip", body: "Start with one or two channels and master them before expanding. Spreading a modest budget across six platforms dilutes impact. Depth beats breadth, especially early on." },
  },
  {
    id: "webdev",
    label: "02 — Web Development",
    title: "Your digital foundation",
    content: `Your website is often the first impression users have of your brand — and first impressions take less than 50 milliseconds to form. A slow, cluttered, or outdated website doesn't just look bad; it actively costs you customers.`,
    content2: `A modern website needs to be fast (under 2 seconds to load), fully responsive across every device, visually trustworthy, and — above all — designed to convert visitors into leads or buyers. Every element from your headline to your call-to-action button should serve that goal.`,
    tip: { icon: "📱", title: "Mobile-first is non-negotiable", body: "Over 60% of all web traffic now comes from mobile devices. If your site isn't built mobile-first, you're already behind. Google also uses mobile performance as a primary ranking factor." },
  },
  {
    id: "content",
    label: "03 — Content Marketing",
    title: "Building long-term authority",
    content: `Content marketing is the practice of creating genuinely useful material — blog posts, guides, videos, podcasts — that attracts and educates your target audience. Unlike paid ads that stop the moment you stop paying, great content compounds in value over time.`,
    quote: "Content is the currency of trust. Every useful thing you publish deposits goodwill into an account your competitors can't easily touch.",
    content2: `A single well-researched article can drive thousands of visitors per month for years. The key is consistency and genuine usefulness — search engines and audiences alike reward depth and originality over templated fluff.`,
    tip: { icon: "✍️", title: "Content strategy checklist", body: "Define your audience's top 10 questions. Write the most thorough, accurate answer to each. Update them every 12 months. That's a content strategy that works." },
  },
  {
    id: "seo",
    label: "04 — SEO",
    title: "Winning the long-term game",
    content: `Search Engine Optimisation is one of the most powerful long-term growth strategies available to any business. Done well, it puts your brand in front of people actively looking for exactly what you offer — for free, month after month.`,
    content2: `SEO breaks down into three pillars: technical SEO (site speed, crawlability, structured data), on-page SEO (keyword strategy, content quality, internal linking), and off-page SEO (backlinks, brand mentions, authority building). You need all three working together.`,
    stats: [
      { num: "68%", desc: "of online experiences begin with a search engine" },
      { num: "0.63%", desc: "of users click results on page 2 of Google" },
    ],
  },
  {
    id: "social",
    label: "05 — Social Media",
    title: "Community over follower count",
    content: `It's tempting to chase follower counts as a vanity metric, but the businesses winning on social media are focused on something more valuable: genuine community. A 10,000-person audience that trusts you is worth far more than 500,000 passive followers.`,
    content2: `Each platform has its own grammar. LinkedIn rewards professional insight. Instagram and TikTok favour authentic behind-the-scenes content. Choosing the right platform means going where your actual customers already spend time.`,
    tip: { icon: "🤝", title: "Engagement over reach", body: "Reply to every comment in your first hour of posting. The algorithm rewards early engagement — and so do potential customers who see you're genuinely present and responsive." },
  },
  {
    id: "analytics",
    label: "06 — Analytics",
    title: "Data, analytics, and continuous improvement",
    content: `One of the biggest advantages digital marketing has over traditional advertising is measurability. Tools like Google Analytics 4, Search Console, and Meta Business Suite give you granular data on who's visiting, where they came from, and what they did next.`,
    quote: "Without data, you're just another person with an opinion. With it, you're the one who gets to make the decisions.",
    content2: `The businesses that succeed online don't just collect this data — they act on it. They run A/B tests, kill underperforming ad sets quickly, and double down on content that's already working.`,
  },
  {
    id: "email",
    label: "07 — Email Marketing",
    title: "The channel you actually own",
    content: `Social media reach can be cut overnight by an algorithm change. SEO rankings can shift after a Google update. But your email list? That's yours. The average email marketing ROI remains one of the highest of any digital channel — often cited at $36 for every $1 spent.`,
    content2: `Effective email marketing means segmenting your list by behaviour and interest, sending genuinely valuable content rather than constant promotions, and using automation to deliver the right message at the right stage of the buyer journey.`,
    tip: { icon: "📧", title: "Start simple", body: "A welcome sequence of 3–5 emails for new subscribers, a monthly value-packed newsletter, and an abandoned cart sequence — that's a complete email strategy for most small businesses." },
  },
];

const relatedArticles = [
  { title: "How to Build a Content Calendar That Actually Gets Used", tag: "Content", mins: 6 },
  { title: "Google Analytics 4: A Plain-English Setup Guide", tag: "Analytics", mins: 8 },
  { title: "The 10 Website Mistakes Costing You Customers Right Now", tag: "Web Dev", mins: 5 },
];

// ── Sub-components ─────────────────────────────────────────────────────────
function StatGrid({ stats }) {
  const cols = stats.length === 2 ? "grid-cols-2" : "grid-cols-3";
  return (
    <div className={`grid ${cols} gap-3 my-6`}>
      {stats.map((s, i) => (
        <div key={i} className="rounded-xl border border-orange-100 bg-orange-50 p-4 text-center">
          <span className="block text-3xl font-extrabold text-orange-500 font-serif">{s.num}</span>
          <span className="mt-1 block text-xs text-orange-700 leading-snug">{s.desc}</span>
        </div>
      ))}
    </div>
  );
}

function PullQuote({ text }) {
  return (
    <blockquote className="border-l-4 border-orange-400 pl-5 my-6">
      <p className="text-xl italic text-gray-700 leading-relaxed">"{text}"</p>
    </blockquote>
  );
}

function TipBox({ icon, title, body }) {
  return (
    <div className="rounded-xl bg-orange-50 border border-orange-100 px-5 py-4 my-6">
      <p className="text-xs font-semibold text-orange-600 uppercase tracking-widest mb-2">{icon} {title}</p>
      <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
    </div>
  );
}

// ── Main Blog Component ────────────────────────────────────────────────────
export default function Blog() {
  const [dark, setDark] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [comments, setComments] = useState([
    { name: "Alex Rivera", text: "Incredibly actionable — bookmarked and shared with my whole team.", time: "2 days ago" },
    { name: "Sarah K.", text: "The SEO section alone was worth the read. Thank you!", time: "1 day ago" },
  ]);
  const articleRef = useRef(null);

  // Reading progress
  useEffect(() => {
    const onScroll = () => {
      const el = articleRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const visible = Math.min(1, Math.max(0, (-top) / (height - window.innerHeight)));
      setProgress(Math.round(visible * 100));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (!comment.trim() || !name.trim()) return;
    setComments((prev) => [...prev, { name, text: comment, time: "Just now" }]);
    setComment("");
    setName("");
  };

  const bg = dark ? "bg-gray-950 text-gray-100" : "bg-white text-gray-900";
  const cardBg = dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100";
  const mutedText = dark ? "text-gray-400" : "text-gray-500";
  const inputCls = `w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-orange-300 ${dark ? "bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500" : "bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400"}`;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${bg}`}>
      {/* ── Reading Progress Bar ── */}
      <div className="fixed top-0 left-0 w-full z-50 h-1 bg-gray-200">
        <motion.div
          className="h-full bg-orange-400 origin-left"
          style={{ scaleX: progress / 100 }}
          transition={{ ease: "linear" }}
        />
      </div>

      {/* ── Sticky Top Controls ── */}
      <div className="fixed top-2 right-4 z-50 flex items-center gap-2">
        <span className={`text-xs font-mono px-2 py-1 rounded-full ${dark ? "bg-gray-800 text-orange-400" : "bg-orange-50 text-orange-600"}`}>
          {progress}% read
        </span>
        <button
          onClick={() => setDark((d) => !d)}
          className={`p-2 rounded-full border transition ${dark ? "bg-gray-800 border-gray-700 text-yellow-400" : "bg-white border-gray-200 text-gray-600"}`}
          title="Toggle dark mode"
        >
          {dark ? <FaSun size={14} /> : <FaMoon size={14} />}
        </button>
      </div>

      <div ref={articleRef} className="max-w-3xl mx-auto px-6 pt-20 pb-24">

        {/* ── Header ── */}
        <FadeInSection>
          <header className="mb-10 text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange-500 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full mb-4">
              Digital Growth
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-orange-400">
              The Ultimate Guide to Growing Your Business Online
            </h1>
            <p className={`text-lg italic mb-6 ${mutedText}`}>
              Digital marketing, web development, and SEO strategies that actually deliver results — not just traffic.
            </p>
            {/* Author + Meta */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-700 flex items-center justify-center text-white text-sm font-bold">LM</div>
                <div className="text-left">
                  <p className="text-sm font-semibold">Linus Muiruri</p>
                  <p className={`text-xs ${mutedText}`}>Digital Growth Strategist</p>
                </div>
              </div>
              <span className={`text-lg ${mutedText}`}>·</span>
              <span className={`text-sm ${mutedText}`}>⏱ 9 min read</span>
              <span className={`text-lg ${mutedText}`}>·</span>
              <span className={`text-sm ${mutedText}`}>📅 June 1, 2026</span>
            </div>
          </header>
        </FadeInSection>

        {/* ── Tags ── */}
        <FadeInSection>
          <div className="flex flex-wrap gap-2 mb-8">
            {["Digital Marketing","SEO","Web Development","Analytics","Growth Strategy","Content Marketing","Social Media","Email"].map((tag) => (
              <span key={tag} className={`text-xs px-3 py-1 rounded-full border cursor-pointer transition hover:border-orange-400 hover:text-orange-500 ${dark ? "border-gray-700 text-gray-400" : "border-gray-200 text-gray-500"}`}>
                {tag}
              </span>
            ))}
          </div>
        </FadeInSection>

        {/* ── Table of Contents ── */}
        <FadeInSection>
          <nav className={`rounded-2xl border p-5 mb-10 ${cardBg}`}>
            <p className={`text-xs uppercase tracking-widest font-semibold mb-3 ${mutedText}`}>In this article</p>
            <ol className="space-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className={`text-sm flex items-center gap-2 hover:text-orange-500 transition ${mutedText}`}>
                    <span className="text-xs w-6 shrink-0 text-orange-300">{s.label.split("—")[0].trim()}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </FadeInSection>

        {/* ── Sections ── */}
        {sections.map((section, index) => (
          <FadeInSection key={section.id}>
            <section id={section.id} className={`mb-12 p-8 rounded-2xl border ${cardBg} ${dark ? "" : "shadow-sm"}`}>
              {index > 0 && (
                <div className="flex justify-center mb-5">
                  <FaStar className="text-orange-300 text-base animate-pulse" />
                </div>
              )}
              <p className="text-xs font-semibold tracking-widest uppercase text-orange-500 mb-2">{section.label}</p>
              <h2 className="text-2xl font-extrabold mb-4 text-orange-400">{section.title}</h2>
              <p className={`text-base leading-relaxed mb-4 ${mutedText}`}>{section.content}</p>
              {section.quote && <PullQuote text={section.quote} />}
              {section.content2 && <p className={`text-base leading-relaxed mb-4 ${mutedText}`}>{section.content2}</p>}
              {section.stats && <StatGrid stats={section.stats} />}
              {section.tip && <TipBox {...section.tip} />}
              <div className="mt-6 h-px bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 opacity-40 rounded-full" />
            </section>
          </FadeInSection>
        ))}

        {/* ── Conclusion ── */}
        <FadeInSection>
          <div className={`rounded-2xl border p-8 mb-12 ${cardBg}`}>
            <h2 className="text-2xl font-extrabold text-orange-400 mb-3">The bottom line</h2>
            <p className={`text-base leading-relaxed ${mutedText}`}>
              Digital success doesn't require doing everything at once. It requires doing the right things consistently — a fast, trustworthy website, content that genuinely helps your audience, SEO that builds over time, and data that guides your decisions. The brands winning online aren't the ones with the biggest budgets. They're the ones that started building six months ago.
            </p>
          </div>
        </FadeInSection>

        {/* ── Share Buttons ── */}
        <FadeInSection>
          <div className={`rounded-2xl border p-6 mb-10 ${cardBg}`}>
            <p className={`text-sm font-semibold mb-3 ${mutedText}`}>Share this article</p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <FaTwitter />, label: "Share on X", href: "https://twitter.com/intent/tweet" },
                { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com/sharing/share-offsite/" },
                { icon: <FaFacebook />, label: "Facebook", href: "https://facebook.com/sharer/sharer.php" },
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

        {/* ── Author Bio ── */}
        <FadeInSection>
          <div className={`rounded-2xl border p-6 mb-10 flex gap-5 items-start ${cardBg}`}>
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-700 flex items-center justify-center text-white text-xl font-bold shrink-0">JM</div>
            <div>
              <p className={`text-xs uppercase tracking-widest mb-1 ${mutedText}`}>Written by</p>
              <p className="text-lg font-extrabold text-orange-400">Linus Muiruri</p>
              <p className="text-xs text-orange-500 font-semibold mb-2">Digital Growth Strategist</p>
              <p className={`text-sm leading-relaxed ${mutedText}`}>
                Linus has spent 12 years helping small and mid-sized businesses build sustainable online growth through SEO, content strategy, and conversion-focused web design. When not deep in analytics dashboards, Linus writes about the intersection of technology and human behaviour.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* ── Newsletter Signup ── */}
        <FadeInSection>
          <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 p-8 mb-10 text-center text-white">
            <p className="text-xs uppercase tracking-widest font-semibold mb-2 opacity-80">Stay ahead</p>
            <h3 className="text-2xl font-extrabold mb-2">Get weekly growth insights</h3>
            <p className="text-sm opacity-80 mb-5">No fluff. Just actionable digital marketing and SEO strategies, delivered every Tuesday.</p>
            <AnimatePresence mode="wait">
              {subscribed ? (
                <motion.div key="done" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 text-white font-semibold">
                  <FaCheckCircle /> You're in! Check your inbox.
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-white"
                  />
                  <button type="submit" className="bg-white text-orange-600 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-orange-50 transition shrink-0">
                    Subscribe free →
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </FadeInSection>

        {/* ── Related Articles ── */}
        <FadeInSection>
          <div className="mb-12">
            <p className={`text-xs uppercase tracking-widest font-semibold mb-4 ${mutedText}`}>Related articles</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatedArticles.map((a, i) => (
                <div key={i} className={`rounded-xl border p-4 cursor-pointer hover:border-orange-300 transition ${cardBg}`}>
                  <span className="text-xs text-orange-500 font-semibold bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100">{a.tag}</span>
                  <p className={`text-sm font-semibold mt-2 leading-snug ${dark ? "text-gray-200" : "text-gray-800"}`}>{a.title}</p>
                  <p className={`text-xs mt-1 ${mutedText}`}>{a.mins} min read</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* ── Comments ── */}
        <FadeInSection>
          <div className={`rounded-2xl border p-6 ${cardBg}`}>
            <h3 className="text-lg font-extrabold text-orange-400 mb-5">
              Comments <span className={`text-sm font-normal ${mutedText}`}>({comments.length})</span>
            </h3>

            {/* Existing comments */}
            <div className="space-y-5 mb-7">
              <AnimatePresence>
                {comments.map((c, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-3`}>
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {c.name.charAt(0)}
                    </div>
                    <div className={`flex-1 rounded-xl border px-4 py-3 ${dark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-100"}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-sm font-semibold ${dark ? "text-gray-200" : "text-gray-800"}`}>{c.name}</span>
                        <span className={`text-xs ${mutedText}`}>{c.time}</span>
                      </div>
                      <p className={`text-sm leading-relaxed ${mutedText}`}>{c.text}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Comment form */}
            <form onSubmit={handleComment} className="space-y-3">
              <p className={`text-sm font-semibold ${dark ? "text-gray-300" : "text-gray-700"}`}>Leave a comment</p>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputCls}
                required
              />
              <textarea
                placeholder="Share your thoughts..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={3}
                className={`${inputCls} resize-none`}
                required
              />
              <button type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition">
                Post comment →
              </button>
            </form>
          </div>
        </FadeInSection>

      </div>
    </div>
  );
}

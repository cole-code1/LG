import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaFacebook, FaLink, FaMoon, FaSun, FaTwitter, FaLinkedin } from "react-icons/fa";

const MotionDiv = motion.div;

const internalLinks = {
  digitalMarketing: "/service-request",
  website: "/services/web-development",
  content: "/services/content-marketing",
  seo: "/services/seo",
  branding: "/services/branding",
  services: "/service-request",
  contact: "/contact",
};

const articleSections = [
  { id: "website-conversion", label: "01", title: "Your website isn't designed to convert visitors" },
  { id: "content-purpose", label: "02", title: "You're creating content without a clear purpose" },
  { id: "targeting", label: "03", title: "You're targeting everyone" },
  { id: "connected-channels", label: "04", title: "Your social media and website are working separately" },
  { id: "strategy", label: "05", title: "You're trying to solve a strategy problem by posting more" },
];

const tags = ["Digital Marketing", "SEO", "Website Marketing", "Lead Generation", "Kenya Business", "Content Marketing"];

function FadeInSection({ children }) {
  return <MotionDiv initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>{children}</MotionDiv>;
}

function ArticleLink({ href, children }) {
  return <a href={href} className="font-semibold text-orange-500 underline decoration-orange-200 underline-offset-2 hover:text-orange-600">{children}</a>;
}

function BulletList({ items, dark }) {
  return <ul className={`my-5 space-y-2 pl-6 text-base leading-relaxed ${dark ? "text-gray-300" : "text-gray-600"}`}>{items.map((item) => <li key={item} className="list-disc pl-1">{item}</li>)}</ul>;
}

export default function Blog() {
  const [dark, setDark] = useState(false);
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [comments, setComments] = useState([]);
  const articleRef = useRef(null);

  useEffect(() => {
    document.title = "Why Your Business Isn't Getting Customers Online | LG Marketing Hub";
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content = "Not getting enough customers online? Discover 5 digital marketing problems businesses face and what to fix first to generate more enquiries.";
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const element = articleRef.current;
      if (!element) return;
      const { top, height } = element.getBoundingClientRect();
      const denominator = height - window.innerHeight;
      setProgress(denominator > 0 ? Math.round(Math.min(1, Math.max(0, -top / denominator)) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cardBg = dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100";
  const mutedText = dark ? "text-gray-300" : "text-gray-600";
  const inputCls = `w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-300 ${dark ? "bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500" : "bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400"}`;

  const handleComment = (event) => {
    event.preventDefault();
    if (!comment.trim() || !name.trim()) return;
    setComments((current) => [...current, { name, text: comment }]);
    setComment("");
    setName("");
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${dark ? "bg-gray-950 text-gray-100" : "bg-white text-gray-900"}`}>
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-gray-200"><MotionDiv className="h-full origin-left bg-orange-400" style={{ scaleX: progress / 100 }} /></div>
      <div className="fixed right-4 top-2 z-50 flex items-center gap-2"><span className={`rounded-full px-2 py-1 text-xs font-mono ${dark ? "bg-gray-800 text-orange-400" : "bg-orange-50 text-orange-600"}`}>{progress}% read</span><button onClick={() => setDark((value) => !value)} className={`rounded-full border p-2 ${dark ? "border-gray-700 bg-gray-800 text-yellow-400" : "border-gray-200 bg-white text-gray-600"}`} title="Toggle dark mode" aria-label="Toggle dark mode">{dark ? <FaSun size={14} /> : <FaMoon size={14} />}</button></div>

      <main ref={articleRef} className="mx-auto max-w-3xl px-6 pb-24 pt-20">
        <FadeInSection><header className="mb-10 text-center"><span className="mb-4 inline-block rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-orange-500">Digital Marketing</span><h1 className="mb-4 text-4xl font-extrabold leading-tight text-orange-400 md:text-5xl">Why Your Business Is Not Getting Enough Customers Online, And What to Fix First</h1><p className={`mb-6 text-lg italic ${mutedText}`}>A practical guide to digital marketing for businesses in Kenya.</p><div className="flex flex-wrap items-center justify-center gap-3 text-sm"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-700 text-sm font-bold text-white">LM</div><div className="text-left"><p className="font-semibold">LG Marketing Hub</p><p className={`text-xs ${mutedText}`}>SEO-Ready Website Blog</p></div></div><span className={mutedText}>·</span><span className={mutedText}>8 min read</span><span className={mutedText}>·</span><span className={mutedText}>Digital Marketing</span></div></header></FadeInSection>

        <FadeInSection><div className="mb-8 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className={`rounded-full border px-3 py-1 text-xs ${dark ? "border-gray-700 text-gray-400" : "border-gray-200 text-gray-500"}`}>{tag}</span>)}</div></FadeInSection>
        <FadeInSection><nav className={`mb-10 rounded-2xl border p-5 ${cardBg}`}><p className={`mb-3 text-xs font-semibold uppercase tracking-widest ${mutedText}`}>In this article</p><ol className="space-y-2">{articleSections.map((section) => <li key={section.id}><a href={`#${section.id}`} className={`flex gap-2 text-sm hover:text-orange-500 ${mutedText}`}><span className="w-6 shrink-0 text-orange-400">{section.label}</span>{section.title}</a></li>)}</ol></nav></FadeInSection>

        <FadeInSection><section className={`mb-10 rounded-2xl border p-6 ${cardBg}`}><p className={`mb-4 text-base leading-relaxed ${mutedText}`}>You can have a website. You can have an Instagram page. You can post consistently. You can even spend money on advertising.</p><p className={`mb-4 text-base leading-relaxed ${mutedText}`}>And still struggle to get enough customers online.</p><p className={`mb-4 text-base leading-relaxed ${mutedText}`}>For many businesses, the problem is not that they are doing nothing online. The problem is that the different parts of their digital marketing are not working together.</p><p className={`text-base leading-relaxed ${mutedText}`}>Your website, SEO, social media, content, branding and advertising should move a potential customer from <strong>Discovery → Interest → Trust → Action → Enquiry</strong>. If that journey is broken somewhere, you can generate plenty of attention without generating enough business.</p></section></FadeInSection>

        <FadeInSection><section id="website-conversion" className={`mb-10 rounded-2xl border p-6 ${cardBg}`}><p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-500">01</p><h2 className="mb-4 text-2xl font-extrabold text-orange-400">Your website isn't designed to convert visitors</h2><p className={`mb-4 leading-relaxed ${mutedText}`}>Your website is often one of the first places a potential customer goes after discovering your business. But having a website is not enough. A visitor should quickly understand what you offer, who you help, why they should choose you, and what they should do next.</p><BulletList dark={dark} items={["An unclear homepage headline", "Too many competing messages", "Weak calls to action", "Difficult-to-find contact information", "No enquiry form", "Poor mobile experience", "Service pages with very little useful information", "No customer proof or case studies", "A website that looks good but does not guide visitors toward action"]} /><p className={`leading-relaxed ${mutedText}`}>A website can look professional and still perform poorly as a sales tool. If your website needs improvement, explore our <ArticleLink href={internalLinks.website}>Website Design & Revamp Services</ArticleLink>. The objective is to make it easier for the right visitor to understand your offer and take the next step.</p></section></FadeInSection>

        <FadeInSection><section id="content-purpose" className={`mb-10 rounded-2xl border p-6 ${cardBg}`}><p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-500">02</p><h2 className="mb-4 text-2xl font-extrabold text-orange-400">You're creating content without a clear purpose</h2><p className={`mb-4 leading-relaxed ${mutedText}`}>Instead of asking “What should we post today?”, ask “What does this piece of content need to accomplish?” Awareness content helps people discover your business. Educational content shows that you understand their problems. Trust content uses proof, results, testimonials, case studies or behind-the-scenes information. Consideration content explains why your solution may be right, while conversion content encourages someone to enquire, book, buy or contact you.</p><p className={`leading-relaxed ${mutedText}`}>If every post says “Buy our service”, your audience has little reason to engage. But if every post is educational with no path toward your services, people may consume your content without becoming customers. Build a content strategy where different pieces move people through different stages of the customer journey. Learn more about our <ArticleLink href={internalLinks.content}>Content Marketing & Content Creation Services</ArticleLink>.</p></section></FadeInSection>

        <FadeInSection><section id="targeting" className={`mb-10 rounded-2xl border p-6 ${cardBg}`}><p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-500">03</p><h2 className="mb-4 text-2xl font-extrabold text-orange-400">You're targeting everyone</h2><p className={`mb-4 leading-relaxed ${mutedText}`}>“Businesses in Kenya” is too broad to be a complete marketing strategy. A hotel does not have the same marketing problems as a real estate company. A school does not have the same customer journey as a construction company, and a law firm does not communicate value in the same way as an e-commerce business.</p><BulletList dark={dark} items={["Who is our ideal customer?", "What problem are they trying to solve?", "What are they currently doing?", "What is stopping them from buying?", "Why should they choose us?", "What action do we want them to take?"]} /><p className={`leading-relaxed ${mutedText}`}>Marketing is not just about reaching more people. It is about reaching the right people with the right message. This is where a proper <ArticleLink href={internalLinks.digitalMarketing}>Digital Marketing Strategy</ArticleLink> becomes valuable.</p></section></FadeInSection>

        <FadeInSection><section id="connected-channels" className={`mb-10 rounded-2xl border p-6 ${cardBg}`}><p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-500">04</p><h2 className="mb-4 text-2xl font-extrabold text-orange-400">Your social media and website are working separately</h2><p className={`mb-4 leading-relaxed ${mutedText}`}>Imagine this customer journey: someone sees your Instagram Reel, becomes interested, visits your profile, clicks your website, reads a relevant service page, sees proof of your work, and contacts you. That is a connected marketing system.</p><p className={`leading-relaxed ${mutedText}`}>If the website is confusing, the offer is unclear, or there is no call to action, you generated attention but lost the opportunity. This is why your <ArticleLink href={internalLinks.seo}>SEO Services</ArticleLink>, website, social media and content strategy should support each other. Send people to a useful service page, blog article, case study, landing page, booking page, WhatsApp or enquiry form.</p></section></FadeInSection>

        <FadeInSection><section id="strategy" className={`mb-10 rounded-2xl border p-6 ${cardBg}`}><p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-500">05</p><h2 className="mb-4 text-2xl font-extrabold text-orange-400">You're trying to solve a strategy problem by posting more</h2><p className={`mb-4 leading-relaxed ${mutedText}`}>When marketing is not working, the first response is often: “We need to post more.” But more content does not automatically solve a broken marketing system. If your offer is unclear, your website does not convert, you are targeting the wrong audience, your content is not answering customer problems, or there is no clear conversion path, posting more will not fix it.</p><p className={`leading-relaxed ${mutedText}`}>Before increasing your posting frequency, look at the system behind your marketing: <strong>Audience → Message → Content → Destination → Conversion</strong>. Fix the bottleneck before simply producing more content.</p></section></FadeInSection>

        <FadeInSection><section className={`mb-10 rounded-2xl border p-8 ${cardBg}`}><h2 className="mb-5 text-2xl font-extrabold text-orange-400">So, what should your business fix first?</h2>{[["Step 1: Clarify your offer", "Make it immediately obvious what you do, who you help and what problem you solve."], ["Step 2: Audit your website", <>Review homepage messaging, service pages, mobile experience, page speed, calls to action, contact information, enquiry forms, customer proof and navigation. Consider a <ArticleLink href={internalLinks.services}>Website Audit</ArticleLink> if you are unsure where the problems are.</>], ["Step 3: Build content around customer problems", "Do not only talk about what your business sells. Talk about the problems your potential customers are already experiencing."], ["Step 4: Build a conversion path", "Every major marketing channel should have somewhere useful to send people: Google Search → Helpful article → Relevant service page → Proof → CTA → Enquiry."], ["Step 5: Measure business results", "Look at website traffic, search impressions, clicks, service-page visits, WhatsApp clicks, enquiries, qualified leads, bookings and sales, not only likes and followers."]].map(([title, body]) => <div key={title} className="mb-5 last:mb-0"><h3 className="mb-1 text-lg font-bold">{title}</h3><p className={`leading-relaxed ${mutedText}`}>{body}</p></div>)}</section></FadeInSection>

        <FadeInSection><section className={`mb-12 rounded-2xl border p-8 ${cardBg}`}><h2 className="mb-4 text-2xl font-extrabold text-orange-400">Your digital presence should work as a system</h2><p className={`mb-4 leading-relaxed ${mutedText}`}>Your website, SEO, content, branding and social media should support one another. Think of your digital marketing system like this:</p><p className="mb-5 rounded-xl bg-orange-50 p-4 text-center font-bold text-orange-700">SEARCH → CONTENT → WEBSITE → SERVICE PAGE → TRUST / PROOF → CTA → ENQUIRY</p><p className={`mb-4 leading-relaxed ${mutedText}`}>At LG Marketing Hub, we help businesses strengthen the digital foundations behind their marketing through <ArticleLink href={internalLinks.digitalMarketing}>Digital Marketing</ArticleLink>, <ArticleLink href={internalLinks.seo}>SEO</ArticleLink>, <ArticleLink href={internalLinks.website}>Website Design & Revamps</ArticleLink>, <ArticleLink href={internalLinks.branding}>Branding & Design</ArticleLink> and <ArticleLink href={internalLinks.content}>Content Creation</ArticleLink>.</p><p className={`leading-relaxed ${mutedText}`}>If your business is getting attention online but not enough enquiries, the answer may not be “Post more.” It may be time to fix the system behind your marketing.</p><div className="mt-6 flex flex-wrap gap-3"><a href={internalLinks.services} className="rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-600">Explore LG Marketing Hub Services</a><a href={internalLinks.contact} className="rounded-lg border border-orange-200 px-4 py-2.5 text-sm font-semibold text-orange-600 hover:border-orange-400">Contact LG Marketing Hub</a></div></section></FadeInSection>

        <FadeInSection><section className={`mb-12 rounded-2xl border p-8 ${cardBg}`}><h2 className="mb-5 text-2xl font-extrabold text-orange-400">Frequently Asked Questions</h2>{[["Why is my business not getting customers online?", "Your business may be struggling because of unclear positioning, weak website conversion, poor targeting, limited search visibility, ineffective content or a missing conversion path."], ["How can I get more customers online?", "Define your target customer, improve your website, create useful content around customer problems, improve search visibility and create a clear path from discovery to enquiry."], ["Does posting more on social media get more customers?", "Not necessarily. Posting more can increase visibility, but your content also needs to reach the right audience and connect to a strong offer and conversion path."], ["Does my business need SEO?", "If potential customers search online for the products or services you provide, SEO can improve your visibility in search. It should work alongside your website, content and wider digital marketing strategy."], ["What should I fix first: my website or social media?", "Start with the biggest bottleneck. If social media generates attention but your website does not convert, improve the website. If the website is strong but nobody finds it, improve visibility through SEO and content."]].map(([question, answer]) => <div key={question} className="mb-5 last:mb-0"><h3 className="mb-1 text-base font-bold">{question}</h3><p className={`leading-relaxed ${mutedText}`}>{answer}</p></div>)}</section></FadeInSection>

        <FadeInSection><div className={`mb-10 rounded-2xl border p-6 ${cardBg}`}><p className={`mb-3 text-sm font-semibold ${mutedText}`}>Share this article</p><div className="flex flex-wrap gap-3">{[[<FaTwitter />, "Share on X", "https://twitter.com/intent/tweet"], [<FaLinkedin />, "LinkedIn", "https://linkedin.com/sharing/share-offsite/"], [<FaFacebook />, "Facebook", "https://facebook.com/sharer/sharer.php"]].map(([icon, label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm ${dark ? "border-gray-700 text-gray-400" : "border-gray-200 text-gray-500"}`}>{icon}{label}</a>)}<button onClick={() => { navigator.clipboard?.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm ${dark ? "border-gray-700 text-gray-400" : "border-gray-200 text-gray-500"}`}>{copied ? <FaCheckCircle className="text-green-500" /> : <FaLink />}{copied ? "Copied!" : "Copy link"}</button></div></div></FadeInSection>

        <FadeInSection><section className={`rounded-2xl border p-6 ${cardBg}`}><h2 className="mb-5 text-lg font-extrabold text-orange-400">Comments <span className={`text-sm font-normal ${mutedText}`}>({comments.length})</span></h2><div className="mb-7 space-y-4">{comments.map((item, index) => <div key={`${item.name}-${index}`} className="flex gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-400 text-xs font-bold text-white">{item.name.charAt(0)}</div><div className={`flex-1 rounded-xl border px-4 py-3 ${dark ? "border-gray-700 bg-gray-800" : "border-gray-100 bg-gray-50"}`}><p className="text-sm font-semibold">{item.name}</p><p className={`text-sm ${mutedText}`}>{item.text}</p></div></div>)}</div><form onSubmit={handleComment} className="space-y-3"><p className="text-sm font-semibold">Leave a comment</p><input type="text" required placeholder="Your name" value={name} onChange={(event) => setName(event.target.value)} className={inputCls} /><textarea required rows={3} placeholder="Share your thoughts..." value={comment} onChange={(event) => setComment(event.target.value)} className={`${inputCls} resize-none`} /><button className="rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-600">Post comment</button></form></section></FadeInSection>
      </main>
    </div>
  );
}

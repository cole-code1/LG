import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToHash from "./components/ScrollToHash";

import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Projectsboard from "./pages/Projectsboard.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
// import Services from "./pages/Services.jsx";
import ServiceRequest from "./pages/ServiceRequest";

import SEOoptimization from "./pages/SEOoptimization.jsx";
import WebDevelopment from "./pages/WebDevelopment.jsx";
import SocialMarketing from "./pages/SocialMarketing.jsx";
import GraphicDesign from "./pages/GraphicDesign.jsx";
import WebsiteMaintenance from "./pages/WebsiteMaintenance.jsx";
import GoogleAds from "./pages/GoogleAds.jsx";
import ContentMarketing from "./pages/ContentMarketing.jsx";
import BusinessCorporateBranding from "./pages/BusinessCorporateBranding.jsx";
import WhatsAppFloatButton from "./components/whatsappfloatButton.jsx";

import { ServiceProvider } from "./context/ServiceContext";

function App() {
  return (
    <ServiceProvider>
      <WhatsAppFloatButton />
      <Navbar />
      <ScrollToHash />

      <Routes>
        {/* MAIN PAGES */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projectsboard" element={<Projectsboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/service-request" element={<ServiceRequest />} />

        {/* SERVICE PAGES (NEW FIX) */}
        <Route path="/services/seo" element={<SEOoptimization />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/social-marketing" element={<SocialMarketing />} />
        <Route path="/services/graphic-design" element={<GraphicDesign />} />
        <Route path="/services/website-maintenance" element={<WebsiteMaintenance />} />
        <Route path="/services/google-ads" element={<GoogleAds />} />
        <Route path="/services/content-marketing" element={<ContentMarketing />} />
        <Route
          path="/services/branding"
          element={<BusinessCorporateBranding />}
        />
      </Routes>

      <Footer />
    </ServiceProvider>
  );
}

export default App;
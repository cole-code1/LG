
import { Instagram, Mail, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import {logo} from "../src/assets/images/logo.png";
export default function Footer() {
  const socialLinks = [
    { name: "Instagram", icon: <Instagram size={20} />, link: "https://instagram.com/yourusername", color: "#FF6B81" },
    { name: "Email", icon: <Mail size={20} />, link: "mailto:your@email.com", color: "#FF6B5B" },
    { name: "Facebook", icon: <Facebook size={20} />, link: "https://facebook.com", color: "#3b5998" },
    { name: "Twitter", icon: <Twitter size={20} />, link: "https://twitter.com", color: "#1da1f2" },
  ];

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projectsboard", path: "/projectsboard" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="text-white py-12" style={{ backgroundColor: "#ac9e9e" }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo & Text */}
        <div className="text-center md:text-left">
          {/* <img src={logo} alt="Logo" className="h-10 w-auto mx-auto md:mx-0 mb-4" /> */}
          <p className="text-white/70">© {new Date().getFullYear()} LG Marketing Hub. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white/70 hover:text-orange-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full"
              style={{ color: social.color }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

      </div>
    </footer>
  );
}

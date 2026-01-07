import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);


  // Glow effect class for all nav links
  const glowLink = `
    relative transition-all duration-300
    after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1
    after:bg-indigo-400 after:rounded-full after:opacity-0
    hover:after:opacity-100 after:scale-x-0 hover:after:scale-x-100
    after:transition-transform after:duration-300
  `;

  return (
    <nav className="fixed w-full z-50 bg-transparent backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            <img src={logo} alt="Logo" className="h-26 w-26" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700 dark:text-gray-200">
            <li><Link to="/" className={`${glowLink} hover:text-indigo-500 dark:hover:text-indigo-300`}>Home</Link></li>

            {/* Services Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <span className={`${glowLink} cursor-pointer hover:text-indigo-500 dark:hover:text-indigo-300`}>
                Services
              </span>
              <ul className={`absolute left-0 mt-2 w-52 bg-white dark:bg-gray-800 rounded-md shadow-lg transition-all duration-300 transform ${
                servicesOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
              }`}>
                {[{ title: "Digital Marketing", link: "/services#digital-marketing" },
                  { title: "Web Development", link: "/services#web-development" },
                  { title: "SEO", link: "/services#seo" }].map((item, i) => (
                  <li key={i} className="px-4 py-2 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-300">
                    <Link to={item.link} className="hover:text-indigo-600 dark:hover:text-indigo-300 transition-all duration-300">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li><Link to="/projectsboard" className={`${glowLink} hover:text-indigo-500 dark:hover:text-indigo-300`}>Projectsboard</Link></li>
            <li><Link to="/blog" className={`${glowLink} hover:text-indigo-500 dark:hover:text-indigo-300`}>Blog</Link></li>
            <li><Link to="/about" className={`${glowLink} hover:text-indigo-500 dark:hover:text-indigo-300`}>About</Link></li>
            <li><Link to="/contact" className={`${glowLink} hover:text-indigo-500 dark:hover:text-indigo-300`}>Contact</Link></li>

          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-700 dark:text-gray-200"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg transition-colors duration-300">
          <ul className="flex flex-col px-6 py-4 space-y-4 text-gray-700 dark:text-gray-200">
            <li><Link to="/" className="hover:text-indigo-500 dark:hover:text-indigo-300 transition">Home</Link></li>

            <li>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex justify-between w-full"
              >
                Services <span>{servicesOpen ? "−" : "+"}</span>
              </button>
              {servicesOpen && (
                <ul className="ml-4 mt-2 space-y-2 text-sm">
                  {[{ title: "Digital Marketing", link: "/services#digital-marketing" },
                    { title: "Web Development", link: "/services#web-development" },
                    { title: "SEO", link: "/services#seo" }].map((item, i) => (
                    <li key={i} className="hover:text-indigo-600 dark:hover:text-indigo-300 transition">
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><Link to="/projectsboard" className="hover:text-indigo-500 dark:hover:text-indigo-300 transition">Projectsboard</Link></li>
            <li><Link to="/blog" className="hover:text-indigo-500 dark:hover:text-indigo-300 transition">Blog</Link></li>
            <li><Link to="/about" className="hover:text-indigo-500 dark:hover:text-indigo-300 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-500 dark:hover:text-indigo-300 transition">Contact</Link></li>

          </ul>
        </div>
      )}
    </nav>
  );
}

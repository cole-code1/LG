import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const logo = "https://res.cloudinary.com/daqtttdb0/image/upload/v1768241458/Navy_and_White_Modern_Book_Club_Logo_20260107_171021_0000-removebg-preview_rj8yf3.png";

export default function Navbar() {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", dropdown: true },
    { name: "Projectsboard", path: "/projectsboard" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { title: "Digital Marketing", link: "/services#digital-marketing" },
    { title: "Web Development", link: "/services#web-development" },
    { title: "SEO", link: "/services#seo" },
  ];

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-23 w-24" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-2 relative">
            {links.map((link) => {
              const isActive =
                link.path === "/services"
                  ? location.pathname.startsWith("/services")
                  : location.pathname === link.path;

              return (
                <li
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => {
                    setHovered(link.path);
                    if (link.dropdown) setServicesOpen(true);
                  }}
                  onMouseLeave={() => {
                    setHovered(null);
                    if (link.dropdown) setServicesOpen(false);
                  }}
                >
                  {/* Desktop Active bubble */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-bubble"
                      className="absolute inset-0 rounded-full bg-orange-500/30 backdrop-blur-sm"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}

                  {/* Desktop Hover bubble */}
                  <AnimatePresence>
                    {hovered === link.path && !isActive && (
                      <motion.span
                        layoutId="nav-hover"
                        className="absolute inset-0 rounded-full bg-orange-400/20 backdrop-blur-sm"
                        style={{ textShadow: "0 0 6px rgba(0, 0, 0, 0.4)" }}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      />
                    )}
                  </AnimatePresence>

                  <Link
                    to={link.path}
                    className="relative z-10 px-5 py-2 font-medium text-white hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>

                  {/* Desktop Services Dropdown */}
                  {link.dropdown && servicesOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="absolute left-0 mt-3 w-56 rounded-xl bg-white/10 backdrop-blur-md shadow-xl ring-1 ring-white/20 overflow-hidden"
                    >
                      {services.map((item, i) => (
                        <li key={i}>
                          <Link
                            to={item.link}
                            className="block px-4 py-3 text-sm text-white hover:text-black hover:bg-orange-400/40 transition"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-black z-20"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20 relative"
          >
            <ul className="flex flex-col px-6 py-5 space-y-4 relative">
              {links.map((link) => (
                <li key={link.path}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex w-full justify-between font-medium text-white hover:text-orange-400"
                      >
                        {link.name} <span>{servicesOpen ? "−" : "+"}</span>
                      </button>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="ml-4 mt-2 space-y-2 text-sm"
                          >
                            {services.map((item) => (
                              <motion.li key={item.link}>
                                <Link
                                  to={item.link}
                                  onClick={() => setMenuOpen(false)}
                                  className="hover:text-orange-400 block text-white"
                                >
                                  {item.title}
                                </Link>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className="block font-medium text-white hover:text-orange-400"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

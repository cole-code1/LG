import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo.png";


export default function Navbar() {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileHovered, setMobileHovered] = useState(null);

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

  // Auto-close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileHovered(null);
  }, [location]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md border-b border-white/30 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-25 w-auto" />
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
                      className="absolute inset-0 rounded-full bg-orange-500"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}

                  {/* Desktop Hover bubble */}
                  <AnimatePresence>
                    {hovered === link.path && !isActive && (
                      <motion.span
                        layoutId="nav-hover"
                        className="absolute inset-0 rounded-full bg-orange-400/90 blur-md"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      />
                    )}
                  </AnimatePresence>

                  <Link
                    to={link.path}
                    className="relative z-10 px-5 py-2 font-medium text-gray-800 dark:text-gray-200 hover:text-white transition-colors"
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
                      className="absolute left-0 mt-3 w-56 rounded-xl bg-white dark:bg-white-800 shadow-xl ring-1 ring-black/5 overflow-hidden"
                    >
                      {services.map((item, i) => (
                        <li key={i}>
                          <Link
                            to={item.link}
                            className="block px-4 py-3 text-sm hover:bg-orange-100 dark:hover:bg-gray-700 hover:text-orange-600 transition"
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
            className="md:hidden text-2xl text-gray-800 dark:text-gray-200 z-20"
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
            className="md:hidden bg-white/90 dark:bg-white-900/90 backdrop-blur-md border-t border-white/20 relative"
            drag="y"
            dragConstraints={{ top: 0, bottom: 300 }}
            dragElastic={0.2}
            onDragEnd={(event, info) => {
              if (info.offset.y < -50) setMenuOpen(false);
            }}
          >
            <ul className="flex flex-col px-6 py-5 space-y-4 relative">
              {/* Mobile bubble */}
              <AnimatePresence>
                {mobileHovered && (
                  <motion.span
                    layoutId="mobile-bubble"
                    className="absolute left-0 right-0 h-10 bg-orange-500/80 rounded-full z-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    style={{
                      top: mobileHovered.offsetTop || 0,
                    }}
                  />
                )}
              </AnimatePresence>

              {links.map((link) => (
                <li key={link.path}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        onMouseEnter={(e) => setMobileHovered(e.currentTarget)}
                        onMouseLeave={() => setMobileHovered(null)}
                        className="flex w-full justify-between font-medium relative z-10"
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
                            className="ml-4 mt-2 space-y-2 text-sm relative z-10"
                          >
                            {services.map((item) => (
                              <motion.li
                                key={item.link}
                                onMouseEnter={(e) => setMobileHovered(e.currentTarget)}
                                onMouseLeave={() => setMobileHovered(null)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative z-10"
                              >
                                <Link
                                  to={item.link}
                                  onClick={() => setMenuOpen(false)}
                                  className="hover:text-orange-500 block"
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
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.03 }}
                      onMouseEnter={(e) => setMobileHovered(e.currentTarget)}
                      onMouseLeave={() => setMobileHovered(null)}
                      className="relative z-10"
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                        className="block font-medium"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
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

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const logo =
  "https://res.cloudinary.com/daqtttdb0/image/upload/v1768241458/Navy_and_White_Modern_Book_Club_Logo_20260107_171021_0000-removebg-preview_rj8yf3.png";

export default function Navbar() {
  const location = useLocation();

  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // separate states (IMPORTANT FIX)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", dropdown: true },
    { name: "Projectsboard", path: "/projectsboard" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

const services = [
  { title: "Social Marketing", link: "/services/social-marketing" },
  { title: "Web Development", link: "/services/web-development" },
  { title: "SEO Optimization", link: "/services/seo" },
  { title: "Google Ads / PPC", link: "/services/google-ads" },
  { title: "Content Marketing", link: "/services/content-marketing" },
  { title: "Graphic Design", link: "/services/graphic-design" },
  { title: "Website Maintenance", link: "/services/website-maintenance" },
  { title: "Business Branding", link: "/services/branding" },
];

  useEffect(() => {
    setMenuOpen(false);
    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-20 w-24 object-contain" />
          </Link>

          {/* DESKTOP MENU */}
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
                    if (link.dropdown) setDesktopServicesOpen(true);
                  }}
                  onMouseLeave={() => {
                    setHovered(null);
                    if (link.dropdown) setDesktopServicesOpen(false);
                  }}
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-bubble"
                      className="absolute inset-0 rounded-full bg-orange-500/30"
                    />
                  )}

                  {/* Hover background */}
                  <AnimatePresence>
                    {hovered === link.path && !isActive && (
                      <motion.span
                        layoutId="nav-hover"
                        className="absolute inset-0 rounded-full bg-orange-400/20"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85 }}
                      />
                    )}
                  </AnimatePresence>

                  <Link
                    to={link.path}
                    className="relative z-10 px-5 py-2 font-medium text-black hover:text-orange-400 transition"
                  >
                    {link.name}
                  </Link>

                  {/* DESKTOP DROPDOWN FIXED */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {desktopServicesOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50"
                        >
                          {services.map((item) => (
                            <li key={item.link}>
                              <Link
                                to={item.link}
                                className="block px-4 py-3 text-sm text-black hover:bg-orange-400/30 transition"
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              );
            })}
          </ul>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-black"
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
            className="md:hidden bg-white border-t border-gray-200"
          >
            <ul className="flex flex-col px-6 py-5 space-y-4">
              {links.map((link) => (
                <li key={link.path}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileServicesOpen(!mobileServicesOpen)
                        }
                        className="flex w-full justify-between font-medium text-black"
                      >
                        {link.name}
                        <span>{mobileServicesOpen ? "−" : "+"}</span>
                      </button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="ml-4 mt-2 space-y-2"
                          >
                            {services.map((item) => (
                              <li key={item.link}>
                                <Link
                                  to={item.link}
                                  onClick={() => setMenuOpen(false)}
                                  className="block text-sm text-black hover:text-orange-400"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className="block font-medium text-black hover:text-orange-400"
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
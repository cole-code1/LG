import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // CASE 1: If hash exists → scroll to section
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    // CASE 2: No hash → always go to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [hash, pathname]);

  return null;
}
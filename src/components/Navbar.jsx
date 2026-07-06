import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioContent from "../data/PortfolioContent";
import "../styles/navbar.css";

const linkVariants = {
  hidden: { opacity: 0, y: -18 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.45 + i * 0.08,
      type: "spring",
      stiffness: 130,
      damping: 16,
    },
  }),
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.06,
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  }),
};

export default function Navbar() {
  const { navbar } = PortfolioContent;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuLinks = navbar.links.filter((link) => link.href !== "#contact");
  const sectionIds = useMemo(
    () => ["home", ...menuLinks.map((link) => link.href.replace("#", ""))],
    [menuLinks],
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = sectionIds
      .map((id) => {
        const element = document.getElementById(id);
        if (!element) return null;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActiveSection(id);
          },
          { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
        );

        observer.observe(element);
        return observer;
      })
      .filter(Boolean);

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sectionIds]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const isLinkActive = (href) => activeSection === href.replace("#", "");

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <motion.nav
        className={`navbar ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="nav-container">
          <motion.div
            className="nav-brand"
            onClick={() => scrollToSection("#home")}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="brand-glow" />
            <span className="brand-dot" />
            <span className="brand-text">{navbar.brand}</span>
          </motion.div>

          <ul className={`nav-links ${open ? "open" : ""}`}>
            {menuLinks.map((link, i) => (
              <motion.li
                key={`${link.label}-${open ? "open" : "closed"}`}
                custom={i}
                variants={open ? mobileLinkVariants : linkVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.a
                  href={link.href}
                  className={isLinkActive(link.href) ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <span className="nav-link-text">{link.label}</span>
                  <span className="link-underline" />
                  <span className="link-glow" aria-hidden="true" />
                </motion.a>
              </motion.li>
            ))}
            <li className="mobile-cta">
              <motion.button
                type="button"
                className="mobile-cta-btn"
                onClick={() => scrollToSection("#contact")}
                initial={{ opacity: 0, y: 12 }}
                animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ delay: open ? menuLinks.length * 0.06 : 0 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="btn-text">{navbar.cta}</span>
                <span className="btn-shimmer" />
              </motion.button>
            </li>
          </ul>

          <motion.button
            type="button"
            className="nav-cta"
            onClick={() => scrollToSection("#contact")}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.85, duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="btn-text">{navbar.cta}</span>
            <span className="btn-shimmer" />
          </motion.button>

          <motion.button
            type="button"
            className={`burger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            whileTap={{ scale: 0.9 }}
          >
            <span />
            <span />
          </motion.button>
        </div>
      </motion.nav>
    </>
  );
}

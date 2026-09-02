import { useEffect } from "react";
import { motion } from "framer-motion";
import PortfolioContent from "../data/PortfolioContent";
import "../styles/Splash.css";

const HOLD_MS = 1600;
const ease = [0.16, 1, 0.3, 1];

export default function Splash({ onFinish }) {
  const { name, title } = PortfolioContent.hero;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(onFinish, HOLD_MS);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onFinish]);

  useEffect(() => {
    const skip = (event) => {
      if (event.key === "Enter" || event.key === "Escape" || event.key === " ") {
        onFinish();
      }
    };
    window.addEventListener("keydown", skip);
    return () => window.removeEventListener("keydown", skip);
  }, [onFinish]);

  return (
    <motion.div
      className="splash"
      onClick={onFinish}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
    >
      <motion.div
        className="splash-glow"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease }}
      />

      <div className="splash-content">
        <motion.h1
          className="splash-name"
          initial={{ opacity: 0, y: 10, letterSpacing: "0.16em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.1em" }}
          transition={{ duration: 0.55, ease }}
        >
          {name}
        </motion.h1>

        <motion.div
          className="splash-line"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.18, ease }}
        />

        <motion.div
          className="splash-meta"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.38, ease }}
        >
          <span>{title}</span>
          <span className="splash-meta-dot" aria-hidden="true" />
          <span>Dhaka, Bangladesh</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

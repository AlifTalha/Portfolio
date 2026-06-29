import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import PortfolioContent from "../data/PortfolioContent";
import "../styles/TechMarquee.css";

function getAllTechnologies() {
  const { skills } = PortfolioContent;
  const names = Object.values(skills.skills)
    .flat()
    .map((skill) => skill.name);
  return [...new Set(names)];
}

export default function TechMarquee() {
  const technologies = getAllTechnologies();
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);
  const speed = useRef(0.6);

  useAnimationFrame((_, delta) => {
    if (isPaused || !trackRef.current) return;

    const halfWidth = trackRef.current.scrollWidth / 2;
    if (halfWidth <= 0) return;

    let next = x.get() - speed.current * (delta / 16);
    if (next <= -halfWidth) {
      next += halfWidth;
    }
    x.set(next);
  });

  const renderTags = (group) =>
    technologies.map((tech, index) => (
      <motion.span
        key={`${group}-${tech}-${index}`}
        className="tech-marquee-tag"
        whileHover={{
          scale: 1.08,
          y: -3,
          borderColor: "rgba(186, 128, 255, 0.45)",
          backgroundColor: "rgba(186, 128, 255, 0.12)",
          boxShadow: "0 4px 20px rgba(186, 128, 255, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <span className="tech-marquee-dot" />
        {tech}
      </motion.span>
    ));

  return (
    <motion.section
      className="tech-marquee"
      aria-label="Technologies"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="tech-marquee-glow" aria-hidden="true" />
      <div className="tech-marquee-fade tech-marquee-fade-left" />
      <div className="tech-marquee-fade tech-marquee-fade-right" />

      <div
        className="tech-marquee-viewport"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div ref={trackRef} className="tech-marquee-track" style={{ x }}>
          {[0, 1].map((group) => (
            <div
              key={group}
              className="tech-marquee-group"
              aria-hidden={group === 1 ? true : undefined}
            >
              {renderTags(group)}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

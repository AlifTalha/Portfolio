import { motion } from "framer-motion";
import PortfolioContent from "../data/PortfolioContent";
import "../styles/Experience.css";

const CalendarIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const LocationIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const getInitials = (company) =>
  company
    .split(" ")
    .filter((word) => word.length > 2 && word !== "Limited")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase() || company[0];

export default function Experience() {
  const { experience } = PortfolioContent;

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="experience-header"
        >
          <span className="section-tag">{experience.tag}</span>
          <h2 className="section-title">
            {experience.title}{" "}
            <span className="highlight">{experience.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{experience.description}</p>
        </motion.div>

        <motion.div
          className="experience-summary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {experience.summary.map((stat, index) => (
            <div key={index} className="experience-summary-item">
              <span className="experience-summary-number">{stat.number}</span>
              <span className="experience-summary-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="experience-timeline">
          <div className="experience-track" aria-hidden="true" />

          {experience.items.map((job, index) => (
            <motion.article
              key={job.id}
              className="experience-item"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className="experience-marker">
                <span
                  className={`experience-dot ${job.current ? "current" : ""}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div
                className={`experience-card ${job.current ? "current" : ""}`}
              >
                <span className="experience-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="experience-card-top">
                  <div className="experience-avatar" aria-hidden="true">
                    {getInitials(job.company)}
                  </div>

                  <div className="experience-title-block">
                    <div className="experience-title-row">
                      <h3 className="experience-role">{job.role}</h3>
                      {job.current && (
                        <span className="experience-badge">
                          <span className="experience-badge-dot" />
                          Current
                        </span>
                      )}
                    </div>
                    <p className="experience-company">{job.company}</p>
                  </div>
                </div>

                <div className="experience-meta-row">
                  <span className="experience-meta-chip">
                    <CalendarIcon />
                    {job.period}
                  </span>
                  <span className="experience-meta-chip">
                    <LocationIcon />
                    {job.location}
                  </span>
                </div>

                <div className="experience-divider" />

                <div className="experience-body">
                  <h4 className="experience-section-label">
                    Key Responsibilities
                  </h4>
                  <ul className="experience-highlights">
                    {job.highlights.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: 0.05 * i }}
                        viewport={{ once: true }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="experience-card-footer">
                  <span className="experience-footer-label">Technologies</span>
                  <div className="experience-tags">
                    {job.tags.map((tag, i) => (
                      <span key={i} className="experience-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

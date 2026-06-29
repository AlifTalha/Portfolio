import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import PortfolioContent from "../data/PortfolioContent";
import "../styles/Skills.css";

const SKILLS_PER_PAGE = 6;

function SkillRow({ skill, index }) {
  const circumference = 2 * Math.PI * 18;

  return (
    <motion.div
      className="skill-row"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ x: 6 }}
    >
      <div className="skill-row-icon-wrap">
        <img
          src={skill.icon}
          alt={skill.name}
          className="skill-card-icon"
          width="28"
          height="28"
        />
      </div>

      <div className="skill-row-body">
        <div className="skill-row-top">
          <h3 className="skill-row-name">{skill.name}</h3>
          <p className="skill-row-desc">{skill.description}</p>
        </div>
        <div className="skill-row-bar">
          <motion.div
            className="skill-row-bar-fill"
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 0.9, delay: 0.1 + index * 0.05 }}
          />
        </div>
      </div>

      <div className="skill-row-ring">
        <svg viewBox="0 0 44 44" className="skill-ring-svg">
          <circle
            className="skill-ring-bg"
            cx="22"
            cy="22"
            r="18"
            fill="none"
            strokeWidth="3"
          />
          <motion.circle
            className="skill-ring-fill"
            cx="22"
            cy="22"
            r="18"
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{
              strokeDashoffset:
                circumference - (skill.level / 100) * circumference,
            }}
            transition={{ duration: 1.1, delay: 0.1 + index * 0.05 }}
            transform="rotate(-90 22 22)"
          />
        </svg>
        <span className="skill-ring-label">{skill.level}%</span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { skills } = PortfolioContent;
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const allSkills = useMemo(
    () => Object.values(skills.skills).flat(),
    [skills.skills],
  );

  const categorySkills = useMemo(() => {
    if (activeCategory === "all") return allSkills;
    return skills.skills[activeCategory] || [];
  }, [activeCategory, allSkills, skills.skills]);

  const isAllSkills = activeCategory === "all";
  const totalPages = Math.ceil(allSkills.length / SKILLS_PER_PAGE);

  const displayedSkills = useMemo(() => {
    if (!isAllSkills) return categorySkills;

    const start = (currentPage - 1) * SKILLS_PER_PAGE;
    return allSkills.slice(start, start + SKILLS_PER_PAGE);
  }, [isAllSkills, categorySkills, allSkills, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="skills-page" id="skills">
      <div className="skills-page-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="skills-page-header"
        >
          <span className="section-tag">{skills.tag}</span>
          <h2 className="section-title">
            {skills.title}{" "}
            <span className="highlight">{skills.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{skills.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="skills-categories"
        >
          {skills.categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`category-btn ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="skills-layout skills-layout-all">
          <div className="skills-group">
            <AnimatePresence mode="wait">
              <motion.div
                key={isAllSkills ? `all-${currentPage}` : activeCategory}
                className="skills-group-list"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {displayedSkills.map((skill, index) => (
                  <SkillRow key={skill.name} skill={skill} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {isAllSkills && totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="skills-pagination-bottom"
          >
            <p className="skills-page-info">
              Showing {(currentPage - 1) * SKILLS_PER_PAGE + 1}–
              {Math.min(currentPage * SKILLS_PER_PAGE, allSkills.length)} of{" "}
              {allSkills.length} skills
            </p>

            <div className="skills-pagination">
              <button
                type="button"
                className="pagination-btn pagination-arrow"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                ←
              </button>

              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    type="button"
                    className={`pagination-btn ${currentPage === page ? "active" : ""}`}
                    onClick={() => goToPage(page)}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                type="button"
                className="pagination-btn pagination-arrow"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                →
              </button>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="skills-summary"
        >
          {skills.summary.map((item, index) => (
            <div key={index} className="summary-item">
              <span className="summary-number">{item.number}</span>
              <span className="summary-label">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

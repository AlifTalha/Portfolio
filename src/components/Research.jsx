import { motion } from "framer-motion";
import PortfolioContent from "../data/PortfolioContent";
import "../styles/Research.css";

const ExternalLinkIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Research() {
  const { research } = PortfolioContent;

  return (
    <section className="research" id="research">
      <div className="research-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="research-header"
        >
          <span className="section-tag">{research.tag}</span>
          <h2 className="section-title">
            {research.title}{" "}
            <span className="highlight">{research.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{research.description}</p>
        </motion.div>

        <div className="research-grid">
          {research.items.map((paper, index) => (
            <motion.article
              key={paper.id}
              className="research-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className="research-card-layout">
                {paper.imageUrl && (
                  <div className="research-image-panel">
                    <motion.div
                      className="research-image-wrap"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={paper.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="research-image-link"
                        aria-label={`View IEEE publication: ${paper.title}`}
                      >
                        <div className="research-image-frame">
                          <img
                            src={paper.imageUrl}
                            alt="IEEE Certificate of Presentation for WristNet"
                            className="research-image"
                            loading="lazy"
                          />
                        </div>
                        <span className="research-image-overlay">
                          View on IEEE Xplore
                          <ExternalLinkIcon />
                        </span>
                      </a>
                      <p className="research-image-caption">
                        Certificate of Presentation
                      </p>
                      <p className="research-image-subcaption">
                        QPAIN 2026 · IEEE
                      </p>
                    </motion.div>
                  </div>
                )}

                <div className="research-content">
                  <div className="research-content-main">
                    <div className="research-badges">
                      <span className="research-badge research-badge-ieee">
                        IEEE
                      </span>
                      <span className="research-badge">{paper.year}</span>
                      {paper.paperId && (
                        <span className="research-badge">
                          ID {paper.paperId}
                        </span>
                      )}
                    </div>

                    <h3 className="research-title">{paper.title}</h3>

                    <div className="research-meta-box">
                      <p className="research-venue">{paper.venue}</p>
                      {paper.location && (
                        <p className="research-location">{paper.location}</p>
                      )}
                    </div>

                    <div className="research-body">
                      <h4 className="research-label">Key Contributions</h4>
                      <ul className="research-highlights">
                        {paper.highlights.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="research-tags">
                      {paper.tags.map((tag, i) => (
                        <span key={i} className="research-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {paper.linkUrl && (
                    <a
                      href={paper.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="research-link"
                    >
                      View on IEEE Xplore
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

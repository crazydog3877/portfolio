import { useParams, Link } from 'react-router-dom';
import projectData from '../data/projects';

const projectList = Object.entries(projectData).map(([id, data]) => ({ id, ...data }));

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];
  const currentIndex = projectList.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projectList[currentIndex - 1] : null;
  const nextProject = currentIndex < projectList.length - 1 ? projectList[currentIndex + 1] : null;

  if (!project) {
    return (
      <div className="detail-not-found">
        <h2>项目未找到</h2>
        <Link to="/">返回首页</Link>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <Link to="/#projects" className="detail-back">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        返回项目列表
      </Link>

      <article className="detail-article">
        {/* Header */}
        <header className="detail-header">
          <span className="section-label">{project.tag}</span>
          <h1 className="detail-title">{project.title}</h1>
          <div className="detail-meta-row">
            <span className="detail-meta-item">{project.role}</span>
            <span className="detail-meta-divider" />
            <span className="detail-meta-item">{project.date}</span>
          </div>
          <p className="detail-overview">{project.overview}</p>
          <div className="detail-tags">
            {project.meta.map((m) => (
              <span key={m} className="detail-tag">{m}</span>
            ))}
          </div>
        </header>

        {/* Content sections */}
        {project.sections.map((section, i) => (
          <section key={i} className="detail-section">
            <h2 className="detail-section-heading">{section.heading}</h2>
            <p className="detail-section-text">{section.content}</p>
          </section>
        ))}

        {/* Image gallery — placeholder */}
        <section className="detail-section">
          <h2 className="detail-section-heading">界面展示</h2>
          <div className="detail-gallery">
            <div className="detail-gallery-item">
              <div className="detail-gallery-placeholder">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21,15 16,10 5,21"/>
                </svg>
                <span>待上传截图</span>
              </div>
            </div>
            <div className="detail-gallery-item">
              <div className="detail-gallery-placeholder">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21,15 16,10 5,21"/>
                </svg>
                <span>待上传截图</span>
              </div>
            </div>
          </div>
        </section>

        {/* Prev / Next navigation */}
        <nav className="detail-prevnext">
          {prevProject ? (
            <Link to={`/project/${prevProject.id}`} className="detail-pn-card prev">
              <span className="detail-pn-label">← 上一个项目</span>
              <span className="detail-pn-title">{prevProject.title}</span>
              <span className="detail-pn-tag">{prevProject.tag}</span>
            </Link>
          ) : (
            <div className="detail-pn-card empty" />
          )}

          {nextProject ? (
            <Link to={`/project/${nextProject.id}`} className="detail-pn-card next">
              <span className="detail-pn-label">下一个项目 →</span>
              <span className="detail-pn-title">{nextProject.title}</span>
              <span className="detail-pn-tag">{nextProject.tag}</span>
            </Link>
          ) : (
            <div className="detail-pn-card empty" />
          )}
        </nav>
      </article>
    </div>
  );
}

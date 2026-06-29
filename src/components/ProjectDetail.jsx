import { useParams, Link } from 'react-router-dom';
import projectData from '../data/projects';

const basePath = import.meta.env.BASE_URL || '/';

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

        {/* Images — full width */}
        {project.images && project.images.length > 0 && (
          <div className="detail-images">
            {project.images.map((img, i) => (
              <div key={i} className="detail-image-item">
                <img src={basePath + img.replace(/^\//, '')} alt={`${project.title} — ${i + 1}`} />
              </div>
            ))}
          </div>
        )}

        {/* Prev / Next navigation */}
        <nav className="detail-prevnext">
          {prevProject ? (
            <Link to={`/project/${prevProject.id}`} className="detail-pn-card prev">
              <div className={`detail-pn-thumb thumb-${prevProject.thumb}`}>
                <span className="detail-pn-thumb-label">{prevProject.title.split('—')[0].trim()}</span>
              </div>
              <div className="detail-pn-info">
                <span className="detail-pn-label">← 上一个项目</span>
                <span className="detail-pn-title">{prevProject.title}</span>
                <span className="detail-pn-tag">{prevProject.tag}</span>
              </div>
            </Link>
          ) : (
            <div className="detail-pn-card empty" />
          )}

          {nextProject ? (
            <Link to={`/project/${nextProject.id}`} className="detail-pn-card next">
              <div className={`detail-pn-thumb thumb-${nextProject.thumb}`}>
                <span className="detail-pn-thumb-label">{nextProject.title.split('—')[0].trim()}</span>
              </div>
              <div className="detail-pn-info">
                <span className="detail-pn-label">下一个项目 →</span>
                <span className="detail-pn-title">{nextProject.title}</span>
                <span className="detail-pn-tag">{nextProject.tag}</span>
              </div>
            </Link>
          ) : (
            <div className="detail-pn-card empty" />
          )}
        </nav>
      </article>
    </div>
  );
}

import { useParams, Link } from 'react-router-dom';
import projectData from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];

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

        {/* Cover image placeholder */}
        <div className="detail-cover">
          <div className="detail-cover-placeholder">
            <span>{project.title.split('—')[0].trim()}</span>
            <p>项目截图 / 封面图</p>
          </div>
        </div>

        {/* Content sections */}
        {project.sections.map((section, i) => (
          <section key={i} className="detail-section">
            <h2 className="detail-section-heading">{section.heading}</h2>
            <p className="detail-section-text">{section.content}</p>
          </section>
        ))}

        {/* Image gallery area */}
        <section className="detail-section">
          <h2 className="detail-section-heading">界面展示</h2>
          <div className="detail-gallery">
            <div className="detail-gallery-item">
              <div className="detail-gallery-placeholder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21,15 16,10 5,21"/>
                </svg>
                <span>拖放或点击上传界面截图</span>
              </div>
            </div>
            <div className="detail-gallery-item">
              <div className="detail-gallery-placeholder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21,15 16,10 5,21"/>
                </svg>
                <span>拖放或点击上传界面截图</span>
              </div>
            </div>
          </div>
        </section>

        {/* Video area */}
        <section className="detail-section">
          <h2 className="detail-section-heading">演示视频</h2>
          <div className="detail-video">
            <div className="detail-video-placeholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                <polygon points="5,3 19,12 5,21" fill="currentColor" opacity="0.3"/>
              </svg>
              <span>粘贴视频链接或嵌入代码</span>
              <p className="detail-video-hint">支持 YouTube / Bilibili / 本地视频</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

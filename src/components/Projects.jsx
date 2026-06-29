import { Link } from 'react-router-dom';
import projectData from '../data/projects';

const projects = Object.entries(projectData).map(([id, data]) => ({
  id,
  name: data.title,
  tag: data.tag,
  desc: data.overview.split('。')[0] + '。',
  meta: data.meta,
  cover: data.images && data.images.length > 0 ? data.images[0] : null,
  status: data.status || '已上线',
}));

function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`} className="project-card">
      <div className="project-image">
        <div className="project-image-inner">
          {project.cover ? (
            <img src={project.cover} alt={project.name} className="project-cover-img" />
          ) : (
            <>
              <div className="project-image-accent gold" />
              <span className="project-image-label">{project.name.split('—')[0].trim()}</span>
            </>
          )}
        </div>
        {project.status && (
          <span className={`project-status ${project.status === 'REDESIGN' ? 'online' : 'offline'}`}>
            {project.status}
          </span>
        )}
      </div>
      <div className="project-info">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-meta">
          {project.meta.map((m) => (
            <span key={m} className="project-meta-item">{m}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <section className="projects grid-bg" id="projects">
      <div className="container">
        <div className="projects-header">
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">精选项目</h2>
          <p className="section-subtitle">
            聚焦金融科技领域，为量化交易与专业投资者打造高效、精准、优雅的产品体验。
          </p>
        </div>

        <div className="projects-grid stagger">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

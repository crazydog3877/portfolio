import { Link } from 'react-router-dom';
import SpotlightCard from './SpotlightCard';

const projects = [
  {
    id: 'haitong',
    name: '海通证券 — e海方舟',
    tag: '量化交易平台',
    desc: '为量化交易客户量身定制的专业平台，集行情显示、策略研究、策略编写、策略执行、极速交易、合规风控于一体。负责从用户研究到UI规范制定的全链路设计。',
    meta: ['PC端', '金融科技', '2023-至今'],
    accent: 'gold',
  },
  {
    id: 'smt',
    name: '兴业证券 SMT-Q V5.0',
    tag: '策略交易终端',
    desc: '集行情数据、投资研究、策略编写、极速交易、智能算法于一体的专业策略交易平台，为私募管理人及高净值客户量身定制。',
    meta: ['PC端', '金融科技', '2022-至今'],
    accent: 'cyan',
  },
  {
    id: 'hualong',
    name: '华龙点金智慧版',
    tag: '移动 & PC 双端',
    desc: '负责整体视觉设计，确保移动端与PC端视觉一致性。优化港股通、基金定投、华龙理财等核心功能界面，提升用户体验。',
    meta: ['移动端', 'PC端', '2021-至今'],
    accent: 'gold',
  },
  {
    id: 'haotian',
    name: '皓天智通企业官网',
    tag: '企业展示网站',
    desc: '企业展示型网站设计，包含PC端和移动端。从交互界面到网页视觉的整体美术设计，配合前后端完成项目落地。',
    meta: ['Web', '移动端', '2019'],
    accent: 'cyan',
  },
];

function ProjectCard({ project }) {
  return (
    <SpotlightCard className="project-card-wrapper" spotlightColor="rgba(255, 112, 35, 0.12)">
    <Link to={`/project/${project.id}`} className="project-card">
      <div className="project-image">
        <div className="project-image-inner">
          <div className={`project-image-accent ${project.accent}`} />
          <span className="project-image-label">{project.name.split('—')[0].trim()}</span>
        </div>
      </div>
      <div className="project-info">
        <span className="project-tag">{project.tag}</span>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-meta">
          {project.meta.map((m) => (
            <span key={m} className="project-meta-item">{m}</span>
          ))}
        </div>
      </div>
    </Link>
    </SpotlightCard>
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

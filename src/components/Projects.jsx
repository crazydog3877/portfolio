import CircularGallery from './CircularGallery';

const galleryItems = [
  { image: 'https://picsum.photos/seed/trading/800/600', text: '海通证券 — e海方舟' },
  { image: 'https://picsum.photos/seed/finance/800/600', text: '兴业证券 SMT-Q V5.0' },
  { image: 'https://picsum.photos/seed/app/800/600', text: '华龙点金智慧版' },
  { image: 'https://picsum.photos/seed/website/800/600', text: '皓天智通企业官网' },
  { image: 'https://picsum.photos/seed/dashboard/800/600', text: '海通证券 — e海方舟' },
  { image: 'https://picsum.photos/seed/chart/800/600', text: '兴业证券 SMT-Q V5.0' },
  { image: 'https://picsum.photos/seed/mobile/800/600', text: '华龙点金智慧版' },
  { image: 'https://picsum.photos/seed/brand/800/600', text: '皓天智通企业官网' },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">精选项目</h2>
          <p className="section-subtitle">
            聚焦金融科技领域，为量化交易与专业投资者打造高效、精准、优雅的产品体验。
          </p>
        </div>
      </div>

      <div className="projects-carousel">
        <CircularGallery
          items={galleryItems}
          bend={1.5}
          textColor="#FF7023"
          borderRadius={0.08}
          scrollSpeed={2.5}
          scrollEase={0.06}
          font="bold 20px Inter"
        />
      </div>
    </section>
  );
}

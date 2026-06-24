import Aurora from './Aurora';
import CircularGallery from './CircularGallery';

const galleryItems = [
  { image: 'https://picsum.photos/seed/trading/800/600', text: '' },
  { image: 'https://picsum.photos/seed/finance/800/600', text: '' },
  { image: 'https://picsum.photos/seed/app/800/600', text: '' },
  { image: 'https://picsum.photos/seed/website/800/600', text: '' },
  { image: 'https://picsum.photos/seed/dashboard/800/600', text: '' },
  { image: 'https://picsum.photos/seed/chart/800/600', text: '' },
  { image: 'https://picsum.photos/seed/mobile/800/600', text: '' },
  { image: 'https://picsum.photos/seed/brand/800/600', text: '' },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <Aurora
        colorStops={['#7C3AED', '#FF7023', '#06B6D4']}
        blend={0.3}
        amplitude={1.8}
        speed={0.8}
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-eyebrow">Visual · AI · Brand · UI</p>
        <h1 className="hero-title">
          以设计驱动
          <br />
          <em>数字体验</em>
        </h1>
        <p className="hero-subtitle">
          7年UI设计经验，专注金融科技与量化交易领域。
          从0到1打造专业策略交易平台，让复杂数据变得优雅可视。
        </p>
        <div className="hero-actions">
          <a href="#about" className="btn-primary">
            了解更多
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn-ghost">
            联系我
          </a>
        </div>
      </div>

      <div className="hero-gallery">
        <CircularGallery
          items={galleryItems}
          bend={1.5}
          textColor="#FF7023"
          borderRadius={0.08}
          scrollSpeed={2.5}
          scrollEase={0.06}
          font="bold 18px Inter"
        />
      </div>
    </section>
  );
}

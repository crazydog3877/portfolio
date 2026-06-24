import Aurora from './Aurora';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <Aurora
        colorStops={['#6c3cff', '#e8b860', '#00d4aa']}
        blend={1.0}
        amplitude={2.0}
        speed={0.3}
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
          <a href="#projects" className="btn-primary">
            查看作品
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn-ghost">
            联系我
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}

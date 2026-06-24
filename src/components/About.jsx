import TiltedCard from './TiltedCard';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <span className="section-label">About</span>
        <div className="about-grid stagger">
          {/* Visual side — 3D tilted card */}
          <div className="about-visual">
            <div className="about-tilt-wrapper">
              <TiltedCard
                imageSrc="/avatar.png"
                altText="沈震霄"
                captionText="沈震霄 — Designer"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={true}
              />
            </div>
          </div>

          {/* Info side */}
          <div className="about-info">
            <h2 className="about-name">
              沈震霄<span>.</span>
            </h2>
            <p className="about-bio">
              拥有近5年APP、PC端UI设计经验，扎实的专业功底与敏锐的设计洞察力。
              擅长从用户研究出发，输出交互原型、视觉设计、动效与组件化规范。
              熟练驾驭Figma、Sketch、Adobe系列等设计协同工具，
              具备从0到1的完整项目经验。曾在解放军陆军某部服役，负责短片制作并荣获战区一等奖。
            </p>

            <div className="about-contact-row">
              <div className="about-contact-item">
                <div className="about-contact-icon">✉</div>
                <span>shenzhen_3877@qq.com</span>
              </div>
              <div className="about-contact-item">
                <div className="about-contact-icon">☎</div>
                <span>185-7148-7848</span>
              </div>
              <div className="about-contact-item">
                <div className="about-contact-icon">⌂</div>
                <span>武汉</span>
              </div>
            </div>

            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-value">7+</div>
                <div className="about-stat-label">年经验</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">4+</div>
                <div className="about-stat-label">大型项目</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">0→1</div>
                <div className="about-stat-label">全流程</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import SpotlightCard from './SpotlightCard';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-bg" />
      <div className="contact-grid-lines" />

      <div className="container">
        <div className="contact-split">
          {/* Left — bold headline */}
          <div className="contact-left">
            <span className="section-label">联系方式</span>
            <h2 className="contact-headline">
              LET'S BUILD
              <br />
              BETTER VISUAL
              <br />
              SYSTEMS
              <span className="contact-headline-arrow">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M36 12v24H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M36 36L10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </h2>
          </div>

          {/* Right — contact card */}
          <div className="contact-right">
            <SpotlightCard className="contact-card" spotlightColor="rgba(255, 112, 35, 0.25)">
              <span className="contact-card-label">CONTACT</span>

              <div className="contact-card-items">
                <div className="contact-card-item">
                  <i className="ri-smartphone-line contact-card-icon" />
                  <span className="contact-card-key">手机</span>
                  <span className="contact-card-val">185-7148-7848</span>
                </div>
                <div className="contact-card-item">
                  <i className="ri-wechat-line contact-card-icon" />
                  <span className="contact-card-key">微信</span>
                  <span className="contact-card-val">shenzhen_3877</span>
                </div>
                <div className="contact-card-item">
                  <i className="ri-mail-line contact-card-icon" />
                  <span className="contact-card-key">邮箱</span>
                  <span className="contact-card-val">shenzhen_3877@qq.com</span>
                </div>
              </div>

              <p className="contact-card-sub">Visual, Brand & AI Design</p>

              <div className="contact-qr-wrap">
                <div className="contact-qr-code">
                  <img src="/qrcode.png" alt="微信二维码" className="contact-qr-img" />
                </div>
                <p className="contact-qr-label">扫一扫添加微信</p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        © 2026 沈震霄 — Designed with precision
      </div>
    </section>
  );
}

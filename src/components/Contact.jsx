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
            <div className="contact-card">
              <span className="contact-card-label">CONTACT</span>

              <div className="contact-card-items">
                <div className="contact-card-item">
                  <span className="contact-card-key">手机</span>
                  <span className="contact-card-val">185-7148-7848</span>
                </div>
                <div className="contact-card-item">
                  <span className="contact-card-key">微信</span>
                  <span className="contact-card-val">shenzhen_3877</span>
                </div>
                <div className="contact-card-item">
                  <span className="contact-card-key">邮箱</span>
                  <span className="contact-card-val">shenzhen_3877@qq.com</span>
                </div>
              </div>

              <p className="contact-card-sub">Visual, Brand & AI Design</p>

              <div className="contact-qr-wrap">
                <div className="contact-qr-code">
                  <div className="contact-qr-placeholder">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                      <rect x="14" y="14" width="3" height="3" />
                      <rect x="18" y="14" width="3" height="3" />
                      <rect x="14" y="18" width="3" height="3" />
                      <rect x="18" y="18" width="3" height="3" />
                    </svg>
                  </div>
                </div>
                <p className="contact-qr-label">WeChat · 微信扫码</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        © 2026 沈震霄 — Designed with precision
      </div>
    </section>
  );
}

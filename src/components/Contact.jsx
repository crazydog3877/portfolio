export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-bg" />
      <div className="contact-grid-lines" />

      <div className="container">
        <div className="contact-split">
          {/* Left — text + links */}
          <div className="contact-left">
            <span className="section-label">Contact</span>
            <h2 className="contact-headline">
              让设计
              <br />
              <em>创造价值</em>
            </h2>
            <p className="contact-subtitle">
              如果你正在寻找一位能将复杂金融逻辑转化为优雅界面的设计师，
              欢迎与我联系 —— 期待与你一起打造卓越的数字产品。
            </p>

            <div className="contact-links">
              <a href="mailto:shenzhen_3877@qq.com" className="contact-link">
                <span className="contact-link-icon">✉</span>
                shenzhen_3877@qq.com
              </a>
              <a href="tel:18571487848" className="contact-link">
                <span className="contact-link-icon">☎</span>
                185-7148-7848
              </a>
            </div>

            <a href="mailto:shenzhen_3877@qq.com" className="btn-primary">
              开始合作
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right — QR code */}
          <div className="contact-right">
            <div className="contact-qr">
              <div className="contact-qr-code">
                <div className="contact-qr-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                    <rect x="14" y="14" width="3" height="3" />
                    <rect x="18" y="14" width="3" height="3" />
                    <rect x="14" y="18" width="3" height="3" />
                    <rect x="18" y="18" width="3" height="3" />
                  </svg>
                  <span>微信扫码添加</span>
                </div>
              </div>
              <p className="contact-qr-label">WeChat · 微信</p>
              <p className="contact-qr-hint">扫描二维码添加好友</p>
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

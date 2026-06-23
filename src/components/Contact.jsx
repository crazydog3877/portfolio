export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-bg" />
      <div className="contact-grid-lines" />

      <div className="contact-content">
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

      <div className="contact-footer">
        © 2026 沈震霄 — Designed with precision
      </div>
    </section>
  );
}

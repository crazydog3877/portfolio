import { useRef, useEffect } from 'react';
import TiltedCard from './TiltedCard';

const experiences = [
  {
    period: '2021.09 - 至今',
    company: '武汉优品楚鼎科技有限公司',
    role: 'UI 设计师',
    points: [
      '负责产品视觉信息传达与视觉语言定义，含视觉、动效、交互等多样化设计输出',
      '参与兴业证券 SMT-Q、华龙 App、华安综合 App、量化终端 PC 及券商投顾模块设计',
      '协同开发跟进，保证项目最终上线效果',
    ],
    highlight: true,
  },
  {
    period: '2019.06 - 2021.09',
    company: '武汉网盾科技有限公司',
    role: 'UI 设计师',
    points: [
      '负责产品界面整体美术风格与界面结构设计',
      '参与产品视觉、动效、流程优化工作',
      '负责公众号运营、网站整体架构与 UI 设计、宣传册与平面设计',
    ],
  },
  {
    period: '2017.12 - 2019.05',
    company: '武汉东湖高新区管委会',
    role: '安全员',
    points: [
      '负责高新区各类生产经营单位、公共场所的安全监督检查',
      '组织安全培训与教育活动，参与制定应急预案并定期组织演练',
    ],
  },
  {
    period: '2015.09 - 2017.09',
    company: '中国人民解放军陆军某部',
    role: '反坦克火箭射手 / 短片制作',
    points: [
      '承担反坦克火箭射手及步枪手职责，全身心投入日常军事训练',
      '参与解放军某活动短片制作，作品荣获战区一等奖，获优秀义务兵称号',
    ],
  },
  {
    period: '2011 - 2015',
    company: '湖北美术学院',
    role: '纤维艺术设计 · 本科',
    points: [
      '曾担任班长、学生会副主席，获优秀学生干部',
      '扎实的造型功底与审美素养，为设计生涯奠定基础',
    ],
    isEducation: true,
  },
];

export default function About() {
  const scrollRef = useRef(null);
  const dragRef = useRef({ down: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    const onDown = (e) => {
      dragRef.current = { down: true, startX: e.pageX, scrollLeft: el.scrollLeft };
      el.style.cursor = 'grabbing';
    };
    const onUp = () => {
      dragRef.current.down = false;
      el.style.cursor = 'grab';
    };
    const onMove = (e) => {
      if (!dragRef.current.down) return;
      e.preventDefault();
      el.scrollLeft = dragRef.current.scrollLeft - (e.pageX - dragRef.current.startX);
    };

    el.style.cursor = 'grab';
    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('mousedown', onDown);
    el.addEventListener('mouseup', onUp);
    el.addEventListener('mouseleave', onUp);
    el.addEventListener('mousemove', onMove);

    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('mousedown', onDown);
      el.removeEventListener('mouseup', onUp);
      el.removeEventListener('mouseleave', onUp);
      el.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <span className="section-label">About</span>
        <h2 className="section-title">关于我</h2>

        {/* Profile grid */}
        <div className="about-grid stagger">
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

        {/* Career timeline — inside About */}
        <div className="about-career">
          <div className="about-career-header">
            <span className="about-career-icon">+</span>
            <span className="about-career-label">Career Path</span>
            <h3 className="about-career-title">工作经历</h3>
          </div>

          <div className="about-career-body">
            <div className="about-career-line" />
            <div className="about-career-scroll" ref={scrollRef}>
              <div className="about-career-entries">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className={`about-career-entry ${exp.highlight ? 'highlight' : ''} ${exp.isEducation ? 'education' : ''}`}
                  style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                >
                  <span className="about-career-date">{exp.period}</span>
                  <div className="about-career-marker" />
                  <div className="about-career-content">
                    <h4 className="about-career-company">{exp.company}</h4>
                    <span className="about-career-role">{exp.role}</span>
                    <ul className="about-career-points">
                      {exp.points.map((p, j) => (
                        <li key={j}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

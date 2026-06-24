const experiences = [
  {
    period: '2021.09 - 至今',
    company: '武汉优品楚鼎科技有限公司',
    role: 'UI 设计师',
    desc: '负责产品视觉信息传达与视觉语言定义，含视觉、动效、交互等多样化设计输出。参与兴业证券 SMT-Q、华龙 App、华安综合 App、量化终端 PC 及券商投顾模块设计支持。协同开发跟进，保证项目最终上线效果。',
    highlight: true,
  },
  {
    period: '2019.06 - 2021.09',
    company: '武汉网盾科技有限公司',
    role: 'UI 设计师',
    desc: '负责产品界面整体美术风格与界面结构设计。界面切图与协同开发，参与产品视觉、动效、流程优化。负责公众号运营、网站整体架构与 UI 设计、宣传册与平面设计。',
  },
  {
    period: '2017.12 - 2019.05',
    company: '武汉东湖高新区管委会',
    role: '安全员',
    desc: '负责高新区内生产经营单位、公共场所的安全监督检查，包括消防、用电、施工安全等。组织安全培训与教育活动，参与制定应急预案并定期组织演练。',
  },
  {
    period: '2015.09 - 2017.09',
    company: '中国人民解放军陆军某部',
    role: '反坦克火箭射手 / 短片制作',
    desc: '承担反坦克火箭射手及步枪手职责，全身心投入日常军事训练。参与解放军某活动短片制作，负责前期策划、拍摄取景及后期剪辑，作品荣获战区一等奖。荣获优秀义务兵称号及奖章。',
  },
  {
    period: '2011 - 2015',
    company: '湖北美术学院',
    role: '纤维艺术设计 · 本科',
    desc: '曾担任班长、学生会副主席，获 2011-2012 年度优秀学生干部。扎实的造型功底与审美素养，为设计生涯奠定基础。',
    isEducation: true,
  },
];

export default function Timeline() {
  return (
    <section className="timeline">
      <div className="container">
        <div className="timeline-header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">工作经历</h2>
          <p className="section-subtitle">
            7年设计生涯，从军旅到金融科技，每一步都沉淀为设计洞察。
          </p>
        </div>
      </div>

      <div className="timeline-track-wrapper">
        <div className="timeline-line" />
        <div className="timeline-track">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`timeline-card ${exp.highlight ? 'highlight' : ''} ${exp.isEducation ? 'education' : ''}`}
            >
              <div className="timeline-dot" />
              <div className="timeline-card-period">{exp.period}</div>
              <div className="timeline-card-role">{exp.role}</div>
              <div className="timeline-card-company">{exp.company}</div>
              <p className="timeline-card-desc">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

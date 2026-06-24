const skills = [
  {
    icon: '◈',
    name: 'UI 视觉设计',
    desc: '精通界面视觉语言定义，色彩搭配与版面布局。注重设计质量与细节，打造统一且富有品牌感的产品界面。',
  },
  {
    icon: '◫',
    name: '交互原型设计',
    desc: '从用户研究出发，输出高保真交互原型。擅长将复杂业务逻辑转化为直观流畅的交互体验。',
  },
  {
    icon: '◎',
    name: '动效设计',
    desc: '通过微交互与过渡动效提升产品质感，让界面响应更具生命力与引导性。',
  },
  {
    icon: '⬡',
    name: '组件化规范',
    desc: '制定并维护设计规范文档，保证多端多页面设计一致性，提升团队协作效率。',
  },
  {
    icon: '◉',
    name: '设计工具',
    desc: '熟练操作 Figma、Sketch、Adobe 系列等设计协同工具，高效完成从创意到交付的全流程。',
  },
  {
    icon: '⬒',
    name: '0→1 全流程',
    desc: '具备从需求分析、方案设计到开发落地的完整项目经验。能与多方高效沟通推进。',
  },
  {
    icon: '▣',
    name: '金融科技专长',
    desc: '深耕量化交易、证券投资领域。理解交易场景与用户需求，设计专业数据密集型界面。',
  },
  {
    icon: '◬',
    name: '跨端适配',
    desc: '同时驾驭 PC 客户端、移动 App、Web 网站等多平台设计，保持视觉语言的一致性。',
  },
  {
    icon: '♢',
    name: '美院背景',
    desc: '湖北美术学院 · 纤维艺术设计本科。扎实的造型功底与审美素养，让设计兼具功能性与艺术感。',
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-header">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">个人优势</h2>
          <p className="section-subtitle">
            扎实的专业功底与敏锐的设计洞察，让每一个像素都有存在的理由。
          </p>
        </div>

        <div className="skills-grid stagger">
          {skills.map((skill, i) => (
            <div key={i} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import BorderGlow from './BorderGlow';

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

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <BorderGlow
              key={i}
              edgeSensitivity={20}
              glowColor="30 100 60"
              backgroundColor="#0f1015"
              borderRadius={12}
              glowRadius={50}
              glowIntensity={1.8}
              coneSpread={30}
              colors={['#FF7023', '#FF8F4D', '#06B6D4']}
              fillOpacity={0.5}
            >
              <div className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-desc">{skill.desc}</p>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}

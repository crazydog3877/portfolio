import BorderGlow from './BorderGlow';

const coreSkills = [
  {
    num: '01',
    label: 'CORE',
    title: 'UI 视觉设计',
    desc: '精通界面视觉语言定义、色彩搭配与版面布局。注重设计质量与细节，打造统一且富有品牌感的产品界面。',
  },
  {
    num: '02',
    label: 'CORE',
    title: '交互与动效设计',
    desc: '从用户研究出发输出高保真交互原型，通过微交互与过渡动效提升产品质感，让复杂业务逻辑转化为直观流畅的体验。',
    featured: true,
    tags: ['交互原型设计', '动效设计', '用户体验优化'],
  },
];

const systemSkills = [
  {
    num: '03',
    label: 'SYSTEM',
    title: '组件化规范',
    desc: '制定并维护设计规范文档，保证多端多页面设计一致性，提升团队协作效率。',
  },
  {
    num: '04',
    label: 'SYSTEM',
    title: '0→1 全流程',
    desc: '具备从需求分析、方案设计到开发落地的完整项目经验，能与多方高效沟通推进。',
  },
  {
    num: '05',
    label: 'SYSTEM',
    title: 'AI 设计提效',
    desc: '善用 AI 工具加速设计流程，从创意生成到批量产出，提升设计效率与创新能力。',
  },
];

function SkillCard({ skill, featured }) {
  return (
    <BorderGlow
      edgeSensitivity={20}
      glowColor="25 100 55"
      backgroundColor="#0f1015"
      borderRadius={14}
      glowRadius={50}
      glowIntensity={1.5}
      coneSpread={30}
      colors={['#FF7023', '#FF8F4D', '#7C3AED']}
      fillOpacity={0.4}
    >
      <div className={`skill-new-card ${featured ? 'featured' : ''}`}>
        <div className="skill-new-header">
          <span className="skill-new-num">{skill.num}</span>
          <span className="skill-new-label">{skill.label}</span>
        </div>
        <h3 className="skill-new-title">
          {skill.title}<span className="skill-new-dot">·</span>
        </h3>
        {skill.tags && (
          <div className="skill-new-tags">
            {skill.tags.map((t, i) => (
              <span key={i} className={`skill-new-tag tag-${i}`}>{t}</span>
            ))}
          </div>
        )}
        <p className="skill-new-desc">{skill.desc}</p>
        <div className="skill-new-graphic">
          <div className="skill-new-sparkle">✦</div>
        </div>
      </div>
    </BorderGlow>
  );
}

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

        {/* CORE row — 2 large cards */}
        <div className="skills-core-row">
          {coreSkills.map((skill) => (
            <SkillCard key={skill.num} skill={skill} featured={skill.featured} />
          ))}
        </div>

        {/* SYSTEM row — 3 smaller cards */}
        <div className="skills-system-row">
          {systemSkills.map((skill) => (
            <SkillCard key={skill.num} skill={skill} />
          ))}
        </div>

        <div className="skills-footer-tag">
          使用 AI 工具解决问题的能力
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';

const navItems = [
  { label: '关于', href: '/#about', id: 'about' },
  { label: '能力', href: '/#skills', id: 'skills' },
  { label: '项目', href: '/#projects', id: 'projects' },
  { label: '联系', href: '/#contact', id: 'contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);

    const onScroll = () => {
      const scrollY = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollY) {
          setActive(navItems[i].id);
          return;
        }
      }
      setActive('');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-pill">
        <a href="/" className="navbar-logo">
          <span>S</span>hen
        </a>

        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={active === item.id ? 'active' : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="/#contact" className="navbar-cta">联系我</a>
      </div>
    </nav>
  );
}

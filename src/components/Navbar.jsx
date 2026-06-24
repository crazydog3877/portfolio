import { useState, useEffect } from 'react';

const navItems = [
  { label: '关于', href: '#about' },
  { label: '能力', href: '#skills' },
  { label: '项目', href: '#projects' },
  { label: '联系', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="navbar-logo">
        <span>S</span>hen
      </a>
      <ul className="navbar-links">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="navbar-cta">联系我</a>
    </nav>
  );
}

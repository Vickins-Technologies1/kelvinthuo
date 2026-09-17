'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type IconName = 'arrow' | 'moon' | 'sun' | 'menu' | 'close' | 'external' | 'github' | 'mail' | 'phone';

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true };
  if (name === 'arrow') return <svg {...common}><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
  if (name === 'moon') return <svg {...common}><path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z" /></svg>;
  if (name === 'sun') return <svg {...common}><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;
  if (name === 'menu') return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
  if (name === 'close') return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>;
  if (name === 'external') return <svg {...common}><path d="M14 5h5v5M19 5l-8 8" /><path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>;
  if (name === 'github') return <svg {...common}><path d="M15 22v-3.9c.1-1.2-.4-2.3-1.3-3.1 4.2-.5 6.3-2.1 6.3-5.9a4.6 4.6 0 0 0-1.2-3.2 4.2 4.2 0 0 0-.1-3.3s-1-.3-3.3 1.2a11.8 11.8 0 0 0-6.8 0C7.3 2.3 6.3 2.6 6.3 2.6a4.2 4.2 0 0 0-.1 3.3A4.6 4.6 0 0 0 5 9.1c0 3.8 2.1 5.4 6.3 5.9-.8.7-1.2 1.7-1.2 2.8V22" /><path d="M9 19c-3 .9-3-1.4-4.2-1.8" /></svg>;
  if (name === 'mail') return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
  return <svg {...common}><path d="M7 3h3l2 5-2.2 1.8a15.7 15.7 0 0 0 4.4 4.4L16 12l5 2v3a3 3 0 0 1-3.1 3A15.9 15.9 0 0 1 4 6.1 3 3 0 0 1 7 3Z" /></svg>;
}

const expertise = [
  ['01', 'Software Engineering', 'Production software across web, mobile and backend environments.'],
  ['02', 'Product Development', 'Turning business requirements and operational workflows into practical digital products.'],
  ['03', 'Full-Stack Development', 'Frontend, backend, APIs, databases, authentication and application architecture.'],
  ['04', 'Mobile Applications', 'Modern mobile applications with React Native and Kotlin / Android technologies.'],
  ['05', 'Backend Engineering', 'Reliable server-side systems, APIs, integrations and distributed application systems.'],
  ['06', 'SaaS Platforms', 'Business platforms, management systems and subscription-oriented applications.'],
  ['07', 'System Architecture', 'Maintainable applications, services, databases and integrations.'],
  ['08', 'Technical Leadership', 'Engineering decisions, implementation and technical direction across projects.'],
];

const stackGroups = [
  { key: 'Frontend', kicker: '01 / INTERFACE', title: 'Web platforms that stay clear under complexity.', description: 'Modern web interfaces, dashboards, SaaS platforms and business applications.', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Web Design'] },
  { key: 'Mobile', kicker: '02 / DEVICE', title: 'Mobile software built around real workflows.', description: 'Cross-platform and native mobile application development focused on performance, usability and practical business workflows.', items: ['React Native', 'Kotlin', 'Android', 'TypeScript', 'JavaScript'] },
  { key: 'Backend', kicker: '03 / SYSTEMS', title: 'The systems beneath useful products.', description: 'Backend services, APIs, application logic, integrations and distributed application systems.', items: ['Go / Golang', 'Python', 'C++', 'Java', 'C#', 'Node.js', 'TypeScript', 'JavaScript'] },
  { key: 'Databases', kicker: '04 / DATA', title: 'Data architecture with the right level of rigor.', description: 'Database technologies and architectures across relational, NoSQL, caching, search and distributed data systems.', items: ['PostgreSQL', 'MySQL', 'MariaDB', 'SQL Server', 'SQLite', 'MongoDB', 'Redis', 'Cassandra', 'DynamoDB', 'Firestore', 'Elasticsearch', 'ClickHouse'] },
  { key: 'Infrastructure', kicker: '05 / OPERATIONS', title: 'Reliable foundations for shipping and running software.', description: 'Practical infrastructure and delivery capabilities for production applications.', items: ['Linux', 'Git', 'GitHub', 'Docker', 'CI / CD', 'Cloud Deployment', 'Server Configuration', 'Environment Management', 'Reverse Proxies', 'DNS', 'SSL / TLS', 'Logging & Monitoring'] },
  { key: 'Architecture', kicker: '06 / STRUCTURE', title: 'Architecture that gives products room to grow.', description: 'Capabilities applied in context, shaped by product needs and operating constraints.', items: ['Full-Stack Architecture', 'SaaS Architecture', 'REST API Architecture', 'Mobile Architecture', 'Modular Architecture', 'Microservices', 'Offline-First', 'Multi-Tenant Systems', 'RBAC', 'Payment Integrations', 'Webhooks', 'Background Processing'] },
];

const projects = [
  { number: '01', name: 'Dira OS', category: 'BUSINESS OPERATING SYSTEM', description: 'An offline-first business management platform designed to help businesses manage sales, inventory, finance, reporting and day-to-day operations through a unified application.', link: 'https://dira-os.vickinstechnologies.com/', type: 'dira' },
  { number: '02', name: 'Sorana Property Managers', category: 'PROPERTY MANAGEMENT SAAS', description: 'A property management platform designed to streamline rental operations, property management workflows, tenant interactions and property-owner services.', link: 'https://www.soranapropertymanagers.com/', type: 'sorana' },
  { number: '03', name: 'V-Guard', category: 'SECURITY TECHNOLOGY', description: 'A Vickins Technologies product currently being developed as part of the company’s growing software and technology portfolio.', link: null, type: 'guard' },
];

function ExternalLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

export default function Home() {
  const [dark, setDark] = useState(false);
  const [themeReady, setThemeReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStack, setActiveStack] = useState('Frontend');

  useEffect(() => {
    const saved = window.localStorage.getItem('kelvin-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(saved ? saved === 'dark' : prefersDark);
    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (!themeReady) return;
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    window.localStorage.setItem('kelvin-theme', dark ? 'dark' : 'light');
  }, [dark, themeReady]);

  const activeGroup = stackGroups.find((group) => group.key === activeStack) ?? stackGroups[0];
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <div className="container nav-shell">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Kelvin Thuo home">
            <span className="brand-mark">KT</span>
            <span><strong>Kelvin Thuo</strong><small>CEO &amp; Founder · Vickins Technologies</small></span>
          </a>
          <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
            <a href="#about" onClick={closeMenu}>About</a><a href="#expertise" onClick={closeMenu}>Expertise</a><a href="#work" onClick={closeMenu}>Work</a><a href="#engineering" onClick={closeMenu}>Engineering</a><ExternalLink href="https://github.com/Vickins-Technologies1">GitHub</ExternalLink><a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
          <div className="nav-actions">
            <button className="theme-toggle" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={() => setDark(!dark)}><Icon name={dark ? 'sun' : 'moon'} size={16} /><span>{dark ? 'Light' : 'Dark'}</span></button>
            <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} size={19} /></button>
          </div>
        </div>
      </header>

      <section className="hero section" id="top">
        <div className="hero-grid container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> KELVIN THUO <span className="eyebrow-status">AVAILABLE FOR SELECT COLLABORATIONS</span></div>
            <h1>Building software.<br /><em>Leading technology.</em></h1>
            <p className="hero-lede">CEO &amp; Founder of Vickins Technologies and a senior software developer focused on designing, engineering and leading practical digital systems, applications and technology products.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">View my work <Icon name="arrow" size={17} /></a><a className="button button-quiet" href="#contact">Get in touch <Icon name="arrow" size={17} /></a></div>
            <a className="text-link" href="https://github.com/Vickins-Technologies1" target="_blank" rel="noopener noreferrer"><Icon name="github" size={16} /> Engineering on GitHub <Icon name="external" size={13} /></a>
            <div className="hero-meta"><div><span>FOUNDER</span><strong>Vickins Technologies</strong></div><div><span>ENGINEERING</span><strong>Web · Mobile · Backend</strong></div><div><span>FOCUS</span><strong>Software · Products · Systems</strong></div></div>
          </div>
          <div className="hero-visual">
            <div className="portrait-backdrop" /><div className="portrait-frame"><Image src="/images/kelvin-portrait.png" alt="Kelvin Thuo, CEO and Founder of Vickins Technologies" fill priority sizes="(max-width: 800px) 88vw, 42vw" /></div>
            <div className="portrait-note"><span className="dot" /> FOUNDER / ENGINEER <span>NAIROBI, KE</span></div>
            <div className="hero-index">01 <span>/</span> 06</div>
          </div>
        </div>
        <div className="container scroll-cue"><span>Scroll to explore</span><span className="scroll-line" /></div>
      </section>

      <section className="section about-section" id="about"><div className="container split-section"><div className="section-label">01 / PROFILE</div><div className="section-content"><h2>Founder by perspective.<br /><span>Engineer by practice.</span></h2><div className="about-text"><p>Kelvin Thuo is the CEO and Founder of Vickins Technologies, where he leads the development of software products, business systems and digital platforms.</p><p>As a senior software developer and technical lead, he is involved across the software lifecycle — from product requirements and system architecture to application development, backend engineering, integrations, deployment and continuous improvement.</p><p>His approach combines engineering discipline with practical product thinking, focusing on software that solves real operational and business problems.</p></div><div className="highlight-grid"><div><span>FOUNDER</span><strong>CEO &amp; Founder of<br />Vickins Technologies</strong></div><div><span>ENGINEERING</span><strong>Senior Software<br />Developer</strong></div><div><span>LEADERSHIP</span><strong>Technical Lead across<br />Vickins projects</strong></div><div><span>PRODUCT</span><strong>Practical digital systems<br />and software products</strong></div></div></div></div></section>

      <section className="section expertise-section" id="expertise"><div className="container"><div className="section-intro"><div className="section-label">02 / CAPABILITY</div><div><h2>Engineering expertise</h2><p>From first principles to shipped product, Kelvin works across the decisions that make software useful, maintainable and ready for real-world use.</p></div></div><div className="expertise-grid">{expertise.map(([num, title, text]) => <article className="expertise-card" key={num}><span className="card-number">{num}</span><h3>{title}</h3><p>{text}</p><span className="card-arrow"><Icon name="arrow" size={16} /></span></article>)}</div></div></section>

      <section className="section stack-section" id="stack"><div className="container"><div className="section-intro"><div className="section-label">03 / TOOLKIT</div><div><h2>Technology stack</h2><p>A broad engineering toolkit, applied in context. The right technology is the one that fits the product, its users and the team that will maintain it.</p></div></div><div className="stack-interface"><div className="stack-tabs" role="tablist" aria-label="Technology categories">{stackGroups.map((group) => <button key={group.key} className={activeStack === group.key ? 'active' : ''} onClick={() => setActiveStack(group.key)} role="tab" aria-selected={activeStack === group.key}>{group.key}<Icon name="arrow" size={14} /></button>)}</div><div className="stack-panel" role="tabpanel"><div className="stack-panel-copy"><span className="eyebrow">{activeGroup.kicker}</span><h3>{activeGroup.title}</h3><p>{activeGroup.description}</p></div><div className="stack-items">{activeGroup.items.map((item) => <span key={item}>{item}</span>)}</div></div></div></div></section>

      <section className="section work-section" id="work"><div className="container"><div className="section-intro"><div className="section-label">04 / SELECTED WORK</div><div><h2>Products with a purpose.</h2><p>Software products and digital systems developed through Vickins Technologies.</p></div></div><div className="project-list">{projects.map((project) => <article className={`project-card ${project.type}`} key={project.name}><div className="project-visual"><span className="project-grid-mark" /><span className="project-number">{project.number}</span>{project.type === 'dira' && <div className="product-lockup"><span className="product-symbol">D</span><strong>Dira <i>OS</i></strong></div>}{project.type === 'sorana' && <div className="sorana-lockup"><span>S</span><strong>sorana</strong><small>PROPERTY MANAGERS</small></div>}{project.type === 'guard' && <div className="guard-lockup"><span>V</span><strong>V-Guard</strong></div>}</div><div className="project-info"><span className="eyebrow">{project.category}</span><h3>{project.name}</h3><p>{project.description}</p><div className="project-footer">{project.link ? <ExternalLink href={project.link} className="text-link">Visit project <Icon name="external" size={13} /></ExternalLink> : <span className="project-note">Portfolio project</span>}<span className="round-arrow"><Icon name="arrow" size={17} /></span></div></div></article>)}</div></div></section>

      <section className="section build-section" id="engineering"><div className="container"><div className="section-intro"><div className="section-label">05 / APPROACH</div><div><h2>How I build</h2><p>Good engineering is a sequence of clear decisions. These principles keep the work grounded in the people and problems the product exists to serve.</p></div></div><div className="principles">{[['01', 'Understand the Problem', 'Software begins with understanding the business, workflow and people using it.'], ['02', 'Design for Simplicity', 'Complex systems should result in simple and intuitive user experiences.'], ['03', 'Engineer for Reliability', 'Applications should be structured for maintainability, resilience and real-world usage.'], ['04', 'Build for Growth', 'Architecture should allow products and businesses to evolve without unnecessary complexity.']].map(([num, title, text]) => <div className="principle" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>

      <section className="company-section"><div className="container company-card"><div className="company-logo-wrap"><Image src="/images/vickins-logo.png" alt="Vickins Technologies logo" width={230} height={230} className="company-logo" /></div><div className="company-copy"><span className="eyebrow">THE COMPANY BEHIND THE WORK</span><h2>Building <span>Vickins Technologies.</span></h2><p>Vickins Technologies is a technology company focused on building software, digital platforms and technology solutions for modern businesses.</p><div className="company-role"><span>FOUNDER &amp; CEO</span><strong>Kelvin leads the technical direction and contributes directly to the development of Vickins Technologies products and systems.</strong></div><ExternalLink href="https://www.vickinstechnologies.com" className="button button-primary">Visit Vickins Technologies <Icon name="external" size={16} /></ExternalLink></div></div></section>

      <section className="github-section"><div className="container github-card"><div className="github-icon"><Icon name="github" size={26} /></div><div><span className="eyebrow">OPEN WORK / 06</span><h2>Engineering on GitHub</h2><p>Explore the software projects, repositories and engineering work behind Vickins Technologies.</p></div><ExternalLink href="https://github.com/Vickins-Technologies1" className="button button-outline">View GitHub <Icon name="external" size={15} /></ExternalLink></div></section>

      <section className="section contact-section" id="contact"><div className="container contact-grid"><div><div className="section-label">07 / CONTACT</div><h2>Let&apos;s build<br /><em>something useful.</em></h2><p>For software projects, product development, technical collaboration or business technology solutions, get in touch.</p></div><div className="contact-panel"><a href="mailto:vickins@vickinstechnologies.com"><span className="contact-icon"><Icon name="mail" size={18} /></span><span><small>EMAIL</small><strong>vickins@vickinstechnologies.com</strong></span><Icon name="arrow" size={17} /></a><a href="tel:0768476469"><span className="contact-icon"><Icon name="phone" size={18} /></span><span><small>PHONE</small><strong>0768476469</strong></span><Icon name="arrow" size={17} /></a><ExternalLink href="https://github.com/Vickins-Technologies1"><span className="contact-icon"><Icon name="github" size={18} /></span><span><small>GITHUB</small><strong>Vickins Technologies</strong></span><Icon name="external" size={15} /></ExternalLink><ExternalLink href="https://www.vickinstechnologies.com"><span className="contact-icon company-contact-mark">V</span><span><small>COMPANY</small><strong>Vickins Technologies</strong></span><Icon name="external" size={15} /></ExternalLink><a className="button button-primary contact-button" href="mailto:vickins@vickinstechnologies.com">Start a conversation <Icon name="arrow" size={17} /></a></div></div></section>

      <footer className="site-footer"><div className="container footer-top"><a className="brand" href="#top"><span className="brand-mark">KT</span><span><strong>Kelvin Thuo</strong><small>CEO &amp; Founder · Vickins Technologies</small></span></a><div className="footer-links"><div><span>EXPLORE</span><a href="#about">About</a><a href="#expertise">Expertise</a><a href="#work">Work</a><a href="#engineering">Engineering</a><a href="#contact">Contact</a></div><div><span>ELSEWHERE</span><ExternalLink href="https://www.vickinstechnologies.com">Vickins Technologies</ExternalLink><ExternalLink href="https://github.com/Vickins-Technologies1">GitHub</ExternalLink></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Kelvin Thuo. All rights reserved.</span><span>Founder · Engineer · Product Builder</span></div></footer>
    </main>
  );
}

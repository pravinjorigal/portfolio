// ---------------------------------------------------------------------------
// Portfolio data — edit this object to update site content. Nothing below the
// render functions needs to change for routine content updates.
// ---------------------------------------------------------------------------
const portfolio = {
  profile: {
    name: 'Pravin Jorigal',
    role: 'Senior Java Backend Engineer',
    location: 'Hyderabad, India',
    email: 'jorigalpravin@gmail.com',
    linkedin: 'https://linkedin.com/in/pravinjorigal',
    github: 'https://github.com/pravinjorigal',
    resume: 'assets/documents/Pravin_Resume.pdf',
    availability: 'Open to Senior Backend & Tech Lead roles'
  },

  metrics: [
    { value: '~8', label: 'years in enterprise engineering' },
    { value: '50+', label: 'enterprise APIs delivered' },
    { value: '30+', label: 'production releases supported' },
    { value: '99.9%', label: 'uptime system ownership' },
    { value: '50K–100K', label: 'requests/day on a platform' },
    { value: '6s → 1.5s', label: 'P90 latency improvement' }
  ],

  skills: [
    { title: 'Backend engineering', items: 'Java 17 · Spring Boot · Spring MVC · REST APIs · Microservices · API design' },
    { title: 'Data &amp; integrations', items: 'Oracle SQL · PostgreSQL · JPA/Hibernate · MyBatis · Redis · IBM MQ · Kafka' },
    { title: 'Reliability &amp; delivery', items: 'Splunk · Structured logging · Jenkins · Maven · JUnit 5 · Production RCA · Code reviews' },
    { title: 'Architecture', items: 'Legacy modernization · Distributed systems · Secure APIs · Performance tuning · Resilience patterns' }
  ],

  experience: [
    {
      period: 'Mar 2022 — Present',
      title: 'Staff Engineer',
      org: 'Nagarro',
      description: 'Formerly Associate Staff Engineer and Senior Engineer. Modernizing WebSphere applications into Spring Boot 3 microservices; designing high-performance APIs for an insurance platform serving approximately 50K–100K daily requests; co-leading an offshore team of 4–5 engineers.',
      points: [
        'Reduced P90 latency by ~75% (6s to 1.5s) through concurrency, caching, and query tuning.',
        'Drove Java 17 / Spring Boot 3 adoption and resolved 100+ vulnerabilities with zero-regression deployments.',
        'Improved observability with JSON logs and Splunk dashboards, shortening RCA from hours to minutes.'
      ]
    },
    {
      period: 'Jul 2018 — Mar 2022',
      title: 'Project Engineer',
      org: 'Wipro',
      description: 'Developed and enhanced Spring Boot microservices for a banking onboarding platform, with a focus on search, exports, Oracle data access, and reliable releases.',
      points: [
        'Built an Excel export microservice for large datasets.',
        'Optimized Oracle SQL with MyBatis and reusable database functions.',
        'Contributed to design discussions, integration testing, code reviews, and Phase 2 improvements adopted in production.'
      ]
    }
  ],

  education: [
    {
      period: '2018 - 2022',
      title: 'Integrated M. Tech',
      org: 'BITS Pilani',
      description: '8.25 GPA across six attended semesters.'
    },
    {
      period: '2015 — 2018',
      title: 'B.Sc. in Information Technology',
      org: 'Mumbai University',
      description: 'Completed bachelor’s degree with 88%.'
    }    
  ],

  // Empty by default — add real credentials before publishing (e.g. Oracle,
  // AWS, Kubernetes). Each entry: { title, issuer, year }.
  certifications: [
    {
      title: 'Java Multithreading, Concurrency & Performance Optimization',
      issuer: 'Udemy',
      year: '2026'
    },
    {
      title: 'Apache Kafka Essential Training: Getting Started',
      issuer: 'LinkedIn',
      year: '2026'
    }
  ],

  projects: [
    { number: '01', tag: 'Performance', title: 'Member Certificate Booklets', summary: 'Identified redundant processing, parallelized independent downstream calls, and added Redis caching to meet a strict SLA.', impactValue: '~75%', impactLabel: 'lower P90 latency<br>6s → 1.5s', link: 'projects/member-certificate-booklets.html', featured: true },
    { number: '02', tag: 'Onboarding', title: 'Quick Registration', summary: 'Delivered an API-first insurance registration journey that coordinated business validation with LDAP and Okta integrations.', link: 'projects/quick-registration.html' },
    { number: '03', tag: 'Modernization', title: 'Java 17 &amp; Spring Boot 3', summary: 'Modernized legacy services incrementally, resolving Java, dependency, and Jakarta compatibility issues safely.', link: 'projects/legacy-modernization.html' },
    { number: '04', tag: 'Reliability', title: 'Production Resilience', summary: 'Used structured logging and Splunk to trace intermittent timeouts, then introduced safe retry handling for transient failures.', link: 'projects/production-reliability.html' },
    { number: '05', tag: 'Architecture', title: 'Maintainable Microservices', summary: 'Applied layered architecture and reusable integration boundaries to keep evolving enterprise services easier to change and support.', link: 'projects/maintainable-microservices.html' },
    { number: '06', tag: 'Caching', title: 'Redis Caching Strategy', summary: 'Designed a cache-aside strategy for high-read reference data, cutting redundant database round-trips without risking staleness.', link: 'projects/redis-caching-strategy.html' },
    { number: '07', tag: 'Data', title: 'SQL Optimization', summary: 'Rewrote slow Oracle queries and indexing behind a banking search and export feature, turning multi-second table scans into near-instant lookups.', link: 'projects/sql-optimization.html' }
  ],

  snapshots: [
    'Java concurrency &amp; async workflows',
    'Redis caching for stable reference data',
    'IBM MQ with SSL &amp; JMS processing',
    'Structured JSON logging &amp; Splunk RCA',
    'Secure REST API design',
    'Production releases &amp; incident ownership',
    'Code reviews &amp; mentoring',
    'Oracle SQL tuning &amp; query optimization'
  ],

  social: [
    { id: 'contact-email', href: p => `mailto:${p.email}` },
    { id: 'contact-linkedin', href: p => p.linkedin },
    { id: 'contact-github', href: p => p.github }
  ]
};

// ---------------------------------------------------------------------------
// Render functions — each is a no-op on pages that don't have the matching
// container (e.g. case-study pages only load this file for shared behaviour).
// ---------------------------------------------------------------------------
function renderMetrics() {
  const el = document.getElementById('metrics-container');
  if (!el) return;
  el.innerHTML = portfolio.metrics.map(m => `<article class="metric reveal"><strong>${m.value}</strong><span>${m.label}</span></article>`).join('');
}

function renderSkills() {
  const el = document.getElementById('skills-container');
  if (!el) return;
  el.innerHTML = portfolio.skills.map(s => `<article class="capability reveal"><h3>${s.title}</h3><p>${s.items}</p></article>`).join('');
}

function renderExperience() {
  const el = document.getElementById('experience-container');
  if (!el) return;
  el.innerHTML = portfolio.experience.map(e => `<li class="reveal"><p class="period">${e.period}</p><div><h3>${e.title} <span>· ${e.org}</span></h3><p>${e.description}</p><ul>${e.points.map(pt => `<li>${pt}</li>`).join('')}</ul></div></li>`).join('');
}

function renderEducation() {
  const el = document.getElementById('education-container');
  if (!el) return;
  el.innerHTML = portfolio.education.map(e => `<li class="reveal"><p class="period">${e.period}</p><div><h3>${e.title} <span>· ${e.org}</span></h3><p>${e.description}</p></div></li>`).join('');
}

function renderCertifications() {
  const el = document.getElementById('certifications-container');
  if (!el) return;
  if (!portfolio.certifications.length) {
    el.innerHTML = '<p class="cert-empty">No certifications added yet — add entries to the <code>certifications</code> array in <code>script.js</code> (for example, Oracle, AWS, or Kubernetes credentials) before publishing.</p>';
    return;
  }
  el.innerHTML = portfolio.certifications.map(c => `<article class="capability reveal"><h3>${c.title}</h3><p>${c.issuer} · ${c.year}</p></article>`).join('');
}

function renderProjects() {
  const el = document.getElementById('projects-container');
  if (!el) return;
  el.innerHTML = portfolio.projects.map(p => `<article class="case-card${p.featured ? ' featured' : ''} reveal"><p class="case-number">${p.number} / ${p.tag}</p><h3>${p.title}</h3><p>${p.summary}</p>${p.impactValue ? `<div class="impact"><b>${p.impactValue}</b><span>${p.impactLabel}</span></div>` : ''}<a href="${p.link}">Read case study <span>→</span></a></article>`).join('');
}

function renderSnapshots() {
  const el = document.getElementById('snapshots-container');
  if (!el) return;
  el.innerHTML = portfolio.snapshots.map(s => `<li>${s}</li>`).join('');
}

function renderResume() {
  const summary = document.getElementById('resume-summary');
  if (summary) {
    summary.innerHTML = `
      <div><dt>Experience</dt><dd>${portfolio.metrics[0].value} years, enterprise backend</dd></div>
      <div><dt>Focus</dt><dd>Java 17 · Spring Boot · Microservices</dd></div>
      <div><dt>Location</dt><dd>${portfolio.profile.location}</dd></div>
      <div><dt>Status</dt><dd>${portfolio.profile.availability}</dd></div>`;
  }
  const download = document.getElementById('resume-download');
  if (download) download.href = portfolio.profile.resume;
  const heroDownload = document.getElementById('hero-resume');
  if (heroDownload) heroDownload.href = portfolio.profile.resume;
}

function renderSocial() {
  portfolio.social.forEach(s => {
    const el = document.getElementById(s.id);
    if (el) el.setAttribute('href', s.href(portfolio.profile));
  });
}

function renderPortfolio() {
  renderMetrics();
  renderSkills();
  renderExperience();
  renderEducation();
  renderCertifications();
  renderProjects();
  renderSnapshots();
  renderResume();
  renderSocial();
}

// ---------------------------------------------------------------------------
// Shared page behaviour (theme, menu, reveal-on-scroll, progress bar).
// Guarded with optional chaining so it runs safely on case-study pages too.
// ---------------------------------------------------------------------------
(() => {
  const root = document.documentElement;
  const saved = localStorage.getItem('portfolio-theme');
  if (saved) root.dataset.theme = saved;

  document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    localStorage.setItem('portfolio-theme', next);
  });

  document.querySelector('.menu-toggle')?.addEventListener('click', event => {
    const links = document.querySelector('.nav-links');
    const open = links.classList.toggle('open');
    event.currentTarget.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => document.querySelector('.nav-links')?.classList.remove('open')));
  document.querySelectorAll('.year').forEach(item => item.textContent = new Date().getFullYear());

  renderPortfolio();

  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(item => observer.observe(item));

  addEventListener('scroll', () => {
    const height = document.documentElement.scrollHeight - innerHeight;
    document.documentElement.style.setProperty('--progress', `${height ? scrollY / height * 100 : 0}%`);
  }, { passive: true });
})();

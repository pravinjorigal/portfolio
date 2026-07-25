Pravin's Portfolio https://pravinjorigal.github.io/portfolio/

A static, GitHub Pages-ready portfolio for a Senior Java Backend Engineer. It presents seven confidentiality-safe
engineering case studies and requires no build step or backend.

The site is fully data-driven: `index.html` holds only semantic structure and empty containers, and everything else (
career metrics, skills, experience, education, certifications, project cards, engineering snapshots, and contact links)
renders from a single `portfolio` object in `script.js`.

## Files

- `index.html` — portfolio homepage: structure only, no hardcoded content
- `script.js` — the `portfolio` data object plus the render functions that build every homepage section
- `projects/` — seven engineering case studies
- `style.css` — shared site and case-study styling
- `robots.txt`, `sitemap.xml`, `manifest.json`, `404.html` — deployment and SEO basics

## Local preview

Open `index.html` in a browser. Any static web server also works.

## Case studies

1. Member Certificate Booklets
2. Enterprise Forms Platform Modernization
3. Production Reliability
4. Quick Registration
5. Java 17 & Spring Boot 3
6. Redis Caching Strategy
7. Enterprise Microservice Design

Every case study follows the same format: business context, constraints, role, architecture, technology stack, solution,
engineering decisions, challenges, business impact, a production support story, lessons learned, what would be improved
today, and a recruiter summary.

## License

All content is personal and confidential-work summaries. Do not reuse without permission.

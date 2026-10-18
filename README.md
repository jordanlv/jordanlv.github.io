# Jordan Levy — Personal Website

Minimalist personal website for Jordan Levy, PhD candidate at IRIT and Research Engineer at TwinswHeel.
Research interests: anomaly detection, explainability, time series.

## Stack

- [Astro](https://astro.build) — static site generator
- Plain CSS (light/dark theme toggle)
- Publications stored as data (`src/data/publications.json`)

## Roadmap

- **V1** — single page: profile, links (GitHub, Google Scholar, LinkedIn, email), research topics, publications list.
- **V2** — articles readable directly on the site (MDX + KaTeX), FR/EN language toggle.

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Editing content

- Profile, bio, links, research topics: `src/data/profile.json`
- Publications: `src/data/publications.json` (optional links: `pdf`, `arxiv`, `doi`, `code`, `bibtex`)
- Photo: drop it in `public/` and set `"photo": "/photo.jpg"` in `profile.json`

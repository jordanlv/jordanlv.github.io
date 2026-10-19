# Jordan Levy — Personal Website

Minimalist personal website for Jordan Levy, PhD candidate at IRIT and Research Engineer at TwinswHeel.
Research interests: anomaly detection, explainability, time series.

## Stack

- [Astro](https://astro.build) — static site generator
- Plain CSS (light/dark theme toggle)
- One Markdown file per paper (`src/content/papers/`), each with its own page in English and French

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

- Profile, bio (EN/FR), links: `src/data/profile.json`
- Papers: one file per paper in `src/content/papers/`. The file name is the page URL (`/papers/<name>/` and `/fr/papers/<name>/`). The front matter holds the metadata (`summary` in EN and FR, `url` = original source, `image` = figure under `public/papers/`, 16:9, ideally 1440 × 810 px — used for the list thumbnail and the paper page), the body is the article shown on its page, in the paper's own language
- Interface texts in both languages: `src/i18n.ts`
- Photo: drop it in `public/` and set `"photo": "/photo.jpg"` in `profile.json`

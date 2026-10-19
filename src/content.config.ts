import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per paper in src/content/papers/. The file name is the page slug,
// the front matter holds the metadata and the body is the article shown on its page.
const papers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/papers' }),
  schema: z.object({
    title: z.string(), // official title, never translated
    authors: z.array(z.string()),
    venue: z.string().default(''), // short name, shown in lists
    venueFull: z.string().optional(), // full name, shown on the paper page and in BibTeX
    year: z.number(),
    date: z.coerce.date().optional(), // exact publication date, used for ordering
    type: z.enum(['Preprint', 'Conference', 'Workshop', 'Paper']),
    lang: z.enum(['en', 'fr']), // language the paper is written in
    summary: z.object({ en: z.string(), fr: z.string() }),
    image: z.string().optional(), // figure used as thumbnail, path under public/
    url: z.string().url().optional(), // original source (arXiv, HAL, publisher…)
    keywords: z.array(z.string()).default([]),
  }),
});

export const collections = { papers };

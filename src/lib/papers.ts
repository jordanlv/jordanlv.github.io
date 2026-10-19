import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n';

export type Paper = CollectionEntry<'papers'>;

/** The author whose name is highlighted in author lists */
export const SELF = 'J. Levy';

const sortKey = (paper: Paper) => paper.data.date?.getTime() ?? Date.UTC(paper.data.year, 0, 1);

/** All papers, most recent first */
export async function getPapers(): Promise<Paper[]> {
  const papers = await getCollection('papers');
  return papers.toSorted((a, b) => sortKey(b) - sortKey(a));
}

export const paperPath = (lang: Lang, id: string) => (lang === 'en' ? `/papers/${id}/` : `/fr/papers/${id}/`);

/** Short name of the site hosting the original paper, for the "Read on …" button */
export function sourceName(url: string): string {
  const host = new URL(url).hostname.replace(/^www\./, '');
  const known: Record<string, string> = { 'arxiv.org': 'arXiv', 'hal.science': 'HAL', 'openreview.net': 'OpenReview' };
  return known[host] ?? host;
}

/** BibTeX entry built from the paper's metadata */
export function toBibtex(paper: Paper): string {
  const { title, authors, venue, venueFull, year, type, url } = paper.data;
  const firstWord = title.split(/[^\p{L}\p{N}]+/u).find((w) => w.length > 3) ?? 'paper';
  const key = `levy${year}${firstWord.toLowerCase().normalize('NFD').replace(/[^a-z0-9]/g, '')}`;
  const entryType = type === 'Conference' || type === 'Workshop' ? 'inproceedings' : 'misc';
  const fields: [string, string | number | undefined][] = [
    ['title', `{${title}}`],
    ['author', authors.join(' and ')],
    [entryType === 'inproceedings' ? 'booktitle' : 'howpublished', venueFull || venue || undefined],
    ['year', year],
    ['url', url],
  ];
  const body = fields
    .filter(([, value]) => value !== undefined && value !== '')
    .map(([name, value]) => `  ${name} = {${value}}`)
    .join(',\n');
  return `@${entryType}{${key},\n${body}\n}`;
}

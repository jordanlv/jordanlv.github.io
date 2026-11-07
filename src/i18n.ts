// The site is published in English only; the French strings are kept in case a French version comes back.
// `Lang` is also the language a paper is written in (used by the publication filter).
export const languages = ['en', 'fr'] as const;
export type Lang = (typeof languages)[number];

/** A piece of content written in each language */
export type Localized = Record<Lang, string>;

/** Home page path for each language: English is the default, at the root */
export const homePath: Record<Lang, string> = { en: '/', fr: '/fr/' };

export const ui = {
  en: {
    projects: 'Projects',
    publications: 'Publications',
    resume: 'Resume',
    downloadResume: 'Download Resume',
    filterByDate: 'Filter by date',
    date: 'Date',
    allDates: 'All dates',
    filterByFormat: 'Filter by type',
    allFormats: 'All types',
    formats: { article: 'Articles', poster: 'Posters' },
    filterByLanguage: 'Filter by language',
    allLanguages: 'All languages',
    noResults: 'No publication matches these filters.',
    showMore: 'Show more publications',
    toggleTheme: 'Toggle dark mode',
    types: { Preprint: 'Preprint', Conference: 'Conference', Workshop: 'Workshop', Paper: 'Paper' },
    // Paper pages
    allPublications: 'All publications',
    readOn: 'Read on',
    copyBibtex: 'Copy BibTeX',
    copied: 'Copied',
    cite: 'Cite this paper',
    keywords: 'Keywords',
    comingSoon: 'A full presentation of this paper is coming soon.',
  },
  fr: {
    projects: 'Projets',
    publications: 'Publications',
    resume: 'CV',
    downloadResume: 'Télécharger le CV',
    filterByDate: 'Filtrer par date',
    date: 'Date',
    allDates: 'Toutes les dates',
    filterByFormat: 'Filtrer par type',
    allFormats: 'Tous les types',
    formats: { article: 'Articles', poster: 'Posters' },
    filterByLanguage: 'Filtrer par langue',
    allLanguages: 'Toutes les langues',
    noResults: 'Aucune publication ne correspond à ces filtres.',
    showMore: 'Voir plus de publications',
    toggleTheme: 'Activer ou désactiver le mode sombre',
    types: { Preprint: 'Prépublication', Conference: 'Conférence', Workshop: 'Atelier', Paper: 'Article' },
    // Paper pages
    allPublications: 'Toutes les publications',
    readOn: 'Lire sur',
    copyBibtex: 'Copier le BibTeX',
    copied: 'Copié',
    cite: 'Citer cet article',
    keywords: 'Mots-clés',
    comingSoon: 'Une présentation complète de cet article arrive bientôt.',
  },
} as const;

/** Each language's name, written in that language (used in the language filter) */
export const languageNames: Record<Lang, string> = { en: 'English', fr: 'Français' };


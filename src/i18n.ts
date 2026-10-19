export const languages = ['en', 'fr'] as const;
export type Lang = (typeof languages)[number];

/** A piece of content written in each language */
export type Localized = Record<Lang, string>;

/** Home page path for each language: English is the default, at the root */
export const homePath: Record<Lang, string> = { en: '/', fr: '/fr/' };

export const ui = {
  en: {
    publications: 'Publications',
    filterByDate: 'Filter by date',
    date: 'Date',
    allDates: 'All dates',
    showMore: 'Show more publications',
    toggleTheme: 'Toggle dark mode',
    switchLanguage: 'Voir le site en français',
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
    publications: 'Publications',
    filterByDate: 'Filtrer par date',
    date: 'Date',
    allDates: 'Toutes les dates',
    showMore: 'Voir plus de publications',
    toggleTheme: 'Activer ou désactiver le mode sombre',
    switchLanguage: 'View the site in English',
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

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'fr' : 'en');

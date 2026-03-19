import en from '../i18n/en.json';
import ka from '../i18n/ka.json';

const translations = { en, ka } as const;

export type Locale = keyof typeof translations;

export function getTranslations(locale: string) {
    if (!isValidLocale(locale)) return translations.en;
    return translations[locale];
}

export function isValidLocale(locale: string): locale is Locale {
    return locale === 'en' || locale === 'ka';
}

export function buildLocalizedPath(path: string, targetLocale: Locale) {
    // path e.g. "/en/blog" or "/ka" or "/en/blog/my-post"
    const segments = path.split('/').filter(Boolean);

    if (segments.length > 0 && (segments[0] === 'en' || segments[0] === 'ka')) {
        segments[0] = targetLocale;
    } else {
        segments.unshift(targetLocale);
    }

    return `/${segments.join('/')}`;
}

export function getTranslatedSlugPath(path: string, targetLocale: Locale, translatedSlug?: string) {
    // If we have a specific translated slug (e.g. for blog post detail), replace the last segment
    if (translatedSlug) {
        const segments = path.split('/').filter(Boolean);
        if (segments.length > 0 && (segments[0] === 'en' || segments[0] === 'ka')) {
            segments[0] = targetLocale;
        }
        // Replace the last segment (the slug) with the translated one
        if (segments.length > 2 && segments[1] === 'blog') {
            segments[segments.length - 1] = translatedSlug;
        }
        return `/${segments.join('/')}`;
    }
    return buildLocalizedPath(path, targetLocale);
}

import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import astroI18next from 'astro-i18next';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://lovepadel.ge',
    output: 'server',
    adapter: vercel(),
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [astroI18next(), sitemap()],
});

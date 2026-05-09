import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const buildDate = new Date().toISOString();

export default defineConfig({
  site: 'https://nsgsolutions.co',
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      serialize(item) {
        return { ...item, lastmod: buildDate };
      }
    })
  ]
});

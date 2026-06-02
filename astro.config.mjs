import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Stamp every sitemap entry with the build date. For a small static
// marketing site this is a reasonable lastmod signal: the site is
// rebuilt and redeployed whenever content changes.
const lastmod = new Date().toISOString();

export default defineConfig({
  site: 'https://nsgsolutions.co',
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = lastmod;
        return item;
      }
    })
  ]
});

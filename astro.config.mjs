import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nsgsolutions.co',
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap()]
});

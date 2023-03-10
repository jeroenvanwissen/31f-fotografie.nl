import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://31f-fotografie.nl',
  output: 'static',
  adapter: netlify(),
  integrations: [tailwind()],
  markdown: {
    drafts: false,
  },
});

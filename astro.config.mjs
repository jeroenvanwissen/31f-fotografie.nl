import { defineConfig, sharpImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://31f-fotografie.nl',
  output: 'static',
  integrations: [tailwind()],
  markdown: {
    drafts: false,
  },
  experimental: {
    // assets: true,
  },
  image: {
    service: sharpImageService(),
  },
});

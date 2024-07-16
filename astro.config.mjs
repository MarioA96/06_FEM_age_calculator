import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://marioa96.github.io',
  base: '06_FEM_age_calculator',
  integrations: [svelte()],
  server: {
    fs: {
      allow: ['styled-system'],
    },
  },
});
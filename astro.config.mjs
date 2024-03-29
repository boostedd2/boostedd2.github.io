import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(), 
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  type: "module",
  site: 'https://boostedd2.github.io',
});
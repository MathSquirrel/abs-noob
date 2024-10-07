import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://l4men00b.netlify.app/",
  integrations: [preact()]
});
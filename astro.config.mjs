import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  api: {
    routes: [{
      src: '/getServerCount',
      dest: '/api/getServerCount.js'
    }]
  },
  output: "server",
  adapter: vercel()
});
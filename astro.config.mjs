// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://lumah-pereira.vercel.app',
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/articles/pt/:slug': '/articles/:slug',
    '/articles/en/:slug': '/en/articles/:slug'
  }
});
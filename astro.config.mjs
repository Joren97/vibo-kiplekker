// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [{
    provider: fontProviders.local(),
    name: "Barlow Condensed",
    cssVariable: "--font-barlow-condensed",
    options: {
      variants: [{
        src: [
              './src/assets/fonts/barlow-condensed-latin-800-normal.woff2',
            ],
        }],
      },
  }],
});

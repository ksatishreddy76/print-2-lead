import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    // Remove tailwindcss() from here
  ],
  css: {
    postcss: "./postcss.config.js", // Let Vite use PostCSS config
  },
  // ... rest of your config
});

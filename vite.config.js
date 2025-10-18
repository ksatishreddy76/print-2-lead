import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  build: {
    outDir: "dist", // default, but you can rename if needed
    assetsDir: "assets", // keeps JS/CSS/images organized
    sourcemap: false, // set true if you want debugging in production
    rollupOptions: {
      output: {
        manualChunks: undefined, // avoids too many small chunks
      },
    },
  },
  server: {
    port: 3000, // local dev port
    open: true,
  },
});

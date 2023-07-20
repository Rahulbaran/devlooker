import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"]
    })
  ],

  build: {
    cssMinify: "lightningcss"
  },

  css: {
    transformer: "lightningcss",
    lightningcss: {
      pseudoClasses: {
        focusVisible: "focus-visible"
      },
      drafts: {
        nesting: true
      }
    }
  },

  server: {
    port: 5000,
    open: true
  },
  preview: {
    port: 5050,
    open: true
  }
});

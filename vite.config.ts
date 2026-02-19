import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()], // remove all Replit-only plugins
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"), // your source folder
  build: {
    outDir: path.resolve(__dirname, "dist"), // Vercel serves 'dist' by default
    emptyOutDir: true,
    sourcemap: false, // optional
    base: "./", // ensures relative paths work for Shopify iframe
  },
});

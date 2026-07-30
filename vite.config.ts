import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: replace "repository-name" with the exact name of your GitHub
// repository. This must match for GitHub Pages to serve assets correctly at
// https://username.github.io/repository-name/
export default defineConfig({
  plugins: [react()],
  base: "/repository-name/",
});

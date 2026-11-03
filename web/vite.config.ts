import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Relative URLs so the same build works at the custom domain root and
  // under the default project path (/kumo-ui/) on github.io.
  base: "./",
  plugins: [react(), tailwindcss()],
  build: {
    target: "es2022",
  },
});

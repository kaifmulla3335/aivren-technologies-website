import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],

  build: {
    // Split heavy vendor libraries into their own chunks. The three.js
    // ecosystem is the heaviest; framer-motion + react is medium; app code
    // stays small and cacheable independently.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (
            id.includes("three") ||
            id.includes("@react-three") ||
            id.includes("drei") ||
            id.includes("troika") ||
            id.includes("stats-gl")
          ) {
            return "three-vendor";
          }

          if (
            id.includes("framer-motion") ||
            id.includes("motion-dom") ||
            id.includes("motion-utils")
          ) {
            return "motion-vendor";
          }

          if (id.includes("lucide-react")) {
            return "icons-vendor";
          }

          if (
            id.includes("react") ||
            id.includes("scheduler") ||
            id.includes("use-sync-external-store")
          ) {
            return "react-vendor";
          }
        },
      },
    },

    // three.js + drei + R3F is genuinely large (~930 kB raw / ~250 kB gzip).
    // It is lazy-loaded (see Hero.jsx) so it does not affect first paint.
    // Raise the warning limit to acknowledge this deliberately.
    chunkSizeWarningLimit: 1000,
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "framer-motion",
      "lucide-react",
      "three",
      "@react-three/fiber",
    ],
  },
});

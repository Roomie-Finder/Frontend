import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("swiper") ||
              id.includes("axios") ||
              id.includes("react-router")
            ) {
              return "vendor_libs";
            }
            return "vendor";
          }

          if (id.includes("src/main.jsx") || id.includes("src/index.jsx")) {
            return "app_entry";
          }
        },

        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.name === "vendor_libs") {
            return "assets/vendors/vendor_libs-[hash].js";
          }
          if (chunkInfo.name === "vendor") {
            return "assets/vendors/vendor-[hash].js";
          }
          if (chunkInfo.name === "app_entry") {
            return "assets/entry/[name]-[hash].js";
          }
          return "assets/[name]-[hash].js";
        },
      },
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    // Comprime las imágenes en build. Las capturas PNG (1-2 MB) son el mayor
    // peso de descarga; se reducen fuerte sin tocar los archivos fuente.
    ViteImageOptimizer({
      png: { quality: 70 },
      jpeg: { quality: 70 },
      jpg: { quality: 70 },
      webp: { quality: 75 },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Separar las librerías pesadas en chunks propios: se cachean por
        // separado y evitan un único bundle gigante (warning de Vercel).
        manualChunks: {
          "vendor-three": ["three", "@react-three/fiber"],
          "vendor-ogl": ["ogl"],
          "vendor-motion": ["framer-motion"],
          "vendor-react": ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
});


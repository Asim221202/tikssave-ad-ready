import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Back-end'inizin Render üzerindeki canlı URL'sini buraya yapıştırın.
// Örnek: 'https://sizin-back-end-adiniz.onrender.com'
const BACKEND_URL = 'https://tiksave-08nv.onrender.com/'; // BURAYI DÜZENLEYİN!

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // --- YENİ EKLEME: PROXY AYARI ---
    proxy: {
      // Front-end'de '/api' ile başlayan tüm istekleri, back-end URL'sine yönlendir
      '/api': {
        target: BACKEND_URL, 
        changeOrigin: true, // Host başlığını hedef URL'ye değiştir
        secure: true, // HTTPS kullanıldığı için true olmalı (Render varsayımı)
        // rewrite: (path) => path.replace(/^\/api/, ''), // Gerekirse /api'yi URL'den kaldırabilirsiniz, ancak sizin back-end'inizde /api/tiktok-process rotası olduğu için şimdilik tutalım.
      },
    },
    // --- PROXY AYARI SONU ---
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

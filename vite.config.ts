import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // ponytail: split the two heaviest vendors off the main chunk;
          // add more entries here if a route later pulls in another big dep.
          motion: ['framer-motion'],
          router: ['react-router-dom'],
        },
      },
    },
  },
});

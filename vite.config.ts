import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Importa el módulo path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/src': path.resolve(__dirname, './src'),
      '@/core': path.resolve(__dirname, './src/modules/core'),
      '@/features': path.resolve(__dirname, './src/modules/features'),
    },
  },
});

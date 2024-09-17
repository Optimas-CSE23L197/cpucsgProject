import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/cpucsgProject/',  // Set this to match your GitHub Pages repository path
  css: {
    preprocessorOptions: {
      css: {
        // Add any specific options here if needed
      },
    },
  },
});

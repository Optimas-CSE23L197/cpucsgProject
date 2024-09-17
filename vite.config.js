import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    // Ensure Vite processes CSS correctly
    preprocessorOptions: {
      css: {
        // Add any specific options here
      },
    },
  },
});

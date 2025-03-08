import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths'; // Optional, for TypeScript
import path from 'path';

export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'), // Define alias
      '@assets': '/src/assets',
    },
  },
});

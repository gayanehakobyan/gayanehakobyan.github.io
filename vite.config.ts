import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'styles', replacement: resolve(__dirname, 'src/styles') },
      { find: 'components', replacement: resolve(__dirname, 'src/components') },
    ],
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});

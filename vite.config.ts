import { createRequire } from 'node:module';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';

const require = createRequire(import.meta.url);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    ckeditor5({ theme: require.resolve('@ckeditor/ckeditor5-theme-lark') }),
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['**/test.{ts,tsx}'],
  },
});

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import { configDefaults } from 'vitest/config';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      host: '0.0.0.0',
      hmr: {
        host: env.VITE_DEV_SERVER_URL ? new URL(env.VITE_DEV_SERVER_URL).hostname : 'localhost',
        port: env.VITE_DEV_SERVER_URL ? Number(new URL(env.VITE_DEV_SERVER_URL).port) : 5173,
        protocol: env.VITE_DEV_SERVER_URL ? new URL(env.VITE_DEV_SERVER_URL).protocol.replace(':', '') : 'ws',
      }
    },
    define: {
      'process.env': env, // если нужно для совместимости
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    resolve: {
        alias: {
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
            '@': resolve(__dirname, 'resources/js'),
        },
    },
    test: {
        environment: 'jsdom',
        exclude: [...configDefaults.exclude, 'e2e/*'],
        root: '.',
        globals: true,
        setupFiles: ['./resources/js/tests/setup.ts'],
    },
  };
});

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
    if (mode === 'demo') {
        // build for demo site
        return {
            root: '.',
            base: '/digital-clock-component/',
            plugins: [react()],
            build: {
                outDir: 'dist-demo',
                emptyOutDir: true,
                rollupOptions: {
                    input: {
                        index: resolve(__dirname, 'index.html'),
                        main: resolve(__dirname, 'src/main.jsx'),
                    },
                    output: {
                        entryFileNames: '[name].js',
                        assetFileNames: '[name].[ext]',
                    },
                },
            },
        };
    }

    // default: library build
    return {
        plugins: [react()],
        build: {
            lib: {
                entry: resolve(__dirname, 'src/index.js'),
                name: 'MyAwesomeReactDigitalClock',
                fileName: (fmt) => `my-awesome-react-digital-clock.${fmt}.js`,
            },
            rollupOptions: {
                external: ['react', 'react-dom'],
            },
            outDir: 'dist-lib',
        },
    };
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'MyAwesomeReactDigitalClock',
      fileName: (format) => `my-awesome-react-digital-clock.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    },
    outDir: 'dist'
  }
})

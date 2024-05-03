import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  server: {
    port: 3005,
    cors: {
      origin: '*',
      methods: ['GET'],
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: {
        app: 'src/app.tsx'
      },
      name: 'my-lib',
      formats: ['es'],
      fileName: `[name]/index`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})

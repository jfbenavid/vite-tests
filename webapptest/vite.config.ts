import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    // proxy: {
    //   'my-lib': {
    //     target: 'http://localhost:3005',
    //     changeOrigin: true,
    //     secure: false,
    //   }
    // }
  },
  resolve: {
    dedupe: ['react', 'react-dom'],
    preserveSymlinks: true,
    // alias: {
    //   'my-lib': 'http://localhost:3005'
    // },
  }
})

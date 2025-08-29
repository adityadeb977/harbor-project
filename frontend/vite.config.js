import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // Build configuration for Vercel
  build: {
    outDir: 'dist',
    sourcemap: process.env.VITE_SOURCE_MAPS === 'true',
    minify: 'terser',
    target: 'es2015',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion']
        }
      }
    }
  },
  
  // Server configuration for development
  server: {
    port: parseInt(process.env.VITE_DEV_SERVER_PORT) || 5173,
    host: process.env.VITE_DEV_SERVER_HOST || 'localhost',
    open: process.env.VITE_DEV_SERVER_OPEN === 'true',
    cors: true
  },
  
  // Preview configuration
  preview: {
    port: 4173,
    host: 'localhost'
  },
  
  // Environment variables configuration
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString())
  },
  
  // Optimization for Vercel
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion']
  }
})

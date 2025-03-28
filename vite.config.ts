import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['lucide-react', 'heroicons'],
  },
  build: {
    rollupOptions: {
      external: ["@heroicons/react/24/outline", "react", "react-dom"],
    },
  },
})

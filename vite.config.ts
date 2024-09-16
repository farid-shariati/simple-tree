import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      'process.env.BASE_URL': JSON.stringify(env.BASE_URL),
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': '/src', // Example alias configuration
      },
    },
  }
})

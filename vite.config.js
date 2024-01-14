import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import reactRefresh from '@vitejs/plugin-react-refresh'
// import { createEmotionPlugin } from 'vite-plugin-emotion'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // createEmotionPlugin(),
    // reactRefresh(),
  ],
})

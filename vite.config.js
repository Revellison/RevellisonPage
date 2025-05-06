import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
    {
      name: 'copy-cname',
      closeBundle: () => {
        fs.copyFileSync('CNAME', 'dist/CNAME');
        console.log('✅ CNAME file copied to dist folder');
      }
    }
  ],
  base: '/',
  // base: '/RevellisonPage/', // Если используете GitHub Pages без кастомного домена (замените на имя вашего репозитория)
  server: {
    historyApiFallback: true,
    host: true,
    port: 3000,
  }
})

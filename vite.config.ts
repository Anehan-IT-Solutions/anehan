import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  css: {
    preprocessorOptions: {
      // This is a workaround for v4, but if you have tailwind.config.js, use that instead
      // If you want to use tailwind.config.js, create it and add the fontFamily extension there
    },
  },
})

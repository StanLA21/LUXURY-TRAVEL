import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // твои общие настройки (например, base или сервер)
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tours: resolve(__dirname, 'tours.html'),
        contact: resolve(__dirname, 'contact.html'),
        details: resolve(__dirname, 'details.html'),
      },
    },
  },
});
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html' // Перевірте правильність цього імпорту

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      inject: {
        injectData: {
          // Дані для інжекції
        },
      },
      minify: true,
    }),
  ],
})

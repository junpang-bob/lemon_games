/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // 白天模式颜色
        'light-bg': '#ffffff',
        'light-text': '#333333',
        'light-tilte': '#000',
        // 黑夜模式颜色
        'dark-bg': '#010101',
        'dark-text': '#eeeeee',
        'dark-title': '#fff',
      },
    },
  },
  plugins: [],
}

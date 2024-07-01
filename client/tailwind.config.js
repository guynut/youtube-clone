/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-green': '#43CF37',
        'main-sky': '#18D6EF',
        'main-purple': '#AC75F4',
      },
    },
  },
  plugins: [],
}


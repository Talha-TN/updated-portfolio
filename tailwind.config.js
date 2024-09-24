/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neon: '0 4px 15px rgba(58, 236, 233, 0.8)', // Adjust the neon color and shadow intensity here
      },
    },
  },
  plugins: [],
}


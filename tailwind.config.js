/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode:"class", // Enable class-based dark mode
    theme: {
      extend: {
        colors: {
          brand: '#BA68C8',        // You can now use text-brand, bg-brand, etc.
          brandLight: '#f3e6f7',   // For tag backgrounds
          brandHover: '#a457b5',   // For hover effect
        },
      },
    },
  plugins: [],
}


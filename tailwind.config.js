module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { 50: "#f2f9ff", 100: "#e6f3ff", 500: "#0b61a4", 700: "#08496f" },
      },
    },
  },
  plugins: [],
}

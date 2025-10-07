const config = {
  theme: {
    container: {
      center: true, // container ko center me rakhega
      padding: "1rem", // andar ka padding
      screens: {
        DEFAULT: "100%", // chhoti screens ke liye full width
        lg: "1400px",    // large screen ke liye max 1400px
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;

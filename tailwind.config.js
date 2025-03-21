// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm earth tones (brighter versions)
        earth: {
          50: "#FFF8E1",  // Very light cream
          100: "#FFECB3", // Light cream
          200: "#FFE082", // Pale gold
          300: "#FFD54F", // Bright gold
          400: "#FFCA28", // Golden yellow
          500: "#FFC107", // Amber
          600: "#FFB300", // Darker amber
          700: "#FFA000", // Golden brown
          800: "#FF8F00", // Deep golden brown
          900: "#FF6F00", // Dark amber
        },
        // Complementary greens (for natural feel)
        sage: {
          50: "#F1F8E9",  // Very light sage
          100: "#DCEDC8", // Light sage
          200: "#C5E1A5", // Pale sage
          300: "#AED581", // Bright sage
          400: "#9CCC65", // Medium sage
          500: "#8BC34A", // Sage green
          600: "#7CB342", // Deeper sage
          700: "#689F38", // Forest sage
          800: "#558B2F", // Deep forest
          900: "#33691E", // Dark forest
        },
        // Accent blues (for water elements)
        azure: {
          50: "#E1F5FE",  // Very light blue
          100: "#B3E5FC", // Light blue
          200: "#81D4FA", // Pale blue
          300: "#4FC3F7", // Sky blue
          400: "#29B6F6", // Bright blue
          500: "#03A9F4", // Primary blue
          600: "#039BE5", // Deep blue
          700: "#0288D1", // Ocean blue
          800: "#0277BD", // Dark blue
          900: "#01579B", // Navy blue
        },
        // Dark contrasts
        mocha: {
          700: "#5D4037", // Dark brown (for headers)
          800: "#4E342E", // Deeper brown
          900: "#3E2723", // Very dark brown (for footer)
        }
      },
    },
  },
  plugins: [],
}



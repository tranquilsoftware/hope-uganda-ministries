/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
      colors: {

background: {
  DEFAULT: "#F8F9F5",      // Clean off-white background
  // secondary: "#38C442",   // Slightly cooler off-white 
  secondary: "#CFE0CE",
  dark: "#1A2E22",         // Deep forest green for dark mode
  light: "#FBFDF9"        // Very light off-white
},
primary: {
  DEFAULT: "#2E7D32",      // Rich green as primary
  light: "#A5D6A7",       // Light mint green
  dark: "#1B5E20",         // Darker green
  foreground: "#FFFFFF"    // White text for contrast
},
accent: {
  DEFAULT: "#81C784",      // Soft green accent
  light: "#C8E6C9",        // Very light green
  dark: "#4CAF50",         // Brighter green
  foreground: "#1B5E20"    // Dark green text for contrast
},
content: {
  DEFAULT: "#1B5E20",      // Dark green for body text
  dark: "#1B5E20",         // Dark green for dark mode
  serious: "#2E7D32",      // Primary green for important text
  offtone: "#A5D6A7",      // Light green
  white: "#F8F9F5",        // Off-white
  primary: "#1B5E20",      // Dark green for primary content
  secondary: "#4CAF50",    // Medium green for secondary content
  tertiary: "#81C784",     // Light green for tertiary content
  muted: "#A5D6A7"         // Muted green for subtle text
},
border: {
  DEFAULT: "#C8E6C9",     // Very light green border
  light: "#E8F5E9",       // Off-white with green tint for subtle borders
  dark: "#2E7D32"         // Primary green for strong borders
}
      }
    }
  },

}

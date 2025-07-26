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
// green 
// background: {
//   DEFAULT: "#F8F9F5",      // Clean off-white background
//   // secondary: "#38C442",   // Slightly cooler off-white 
//   secondary: "#CFE0CE",
//   dark: "#1A2E22",         // Deep forest green for dark mode
//   light: "#FBFDF9"        // Very light off-white
// },
// primary: {
//   DEFAULT: "#2E7D32",      // Rich green as primary
//   light: "#A5D6A7",       // Light mint green
//   dark: "#1B5E20",         // Darker green
//   foreground: "#FFFFFF"    // White text for contrast
// },
// accent: {
//   DEFAULT: "#81C784",      // Soft green accent
//   light: "#C8E6C9",        // Very light green
//   dark: "#4CAF50",         // Brighter green
//   foreground: "#1B5E20"    // Dark green text for contrast
// },
// content: {
//   DEFAULT: "#1B5E20",      // Dark green for body text
//   dark: "#1B5E20",         // Dark green for dark mode
//   serious: "#2E7D32",      // Primary green for important text
//   offtone: "#A5D6A7",      // Light green
//   white: "#F8F9F5",        // Off-white
//   primary: "#1B5E20",      // Dark green for primary content
//   secondary: "#4CAF50",    // Medium green for secondary content
//   tertiary: "#81C784",     // Light green for tertiary content
//   muted: "#A5D6A7"         // Muted green for subtle text
// },
// border: {
//   DEFAULT: "#C8E6C9",     // Very light green border
//   light: "#E8F5E9",       // Off-white with green tint for subtle borders
//   dark: "#2E7D32"         // Primary green for strong borders
// }


// blue/teal theme
background: {
  DEFAULT: "#F0F4F8",      // Very light blue-gray background
  secondary: "#D9E2EC",   // Light blue-gray
  dark: "#0D475C",        // Main teal for dark mode
  light: "#F8FAFC"        // Off-white with blue tint
},
primary: {
  DEFAULT: "#0D475C",     // Main teal
  light: "#4F8A9B",       // Lighter teal
  dark: "#093344",        // Darker teal
  foreground: "#FFFFFF"   // White text for contrast
},
accent: {
  DEFAULT: "#4A90E2",     // Bright blue accent
  light: "#8AB6F9",       // Lighter blue
  dark: "#2A6FC9",        // Darker blue
  foreground: "#FFFFFF"   // White text for contrast
},
content: {
  DEFAULT: "#2D3748",     // Dark gray-blue for body text
  dark: "#1A202C",        // Darker gray-blue for headings
  serious: "#0D475C",     // Main teal for important text
  offtone: "#90A4AE",     // Muted blue-gray
  white: "#FFFFFF",       // Pure white
  primary: "#0D475C",     // Main teal for primary content
  secondary: "#4A90E2",   // Blue for secondary content
  tertiary: "#90A4AE",    // Muted blue-gray for tertiary content
  muted: "#A0B4C0"        // Muted blue for subtle text
},
border: {
  DEFAULT: "#CFD8DC",     // Light blue-gray border
  light: "#E2E8F0",       // Lighter border
  dark: "#0D475C"         // Main teal for strong borders
}

      }
    }
  },

}

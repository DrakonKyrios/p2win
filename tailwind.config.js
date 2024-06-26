// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.ts", "./**/*.html", "./src/**/*.tsx"],
  theme: {
    colors: {
      white: "#ffffff",
    },
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        red: {
          500: "#ff0000",
        },
        primary: {
          100: "#2F96D6",
          200: "#2881B8",
          300: "#216996",
          400: "#1D5D85",
          500: "#154360",
          600: "#123952",
          700: "#0E2D40",
          800: "#0D2B3D",
          900: "#0B2230",
        },
        secondary: {
          100: "#FAAF40",
          200: "#FAAF40",
          300: "#FAAF40",
          400: "#FAAF40",
          500: "#FAAF40",
          600: "#FAAF40",
          700: "#FAAF40",
          800: "#FAAF40",
          900: "#FAAF40",
        },
      },
      backgroundImage: {
        "loot-box": "url('./assets/images/loot-box.png')",
        "loot-chest-empty": "url('./assets/images/loot-chest-empty.png')",
        "loot-chest-filled": "url('./assets/images/loot-chest-filled.png')",
        "loot-chest-vector": "url('./assets/images/loot-chest-vector.png')",
        "loot-box-stencil": "url('./assets/images/stencils_color.png')",
        "loot-box-white": "url('./assets/images/loot-box-white.png')",
        "loot-chest-blue": "url('./assets/images/loot-blue.png')",
        "loot-chest-emerald": "url('./assets/images/loot-emerald.png')",
        "loot-chest-multi": "url('./assets/images/lood-multi.png')",
        "loot-chest-science": "url('./assets/images/loot-science.png')",
        "loot-logo": "url('./assets/images/p2w-logo.png')",
      },
    },
  },
  plugins: [],
};

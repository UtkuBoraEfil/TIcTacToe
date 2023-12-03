/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blues: {
          dark: "#31C3BD",
          light: "#65E9E4",
        },

        oranges: {
          dark: "#F2B137",
          light: "#FFC860",
        },
        background: {
          dark_blue: "#1A2A33",
          light_blue: "#1F3641",
        },
        whites: {
          grey: "#A8BFC9",
          white: "#DBE8ED",
        },
      },
      fontFamily: {
        "font-family": ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};

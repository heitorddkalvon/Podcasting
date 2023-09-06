/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslateblue: {
          "100": "#33317a",
          "200": "#1d1b49",
        },
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        "istok-web": "'Istok Web'",
      },
    },
    fontSize: {
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

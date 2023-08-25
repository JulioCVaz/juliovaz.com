/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0e1317",
        blue: "#4651e5",
        white: "#fefefe",
        gray: "#929495",
      },
      fontSize: {
        small: "14px",
        medium: "18px",
        large: "36px",
      },
      fontWeight: {
        regular: "400px",
        medium: "500px",
        bold: "600px",
      },
      spacing: {
        xxsmall: "4px",
        xsmall: "8px",
        small: "12px",
        base: "16px",
        medium: "20px",
        large: "24px",
        xlarge: "28px",
        xxlarge: "32px",
        xxxlarge: "40px",
        xxxxlarge: "48px",
        giant: "64px",
        xgiant: "80px",
      },
    },
  },
  plugins: [],
};

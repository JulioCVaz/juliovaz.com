import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        dark: "#0e1317",
        primary: "#4651e5",
        white: "#fefefe",
        // gray: "#929495",
      },
      fontSize: {
        small: "14px",
        medium: "18px",
        large: "36px",
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        bold: "600",
      },
      spacing: {
        xxxsmall: "2px",
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
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/globals.css",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          default: "1.5rem",
          "3xs": "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "3rem",
          "2xl": "3.5rem",
          "3xl": "4rem",
        },
        screens: {
          "3xs": "320px",
          "2xs": "375px",
          xs: "480px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
          "3xl": "1920px",
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "half-ellipse": "url('/images/half-ellipse.svg')",
      },
      colors: {
        primary500: "#FF3E00",
        primary50: "#FFF8F6",
        secondary1500: "#FF0344",
        secondary150: "#FFE6ED",
        secondary2500: "#FFA800",
        secondary250: "#FFF7E6",
        neutral700: "#333333",
        neutral600: "#5C5C5C",
        neutral500: "#ADADAD",
        neutral400: "#D6D6D6",
        neutral300: "#EBEBEB",
        neutral200: "#F3F3F3",
        neutral100: "#F7F7F7",
        neutral50: "#FBFBFB",
        neutral: "#FFFFFF",
        success500: "#33A987",
        success50: "#E6F5F1",
        danger500: "#D63333",
        danger50: "#FAE6E6",
        warning500: "#EBC537",
        warning50: "#FDF8E7",
        info500: "#3670E3",
        info50: "#E6EEFC",
        surface1: "#FFFFFF",
        surface2: "#FFFDFD",
        surface3: "#FAFBFC",
        surface4: "#121630",
        surface5: "#161B33",
        gradiant1: "linear-gradient(180deg, #FFA800 0%, #FF0344 100%)",
      },

      fontFamily: {
        title1: ["avant", "sans-serif"],
        title2: ["Manrope", "sans-serif"],
        title3: ["gilroy-regular", "sans-serif"],
        title4: ["gilroy-light", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },

      fontSize: {
        "90xl": [
          "90px",
          {
            lineHeight: "120px",
          },
        ],
        "82xl": [
          "82px",
          {
            lineHeight: "110px",
          },
        ],
        "76xl": [
          "76px",
          {
            lineHeight: "100px",
          },
        ],
        "64xl": [
          "64px",
          {
            lineHeight: "60px",
          },
        ],
        "56xl": [
          "56px",
          {
            lineHeight: "60px",
          },
        ],
        "48xl": [
          "48px",
          {
            lineHeight: "55px",
          },
        ],
        "40xl": [
          "40px",
          {
            lineHeight: "50px",
          },
        ],
        "32xl": [
          "32px",
          {
            lineHeight: "45px",
          },
        ],
        "24xl": [
          "24px",
          {
            lineHeight: "2.5rem",
          },
        ],
        "20xl": [
          "20px",
          {
            lineHeight: "2rem",
          },
        ],
        "18xl": [
          "18px",
          {
            lineHeight: "1.8rem",
          },
        ],
        "16xl": [
          "16px",
          {
            lineHeight: "1.5rem",
          },
        ],
      },

      boxShadow: {
        md: "0px 2.4000000953674316px 6px 0px #33333305",
        lg: "8px 8px 16px 0px #33333314",
        xl: "8px 8px 16px 0px #FF583414",
        "2xl": "3px 3px 8px 0px #FF03440D",
      },
      dropShadow: {
        md: "0px 12px 36px 0px #3333330A",
        lg: "0px 0px 4px 0px #3333330A",
        xl: "0px 0px 4px 0px #FF58340A",
        "2xl": "10px 12px 15px 0px #FF03440A",
      },
      spacing: {
        "1": "8px",
        "2": "16px",
        "3": "24px",
        "4": "32px",
        "5": "40px",
        "6": "48px",
        "8": "64px",
        "120": "120px",
      },
      screens: {
        "3xs": "320px",
        "2xs": "375px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
    },
  },

  plugins: [],
};
export default config;

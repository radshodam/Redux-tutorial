// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      gradientColorStops: (theme) => ({
        BrownHelpCenter: "#4d2f0b",
        blueHelpCenter: "#0b294d",
      }),
      colors: {},
      fontFamily: {
        body: ["Exo"],
      },
      spacing: {
        1500: "50rem",
        1800: "80vh",
        7093: "93%",
        95: "95%",
        97: "97%",
        7007: "7%",
        100: "10%",
        150: "15%",
        200: "20%",
        250: "25%",
        300: "30%",
        350: "35%",
        400: "40%",
        500: "50%",
        600: "60%",
        650: "65%",
        700: "70%",
        750: "75%",
        800: "80%",
        850: "85%",
        900: "90%",
      },
      minHeight: {
        40: "40rem",
        17: "17rem",
      },
      minWidth: {
        25: "25px",
        100: "100vw",
        "12rem": "12rem",
      },
      maxWidth: {
        "3/4": "75%",
        90: "90%",
        11.5: "11.5rem",
        commentFull: "calc(100% - 6rem)",
      },
      width: {
        "1200w": "120%",
        "22W": "22rem",
        "200VW": "220vw",
        "w-152": "38rem",
        "w-90": "21rem",
        46: "46rem",
        commentFull: "calc(100% - 6rem)",
      },
      height: {
        "200VH": "220vh",
      },
      keyframes: {
        scroller: {
          "0%": {
            top: "0%",
          },
          "100%": {
            top: "80%",
          },
        },
        "slide-down": {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(0%)",
          },
          "100%": {
            transform: "translateY(-100%)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      screens: {
        ts: "774px",
        tb: "983px",
        "xs-between": { min: "0px", max: "639px" },
        "sm-between": { min: "640px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        "md-between": { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        "lg-between": { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        "xl-between": { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl-between": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
      animation: {
        "slide-down": "slide-down 0.4s ease-in-out 1 forwards",
        "slide-up": "slide-up 0.4s ease-in-out 1 forwards",
        "fade-in": "fade-in 0.4s ease-in-out 1 forwards",
        "fade-out": "fade-out 0.4s ease-in-out 1 forwards",
        "slide-down-fade-out":
          "slide-down 0.4s ease-in-out 1 forwards, fade-out 0.4s ease-in-out 1 forwards,",
        "slide-up-fade-in":
          "slide-up 0.4s ease-in-out 1 forwards, fade-in 0.4s ease-in-out 1 forwards",
        scroller: "scroller 2s ease-out infinite forwards",
      },

    },
  },
  variants: { extend: { scrollbar: ["rounded"] } },
  plugins: [require("tailwind-scrollbar")],
};

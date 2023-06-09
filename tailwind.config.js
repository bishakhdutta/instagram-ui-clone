/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridRow: {
        'span-0': '1 / span 2',
      },
      gridColumn: {
        'span-left': '1',
        'span-right': '3',
      },
      boxShadow:{
        "1": '0 0 2px 1px rgb(214, 214, 214)',
      },
      keyframes: {
        timer:{
          "0%":{
            backgroundPosition: "right bottom",
          },
          "100%":{
            backgroundPosition: "left bottom",
          },
        },
        like: {
          "0%": {
            transform: "scale(1)",
          },
          "25%": {
            transform: "scale(1.2)",
          },
          "50%": {
            transform: "scale(.95)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        dblLike:{
          "0%":{
            transform: "scale(0)",
            opacity: "0",
            display:"block",
          },
          "30%":{
            transform: "scale(1.2)",
            opacity: "1",
          },
          "45%":{
            transform: "scale(0.8)",
          },
          "60%,80%":{
            transform: "scale(1)",
            opacity: "1",
          },
          "100%":{
            transform: "scale(0)",
            opacity: "0",
          },
        },
      },
      animation:{
        timer: "timer 6s linear forwards",
        like: 'like 0.5s ease-in-out',
        dblLike: 'dblLike 0.7s ease-in-out forwards',
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "toast-slide-in": {
          from: { transform: "translateX(calc(100% + 1rem))" },
          to: { transform: "translateX(0)" },
        },
        "toast-hide": {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        "toast-swipe-out": {
          from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          to: { transform: "translateX(calc(100% + 1rem))" },
        },
      },
      animation: {
        "toast-slide-in": "toast-slide-in 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "toast-hide": "toast-hide 100ms ease-in forwards",
        "toast-swipe-out": "toast-swipe-out 100ms ease-out forwards",
      },
    },
  },
  plugins: [],
}

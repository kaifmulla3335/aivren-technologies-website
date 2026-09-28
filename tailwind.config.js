/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A1628",
        void: "#050A16",
        deep: "#0B1330",
        surface: "#F6F8FB",
        haze: "#EAF1FB",
        primary: {
          400: "#4C7CFF",
          500: "#2F5CF0",
          600: "#1E44D6",
        },
        cyan: {
          300: "#7FE6F2",
          400: "#3FD4E8",
          500: "#20BFDB",
        },
        teal: {
          400: "#2AD1B8",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
      },
      backgroundImage: {
        "aivren-gradient": "linear-gradient(115deg, #2AD1B8 0%, #2F5CF0 55%, #1B2E8C 100%)",
        "grid-fade": "radial-gradient(circle at 50% 0%, rgba(63,212,232,0.18), transparent 60%)",
      },
    },
  },
  plugins: [],
};

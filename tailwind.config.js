/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0a12",
        panel: "rgba(255,255,255,0.06)",
        panel2: "rgba(255,255,255,0.08)",
        stroke: "rgba(255,255,255,0.12)",
        glow: "#b06cff",
        glow2: "#7c3aed",
        text: "rgba(255,255,255,0.92)",
        sub: "rgba(255,255,255,0.70)",
      },
      boxShadow: {
        glass: "0 20px 80px rgba(0,0,0,0.45)",
        glow: "0 0 0 1px rgba(176,108,255,0.25), 0 30px 90px rgba(176,108,255,0.18)",
      },
      borderRadius: {
        xl2: "22px",
      },
      backdropBlur: {
        xl: "24px",
      },
    },
  },
  plugins: [],
};

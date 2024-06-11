/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'cta': "url('./src/assets/cta.jpg')"
      },
      keyframes: {
        moveBackgroundPosition: {
          "0%": {
            'background-position': '0% 50%'
          },
          "50%": {
            'background-position': '100% 50%'
          },
          "100%": {
            'background-position': '0% 50%'
          },
        },
        marquee: {
          to: { transform: "translateX(-50%)" },
        }
      },
      animation: {
        animateText: 'moveBackgroundPosition 6s ease-in-out infinite',
        marquee: "marquee var(--duration, 30s) linear infinite"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
    themes: [
      {
        mytheme: {
          "primary": "#d4af37",
          "secondary": "#0F172A",
          "accent": "#007e00",
          "neutral": "#090800",
          "base-100": "#f3f4f6",
          "info": "#0093ea",
          "success": "#00e13c",
          "warning": "#f97316",
          "error": "#dc2626",
        }
      }
    ]
  }
}

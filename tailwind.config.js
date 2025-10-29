/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef4f8',
          100: '#d8e6ee',
          200: '#b3ccdd',
          300: '#8db2cb',
          400: '#6b97b7',
          500: '#4e7f9f',
          600: '#245673', // requested primary brand color
          700: '#1e485f',
          800: '#183a4b',
          900: '#112a36',
        },
        secondary: {
          50: '#f7fafb',
          100: '#edf3f6',
          200: '#d6e2e9',
          300: '#b7cbd7',
          400: '#8aa8b8',
          500: '#678b9e',
          600: '#4f6e7e',
          700: '#415a68',
          800: '#364855',
          900: '#26323a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

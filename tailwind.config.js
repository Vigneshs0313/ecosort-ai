/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#16A34A', dark: '#14532D', light: '#DCFCE7' },
        accent: '#0EA5E9', ink: '#1E293B', canvas: '#F8FAFC',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: { soft: '0 1px 2px rgba(20,83,45,.06), 0 8px 24px -8px rgba(20,83,45,.12)' },
    },
  },
  plugins: [],
}

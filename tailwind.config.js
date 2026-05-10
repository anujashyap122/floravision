/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['var(--font-dm-sans)', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        'bg-dark':     '#1a2416',
        'bg-card':     '#1e2b1a',
        'bg-card2':    '#243020',
        'green-accent':'#4a7c3f',
        'green-light': '#6db33f',
        'green-glow':  '#8bc34a',
        'cream':       '#f0ede6',
        'muted':       '#9aab8e',
        'dim':         '#6b7c63',
      },
    },
  },
  plugins: [],
}

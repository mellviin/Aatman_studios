export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#b99a70',
        accent: '#f5e0c3',
        surface: '#111010',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(0,0,0,0.25)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(185,154,112,0.18), transparent 40%)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

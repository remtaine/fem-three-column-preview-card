module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
      extend: {
          colors: {
              'fem': {
                  100: 'hsl(31, 77%, 52%)',
                  200: 'hsl(184, 100%, 22%)',
                  300: 'hsl(179, 100%, 13%)',
                  400: 'hsla(0, 0%, 100%, 0.75)', //paragraphs
                  500: 'hsl(0, 0%, 95%)', //background, headings, buttons
              },
          },
          fontFamily: {
              'red-hat': ['Red Hat Display','sans-serif'],
              'inter': ['Inter', 'sans-serif'],
              'lexend-deca': ['Lexend Deca', 'sans-serif'],
              'big-shoulders': ['Big Shoulders Display', 'cursive'],
          },
          screens: {
              'mobile': '376px',
              // => @media (min-width: 640px) { ... }

              'desktop': '1441px',
              // => @media (min-width: 1280px) { ... }
          },
      },
  },
  plugins: [],
}
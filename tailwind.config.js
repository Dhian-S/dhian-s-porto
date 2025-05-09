// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // pastikan ini sudah benar
  theme: {
    extend: {
      fontFamily: {
        myfont: ['Hamston', 'sans-serif'],
        american: ['AmericanCaptain', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

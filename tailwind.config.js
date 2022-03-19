module.exports = {
  content: [
    "./src/**/*.{njk,md,html}",
    "./src/_includes/**/*.njk",
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}
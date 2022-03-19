const pairedShortcodes = require('./paired-shortcodes');

module.exports = function (eleventyConfig) {

  // Shortcodes
  Object.keys(pairedShortcodes).forEach((shortCodeName) => {
    eleventyConfig.addPairedShortcode(shortCodeName, pairedShortcodes[shortCodeName]);
  });

  return {
    templateFormats: ['njk', 'md', 'html'],
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    },
    htmlTemplateEngine: "njk",
    dataTemplateEngine: 'njk',
  }
}
const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // Serverless
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "events",
    functionsDir: './netlify/functions',
    inputDir: './src'
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
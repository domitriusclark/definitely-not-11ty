const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // Serverless
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "zach-is-cool",
    functionsDir: "./netlify/functions",
    inputDir: "./src",
    redirects: "netlify-toml-builders",
  });

  return {
    templateFormats: ["njk", "md", "html"],
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
    },
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};

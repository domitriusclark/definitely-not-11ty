const fetch = require("node-fetch");
const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
// const pairedShortcodes = require('./paired-shortcodes');

require("dotenv").config();

module.exports = function (eleventyConfig) {
  // Serverless
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "events",
    functionsDir: './netlify/functions',
    inputDir: './src'
  });

  // // Shortcodes
  // Object.keys(pairedShortcodes).forEach((shortCodeName) => {
  //   eleventyConfig.addPairedShortcode(shortCodeName, pairedShortcodes[shortCodeName]);
  // });

  eleventyConfig.addFilter("events", () => {
    const res = fetch(`https://discord.com/api/v9/guilds/${process.env.DISCORD_GUILD_ID}/scheduled-events`, {
      method: "GET",
      headers: {
        "Authorization": `Bot ${process.env.DISCORD_BOT_TOKEN}`,
      }
    })
      .then(data => data.json())
      .then(data => data);

    console.log(res)

    return res;
  })

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
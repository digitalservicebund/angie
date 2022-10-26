module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/");
  eleventyConfig.addPassthroughCopy("docs/fonts.css");
  eleventyConfig.addPassthroughCopy("assets/fonts/*");

  return {
    dir: {
      input: "docs",
      includes: "_includes",
    },
  };
};

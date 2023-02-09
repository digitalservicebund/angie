module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/");
  eleventyConfig.addPassthroughCopy("docs/fonts.css");
  eleventyConfig.addPassthroughCopy("dist/fonts/*");

  return {
    dir: {
      input: "docs",
      includes: "_includes",
    },
  };
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/");
  eleventyConfig.addPassthroughCopy("docs/fonts.css");
  eleventyConfig.addPassthroughCopy("assets/fonts/*");
  eleventyConfig.addPassthroughCopy("assets/svg/*");

  return {
    dir: {
      input: "docs",
      includes: "_includes",
    },
  };
};

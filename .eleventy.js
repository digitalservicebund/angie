module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/");

  return {
    dir: {
      input: "docs",
      includes: "_includes",
    },
  };
};

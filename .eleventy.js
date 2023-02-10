module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/");
  eleventyConfig.addPassthroughCopy("docs/*.css");
  eleventyConfig.addPassthroughCopy("docs/prism.js");
  eleventyConfig.addPassthroughCopy("dist/fonts/*");

  return {
    dir: {
      input: "docs",
      includes: "_includes",
    },
  };
};

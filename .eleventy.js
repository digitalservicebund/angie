module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/");
  eleventyConfig.addPassthroughCopy("docs/*.css");
  eleventyConfig.addPassthroughCopy("docs/prism.js");
  eleventyConfig.addPassthroughCopy("dist/fonts/*");
  eleventyConfig.addPassthroughCopy("dist/svg/*");

  return {
    dir: {
      input: "docs",
      includes: "_includes",
    },
  };
};

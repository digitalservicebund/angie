const fs = require("fs");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const sass = require("sass-embedded");
const autoprefixer = require("autoprefixer");
const postcss = require("postcss");
const csso = require("csso");
const uglifyJs = require("uglify-js");
const { rimrafSync } = require("rimraf");

// src: https://github.com/futurist/replace-css-url
var hasQuote = /^\s*('|")/;
function replacePathInCSS(css, mapFunc) {
  return [
    /(url\s*\()(\s*')([^']+?)(')/gi,
    /(url\s*\()(\s*")([^"]+?)(")/gi,
    /(url\s*\()(\s*)([^\s'")].*?)(\s*\))/gi,
  ].reduce((css, reg, index) => {
    return css.replace(reg, (all, lead, quote1, path, quote2) => {
      var ret = mapFunc(path, quote1);
      if (hasQuote.test(ret) && hasQuote.test(quote1)) quote1 = quote2 = "";
      return lead + quote1 + ret + quote2;
    });
  }, css);
}

/* compile sass to css incl. prefixing and path adjustments */
const compileSass = async ({ entry, loadPaths }) => {
  let css = sass.compile(entry, {
    loadPaths,
    sourceMap: false,
    style: "expanded",
  }).css;

  css = (
    await postcss([autoprefixer]).process(css, {
      from: undefined,
    })
  ).css;

  if (process.env.BUILD_ENV === "GHA") {
    css = replacePathInCSS(css, (path) => {
      if (/^data:/.test(path)) return path;
      return "/angie" + path;
    });
  }

  return css;
};

const prependVariables = (css) => {
  delete require.cache[require.resolve("./data/colors.js")];
  delete require.cache[require.resolve("./data/spacing.js")];
  const colors = require("./data/colors");
  const spacing = require("./data/spacing");
  let block = ":root {\n";
  Object.keys(colors).forEach((group) => {
    colors[group].forEach((c) => {
      block += `  --color-base-${group === "bw" ? "" : group + "-"}${
        c.name
      }: ${c.hex.toLowerCase()};\n`;
    });
  });
  Object.keys(spacing).forEach((name) => {
    block += `  --space-${name}: ${spacing[name]};\n`;
  });
  block += "}\n";

  return [block, css].join("\n");
};

const compileJs = () => {
  return fs
    .readdirSync("./src/scripts")
    .map((file) => fs.readFileSync("./src/scripts/" + file).toString())
    .join("\n\n");
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addWatchTarget("src");
  eleventyConfig.addWatchTarget("docs/styles");
  eleventyConfig.addWatchTarget("docs/scripts");

  eleventyConfig.addPassthroughCopy({ "dist/fonts/*": "fonts" }); // Bundes
  eleventyConfig.addPassthroughCopy({ "docs/fonts/*": "fonts" }); // Inter
  eleventyConfig.addPassthroughCopy({ "docs/images/*": "images" });
  eleventyConfig.addPassthroughCopy({ "docs/styles/prism.css": "prism.css" });
  eleventyConfig.addPassthroughCopy({ "docs/scripts/prism.js": "prism.js" });

  eleventyConfig.on("eleventy.before", async ({ runMode }) => {
    // clean
    rimrafSync("_site");

    // build headstart
    let headstartCss = await compileSass({
      entry: "./src/styles/index.scss",
      loadPaths: ["./src/styles"],
    });
    headstartCss = prependVariables(headstartCss);
    fs.writeFileSync("dist/headstart.css", headstartCss);

    let fontsCss = await compileSass({ entry: "./src/styles/fonts.scss" });
    fs.writeFileSync("dist/fonts.css", fontsCss);

    let headstartJs = compileJs();
    fs.writeFileSync("dist/headstart.js", headstartJs);

    if (runMode === "build") {
      headstartCss = csso.minify(headstartCss).css;
      fs.writeFileSync("dist/headstart.min.css", headstartCss);

      headstartJs = uglifyJs.minify(headstartJs).code;
      fs.writeFileSync("dist/headstart.min.js", headstartJs);
    }
  });

  eleventyConfig.on("eleventy.after", async (args) => {
    // docs.css
    const docsCss = await compileSass({ entry: "./docs/styles/docs.scss" });
    fs.writeFileSync("./_site/docs.css", docsCss);

    // copy over headstart distributables
    fs.copyFileSync("dist/headstart.css", "_site/headstart.css");
    fs.copyFileSync("dist/fonts.css", "_site/fonts.css");
    fs.copyFileSync("dist/headstart.js", "_site/headstart.js");
  });

  return {
    dir: {
      input: "docs/pages",
      data: "../../data",
      includes: "_includes",
    },
  };
};

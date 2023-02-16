const fs = require("fs");
const zlib = require("zlib");
const sass = require("sass-embedded");
const autoprefixer = require("autoprefixer");
const postcss = require("postcss");
const csso = require("csso");

// src: https://github.com/futurist/replace-css-url
var hasQuote = /^\s*('|")/;
function replacePathInCSS(css, mapFunc) {
  return [
    /(@import\s+)(')(.+?)(')/gi,
    /(@import\s+)(")(.+?)(")/gi,
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

const compile = async () => {
  let result = sass.compile("./src/css/index.scss", {
    loadPaths: ["./src/css"],
    sourceMap: false,
    style: "expanded",
  });
  let prefixedCss = (
    await postcss([autoprefixer]).process(result.css, {
      from: undefined,
    })
  ).css;
  if (process.env.BUILD_ENV === "GHA") {
    prefixedCss = replacePathInCSS(prefixedCss, (path) => `/angie${path}`);
  }
  return prefixedCss;
};

const compileBuild = async () => {
  const css = await compile();
  const minifiedCss = csso.minify(css).css;
  const compressed = zlib.gzipSync(minifiedCss);
  fs.writeFileSync("./dist/angie.css", css);
  fs.writeFileSync("./dist/angie.min.css", minifiedCss);
  console.log("Size (ca.) angie.css: ", css.length / 1024.0, "kb");
  console.log("Size (ca.) angie.min.css: ", minifiedCss.length / 1024.0, "kb");
  console.log(
    "Size (ca.) angie.min.css compressed: ",
    compressed.length / 1024.0,
    "kb"
  );
};

module.exports = compile;

if (require.main === module) {
  // executed when called directly
  compileBuild();
}

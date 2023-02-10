const fs = require("fs");
const zlib = require("zlib");
const sass = require("sass-embedded");
const autoprefixer = require("autoprefixer");
const postcss = require("postcss");
const csso = require("csso");

const compile = async () => {
  let result = sass.compile("./src/css/index.scss", {
    loadPaths: ["./src/css"],
    sourceMap: false,
    style: "expanded",
  });
  const prefixedCss = (
    await postcss([autoprefixer]).process(result.css, {
      from: undefined,
    })
  ).css;
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

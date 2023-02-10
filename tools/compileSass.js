const fs = require("fs");
const zlib = require("zlib");
const sass = require("sass-embedded");
const csso = require("csso");

function compile() {
  let result = sass.compile("./src/css/index.scss", {
    loadPaths: ["./src/css"],
    sourceMap: true,
    style: "expanded",
  });
  return result.css;
}

module.exports = compile;

if (require.main === module) {
  // executed when called directly
  const css = compile();
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
}

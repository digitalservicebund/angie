const fs = require("fs");
const sass = require("sass-embedded");

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
  fs.writeFileSync("./dist/angie.css", css);
}

const fs = require("fs");

function compile() {
  return fs.readdirSync("./src/js")
    .map(file => fs.readFileSync("./src/js/" + file).toString())
    .join("\n\n");
}

module.exports = compile;

if (require.main === module) {
  // executed when called directly
  const js = compile();
  fs.writeFileSync("./dist/angie.js", js)
}

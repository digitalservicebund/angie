const compileSass = require("../tools/compileSass");

class IndexCss {
  data() {
    return {
      permalink: "index.css",
    };
  }

  render() {
    return compileSass();
  }
}

module.exports = IndexCss;

const compileJs = require("../tools/compileJs");

class IndexJs {
  data() {
    return {
      permalink: "index.js",
    };
  }

  render() {
    return compileJs();
  }
}

module.exports = IndexJs;

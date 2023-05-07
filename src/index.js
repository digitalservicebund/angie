const plugin = require("tailwindcss/plugin");

module.exports = plugin(function (args) {
  require("./components/button")(args);
  require("./components/checkbox")(args);
  require("./components/input")(args);
  require("./components/inputGroup")(args);
  require("./components/inputPrefixSuffix")(args);
  require("./components/radio")(args);
  require("./components/select")(args);
  require("./components/stack")(args);
  require("./components/typo")(args);
});

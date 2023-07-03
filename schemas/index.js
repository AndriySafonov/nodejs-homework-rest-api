const { loginScheme } = require("./loginScheme");
const { registerScheme } = require("./registerScheme");
const { contactScheme } = require("./contactScheme");
const { updateFavoriteScheme } = require("./updateFavoriteScheme");

module.exports = {
  registerScheme,
  loginScheme,
  contactScheme,
  updateFavoriteScheme,
};

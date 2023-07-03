const { loginSchema } = require("./userSchema/loginSchema");
const { registerSchema } = require("./userSchema/registerSchema");
const { contactSchema } = require("./contactSchema/contactSchema");
const {
  updateFavoriteSchema,
} = require("./contactSchema/updateFavoriteSchema");

module.exports = {
  registerSchema,
  loginSchema,
  contactSchema,
  updateFavoriteSchema,
};

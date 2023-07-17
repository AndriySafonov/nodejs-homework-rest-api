const Joi = require("joi");
// const { emailRegExp } = require("../../helpers");

const emailSchema = Joi.object({
  email: Joi.string().required(),
});
// .pattern(emailRegExp)

module.exports = {
  emailSchema,
};

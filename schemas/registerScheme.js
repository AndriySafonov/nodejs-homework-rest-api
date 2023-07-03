const Joi = require("joi");

const registerScheme = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    // .pattern(emailRegexp)
    .required(),
  password: Joi.string().required(),
});

module.exports = {
  registerScheme,
};

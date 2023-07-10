const bcrypt = require("bcrypt");
const { httpError, ctrlWrapper } = require("../../helpers");
const { User } = require("../../models");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw httpError(409, "Email already in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashPassword });

  res.status(201).json(newUser);
};

module.exports = {
  register: ctrlWrapper(register),
  // login: ctrlWrapper(login),
};

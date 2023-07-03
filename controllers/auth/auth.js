const { ctrlWrapper } = require("../../helpers");
const { User } = require("../../models");

const register = async (req, res) => {
  const newUser = await User.create(req.body);

  res.status(201).json(newUser);
};

module.exports = {
  register: ctrlWrapper(register),
};

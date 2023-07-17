const { HttpError, ctrlWrapper } = require("../../helpers");
const { User } = require("../../models");

const verifyEmail = async (req, res) => {
  const { verificationCode } = req.params;
  const user = await User.findOne({ verificationCode });
  if (!user) {
    throw HttpError(401, "User not found");
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationCode: "",
  });

  res.status(200).json({
    message: "Email verify success",
  });
};

module.exports = {
  verifyEmail: ctrlWrapper(verifyEmail),
};

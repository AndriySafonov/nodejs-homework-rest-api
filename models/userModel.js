const { Schema, model } = require("mongoose");
const {
  handleMongooseError,
  // passwordRegExp,
  // emailRegExp,
} = require("../helpers");

const userSchema = new Schema(
  {
    password: {
      type: String,
      minLength: 6,
      // match: passwordRegExp,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      // match: emailRegExp,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: "",
    },
    avatarURL: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;

const express = require("express");
const { validateBody } = require("../../middlewares");
const { registerSchema } = require("../../schemas");
const ctrl = require("../../controllers/auth");

const router = express.Router();

// signup
router.post("/register", validateBody(registerSchema), ctrl.register);

module.exports = router;

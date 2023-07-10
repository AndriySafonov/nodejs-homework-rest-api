const express = require("express");
const { validateBody, authenticate } = require("../../middlewares");
const { registerSchema, loginSchema } = require("../../schemas");
const ctrl = require("../../controllers/users");

const router = express.Router();

// signup
router.post("/register", validateBody(registerSchema), ctrl.register);

// signin
router.post("/login", validateBody(loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;

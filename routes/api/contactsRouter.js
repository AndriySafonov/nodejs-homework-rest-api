const express = require("express");
const ctrl = require("../../controllers/contacts");
const { validateBody, authenticate } = require("../../middlewares");
const { contactSchema, updateFavoriteSchema } = require("../../schemas");

const router = express.Router();

router.get("/", authenticate, ctrl.listContacts);

router.get("/:contactId", authenticate, ctrl.getContactById);

router.post("/", authenticate, validateBody(contactSchema), ctrl.addContact);

router.delete("/:contactId", authenticate, ctrl.removeContact);

router.put(
  "/:contactId",
  authenticate,
  validateBody(contactSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validateBody(updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;

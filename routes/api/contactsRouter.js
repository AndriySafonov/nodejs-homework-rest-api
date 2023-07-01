const express = require("express");
const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../middlewares");
const { contactSchema, updateFavoriteSchema } = require("../../schemas");

// const {
//   contacts: {
//     listContacts,
//     getContactById,
//     addContact,
//     removeContact,
//     updateContact,
//     updateStatusContact,
//   },
// } = require("../../controllers");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateBody(contactSchema), ctrl.addContact);

router.delete("/:contactId", ctrl.removeContact);

router.put("/:contactId", validateBody(contactSchema), ctrl.updateContact);

router.patch(
  "/:contactId/favorite",
  validateBody(updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;

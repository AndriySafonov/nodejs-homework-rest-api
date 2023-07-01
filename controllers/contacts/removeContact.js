const { Contact } = require("../../models");
const { httpError, ctrlWrapper } = require("../../helpers");

const removeContact = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndRemove(contactId);

  if (!result) {
    throw httpError(404, `Not found contact with id: ${contactId}`);
  }

  res.json({
    message: "Contact deleted",
  });
};

module.exports = {
  removeContact: ctrlWrapper(removeContact),
};

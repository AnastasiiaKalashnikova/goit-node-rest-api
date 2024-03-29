const { isValidObjectId } = require("mongoose");
const HttpError = require("./HttpError");

const isValidId = (req, rep, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    next(HttpError(400, `${id} is not a valid id`));
  }
  next();
};

module.exports = isValidId;

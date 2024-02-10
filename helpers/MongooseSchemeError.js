const handleMongooseScheme = (error, data, next) => {
  error.status = 400;
  next();
};

module.exports = { handleMongooseScheme };

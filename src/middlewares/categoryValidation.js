const nameCategory = require('../utils/nameCategory');

const categoryValidation = (req, _res, next) => {
  const { name } = req.body;

  const { error } = nameCategory.validate({ name });

  if (error) {
    return next({ status: 400, message: error.message });
  }

  next();
};

module.exports = categoryValidation;
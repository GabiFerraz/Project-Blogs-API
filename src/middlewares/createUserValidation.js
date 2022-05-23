const createUser = require('../utils/createUser');

const createUserValidation = (req, _res, next) => {
  const { error } = createUser.validate(req.body);

  if (error) {
    return next({ status: 400, message: error.message });
  }

  next();
};

module.exports = createUserValidation;
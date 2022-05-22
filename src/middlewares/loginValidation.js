const userLogin = require('../utils/userLogin');

const loginValidation = (req, _res, next) => {
  const { email, password } = req.body;

  const { error } = userLogin.validate({ email, password });

  if (error) {
    return next({ status: 400, message: 'Some required fields are missing' });
  }

  next();
};

module.exports = loginValidation;
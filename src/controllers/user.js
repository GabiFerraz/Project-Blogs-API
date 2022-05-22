const User = require('../services/user');

const userLogin = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.userLogin(email);

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  userLogin,
};
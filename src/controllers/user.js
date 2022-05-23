const User = require('../services/user');

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const token = await User.userLogin(email, password);

    return res.status(200).json(token);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;

    const token = await User.createUser({ displayName, email, password, image });

    return res.status(201).json(token);
  } catch (error) {
    next(error);
  }
};

const findAll = async (_req, res, next) => {
  try {
    const user = await User.findAll();

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  userLogin,
  createUser,
  findAll,
};
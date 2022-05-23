const service = require('../services/user');

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const token = await service.userLogin(email, password);

    return res.status(200).json(token);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;

    const token = await service.createUser({ displayName, email, password, image });

    return res.status(201).json(token);
  } catch (error) {
    next(error);
  }
};

const findAll = async (_req, res, next) => {
  try {
    const users = await service.findAll();

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const findById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await service.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  userLogin,
  createUser,
  findAll,
  findById,
};
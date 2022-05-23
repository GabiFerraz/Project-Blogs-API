const service = require('../services/category');

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const newCategory = await service.createCategory(name);

    return res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCategory,
};
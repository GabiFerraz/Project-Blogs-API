const { Category } = require('../database/models');

const createCategory = async (name) => {
  console.log(name);
  const newCategory = await Category.create({ name });

  return newCategory;
};

module.exports = {
  createCategory,
};
const { BlogPost, sequelize } = require('../database/models');

const createPost = async ({ title, content, categoryIds, id }) => {
  const trans = await sequelize.transaction();
  
  try {
    // const categories = await Category.findAll({
    //   where: { id: categoryIds },
    // });
  
    // const erro = { status: 400, message: '"categoryIds" not found' };
    // if (categories.length !== categoryIds.length) throw erro;
  
    const newPost = await BlogPost
      .create({ title, content, userId: id }, { transaction: trans });
  
    await newPost.addCategories(categoryIds, { transaction: trans });
  
    await trans.commit();

    return newPost;
  } catch (error) {
    await trans.rollback();
    const erro = { status: 400, message: '"categoryIds" not found' };
    throw erro;
  }
};

module.exports = {
  createPost,
};
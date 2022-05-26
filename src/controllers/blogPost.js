const service = require('../services/blogPost');

const createPost = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;

    const newPost = await service
      .createPost({ title, content, categoryIds, id });

    return res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
};
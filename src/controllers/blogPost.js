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

const findAll = async (_req, res, next) => {
  try {
    const response = await service.findAll();

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const findById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await service.findById(id);

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const { user } = req;

    const response = await service.update({ id, title, content, user });

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const erase = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { user } = req;

    await service.erase(id, user);

    return res.status(204).json();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
  findAll,
  findById,
  update,
  erase,
};
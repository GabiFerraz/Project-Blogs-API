const Joi = require('joi');

const createPost = Joi.object(
  {
    title: Joi.string()
      .required(),
    content: Joi.string()
      .required(),
    categoryIds: Joi.array()
      .required(),
  },
);

module.exports = createPost;
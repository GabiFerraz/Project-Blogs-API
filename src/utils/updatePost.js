const Joi = require('joi');

const updatePost = Joi.object(
  {
    title: Joi.string()
      .required(),
    content: Joi.string()
      .required(),
  },
);

module.exports = updatePost;
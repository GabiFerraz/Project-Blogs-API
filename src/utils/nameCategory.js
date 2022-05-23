const Joi = require('joi');

const nameCategory = Joi.object(
  {
    name: Joi.string()
      .required(),
  },
);

module.exports = nameCategory;
const Joi = require('joi');

const userLogin = Joi.object(
  {
    email: Joi.string()
      .email() // quando a validação é simples, não quero nada diferente, não preciso passar o objeto com as informações
      .required(),
    password: Joi.string()
      .min(6)
      .required(),
  },
);

module.exports = userLogin;
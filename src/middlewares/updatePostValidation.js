const updatePost = require('../utils/updatePost');

const updatePostValidation = (req, _res, next) => {
  const { title, content } = req.body;

  const { error } = updatePost.validate({ title, content });

  if (error) {
    return next({ status: 400, message: 'Some required fields are missing' });
  }

  next();
};

module.exports = updatePostValidation;
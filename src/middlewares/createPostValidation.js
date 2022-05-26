const createPost = require('../utils/createPost');

const createPostValidation = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;

  const { error } = createPost.validate({ title, content, categoryIds });

  if (error) {
    return next({ status: 400, message: 'Some required fields are missing' });
  }

  next();
};

module.exports = createPostValidation;
const router = require('express').Router();

const loginValidation = require('../middlewares/loginValidation');
const createUserValidation = require('../middlewares/createUserValidation');
const validateJWT = require('../middlewares/validateJWT');
const categoryValidation = require('../middlewares/categoryValidation');
const createPostValidation = require('../middlewares/createPostValidation');
const updatePostValidation = require('../middlewares/updatePostValidation');

const user = require('../controllers/user');
const category = require('../controllers/category');
const blogPost = require('../controllers/blogPost');

router.post('/login', loginValidation, user.userLogin);

router.post('/user', createUserValidation, user.createUser);

router.get('/user', validateJWT, user.findAll);

router.get('/user/:id', validateJWT, user.findById);

router.post('/categories', validateJWT, categoryValidation, category.createCategory);

router.get('/categories', validateJWT, category.findAll);

router.post('/post', validateJWT, createPostValidation, blogPost.createPost);

router.get('/post', validateJWT, blogPost.findAll);

router.get('/post/:id', validateJWT, blogPost.findById);

router.put('/post/:id', validateJWT, updatePostValidation, blogPost.update);

module.exports = router;
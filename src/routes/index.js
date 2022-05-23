const router = require('express').Router();

const loginValidation = require('../middlewares/loginValidation');
const createUserValidation = require('../middlewares/createUserValidation');
const validateJWT = require('../middlewares/validateJWT');
const user = require('../controllers/user');

router.post('/login', loginValidation, user.userLogin);

router.post('/user', createUserValidation, user.createUser);

router.get('/user', validateJWT, user.findAll);

module.exports = router;
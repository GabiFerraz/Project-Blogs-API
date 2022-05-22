const router = require('express').Router();

const loginValidation = require('../middlewares/loginValidation');
const user = require('../controllers/user');

router.post('/login', loginValidation, user.userLogin);

module.exports = router;
require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const { User } = require('../database/models');

const userLogin = async (email) => {
  const user = await User.findOne({ where: { email } });

  const erro = { status: 400, message: 'Invalid fields' };
  if (!user) throw erro;

  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, secret, jwtConfig);

  return { token };
};

module.exports = {
  userLogin,
};
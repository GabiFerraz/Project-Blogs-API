require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const createJWT = (dataUser) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: dataUser }, secret, jwtConfig);

  return { token };
};

module.exports = createJWT;
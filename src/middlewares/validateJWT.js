require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    jwt.verify(token, secret);

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
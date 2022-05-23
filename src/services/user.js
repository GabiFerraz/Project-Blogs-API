const { User } = require('../database/models');
const createJWT = require('../utils/createJWT');

const userLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  const erro = { status: 400, message: 'Invalid fields' };
  if (!user) throw erro;

  const token = createJWT({ id: user.id, email });

  return token;
};

const createUser = async (dataUser) => {
  const user = await User.findOne({ where: { email: dataUser.email } });

  const erro = { status: 409, message: 'User already registered' };
  if (user) throw erro;

  const newUser = await User.create({ ...dataUser });

  const token = createJWT({ id: newUser.id, email: dataUser.email });

  return token;
};

const findAll = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });

  return users;
};

const findById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: 'password' } });

  const erro = { status: 404, message: 'User does not exist' };
  if (!user) throw erro;
  
  return user;
};

module.exports = {
  userLogin,
  createUser,
  findAll,
  findById,
};
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
  console.log(user);

  const erro = { status: 409, message: 'User already registered' };
  if (user) throw erro;

  const newUser = await User.create({ ...dataUser });

  const token = createJWT({ id: newUser.id, email: dataUser.email });

  return token;
};

const findAll = async () => {
  const user = await User.findAll({ attributes: { exclude: 'password' } });

  return user;
};

module.exports = {
  userLogin,
  createUser,
  findAll,
};
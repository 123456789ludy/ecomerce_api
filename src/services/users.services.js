/*const bcrypt = require('bcrypt');
const { users } = require('../models');

const createUser = async (user) => {
  try {
    const { password } = user;
    const hash = bcrypt.hashSync(password, 10);
    user.password = hash;

    const newUser = await users.create(user);
    return newUser;
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await users.findOne({ where: { email } });
    return user;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const user = await users.findByPk(id);
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserById
};
*/
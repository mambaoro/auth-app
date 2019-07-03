/* eslint-disable prettier/prettier */
const Sequelize = require('sequelize');
const db = require('../sequelize');

const userSchema = {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  googleId: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  githubId: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  profileImageUrl: {
    type: Sequelize.STRING,
  },
};

const User = db.define('user', userSchema);

module.exports = User;

const Sequelize = require("sequelize");
const sequelize = require("../config/db.config");

const Login = sequelize.define("Login", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Login;

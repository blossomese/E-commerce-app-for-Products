const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');

const User = require("../model/regModel")

const Product = sequelize.define('Product', {
  id: {
    type: Sequelize.UUIDV4,
    primaryKey: true,
  },
  image: {
    type: Sequelize.BLOB('long'),
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
  },
  userId: {
    type: Sequelize.UUIDV4,
    references: {
      model: User,
      key: "id"
    }
  }
});



module.exports = Product;


const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const todo = sequelize.define('Todo', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER
  },
  done: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = todo
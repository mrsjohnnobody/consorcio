const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Admin = db.define('Admin', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salt: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = Admin
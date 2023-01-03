const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Portaria = db.define('Portaria', {
  number: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },  
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = Portaria
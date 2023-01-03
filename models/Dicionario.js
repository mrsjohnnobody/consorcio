const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Dicionario = db.define('Dicionario', {
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Text: {
    type: DataTypes.STRING,
    allowNull: true,
  }
})

module.exports = Dicionario
const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Glossario = db.define('Glossario', {
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Text: {
    type: DataTypes.STRING,
    allowNull: true,
  }
})

module.exports = Glossario
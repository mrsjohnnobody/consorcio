const { DataTypes } = require('sequelize')
const sequeliz = require('sequelize')

const db = require('../db/conn')
const Parlamentar = require('./Parlamentar')

const Comissao = db.define('Comissao', {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Type: {
    type: DataTypes.ENUM("Permanente", "Temporária"),
    allowNull: false,
  },
  InitialDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  FinalDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
})

module.exports = Comissao
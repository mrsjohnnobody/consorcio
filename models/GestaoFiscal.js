const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const GestaoFiscal = db.define('GestaoFiscal', {
  nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  quadrimestre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ano: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataCadastro: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = GestaoFiscal
const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const News = db.define('News', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numberOfViews: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
})

module.exports = News
const Sequelize = require('sequelize')
const db = require('../db')

const Tag =  db.define('Tag', {
  type: {
    type: Sequelize.STRING,
    unique: true
  }
})

module.exports = Tag

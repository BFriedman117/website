const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('Post', {
  body: {
    type: Sequelize.TEXT
  },
  headline: {
    type: Sequelize.STRING,
    unique: true
  },
  subheader: {
    type: Sequelize.STRING
  }
})

module.exports = Post

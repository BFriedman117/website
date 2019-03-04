const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('Post', {
  body: {
    type: Sequelize.STRING,
    unique: true
  }
})

module.exports = Post

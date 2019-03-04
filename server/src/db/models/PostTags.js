const Sequelize = require('sequelize')
const db = require('../db')

const PostTag = db.define('PostTag', {
  TagId: {
    type: Sequelize.STRING
  },
  PostId: {
    type: Sequelize.STRING
  }
})

module.exports = PostTag

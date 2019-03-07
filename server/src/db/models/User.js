const Sequelize = require('sequelize')
const db = require('../db')

const User =  db.define('User', {
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: {
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  isStaff: {
    type: Sequelize.BOOLEAN
  },
  isAdmin: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = User

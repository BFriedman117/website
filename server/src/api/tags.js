const router = require('express').Router()
const {Tag} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Tag.findAll({
    attributes: ['type']
  })
    .then(tags => res.json(tags))
    .catch(next)
})

const router = require('express').Router()
const {Tag} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Tag.findAll()
    .then(tags => res.json(tags))
    .catch(next)
})

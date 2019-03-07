const router = require('express').Router()
const {PostTags} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  PostTags.findAll()
    .then(posts => res.json(posts))
    .catch(next)
})

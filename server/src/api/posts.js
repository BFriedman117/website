const router = require('express').Router()
const {Post, PostTags} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Post.findAll()
    .then(posts => res.json(posts))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Post.create(req.body.post)
  .then((post) => {
    return PostTags.create({
      PostId: post.id,
      TagId: req.body.contentTag.id
    })
  })
  .then(postTag => res.json(postTag))
  .catch(next)
})

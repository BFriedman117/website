const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/tags', require('./tags'))
router.use('/posts', require('./posts'))
router.use('/post_tags', require('./post_tags'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

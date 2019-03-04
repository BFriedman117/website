const User = require('./User')
const Post = require('./Post')
const Tag = require('./Tag')

Post.belongsTo(User)
Tag.belongsToMany(Post, {through: 'PostTags'})
Post.belongsToMany(Tag, {through: 'PostTags'})

module.exports = {
  User,
  Post,
  Tag
}

// import models
const User = require('./User');
const Post = require('./Post');

// Posts belongsTo User
Post.belongsTo(User, {
  foreignKey: 'user_id',

})

// Users have many Posts
User.hasMany(Post, {
  foreignKey: 'user_id',
});


module.exports = {
  User,
  Post,
};
// import models
const User = require('./User');
const Review = require('./Reviews');
const Books = require('./Books');


// review belongsTo User
Review.belongsTo(User, {
  foreignKey: 'user_id',

})

// Users have many Reviews
User.hasMany(Review, {
  foreignKey: 'user_id',
});


module.exports = {
  User,
  Review,
  Books,
};
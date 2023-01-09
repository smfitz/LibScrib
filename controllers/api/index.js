const router = require('express').Router();

const reviewRoutes = require('./review-routes');
const searchRoutes = require('./search-routes');
const userRoutes = require('./user-routes');
const bookRoutes = require('./book-routes');

router.use('/reviews', reviewRoutes);
router.use('/searches', searchRoutes);
router.use('/users', userRoutes);
router.use('/books', bookRoutes);

// add other routes as needed

module.exports = router;
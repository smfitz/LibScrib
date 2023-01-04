const router = require('express').Router();

const reviewRoutes = require('./review-routes');
const searchRoutes = require('./search-routes');
const userRoutes = require('./user-routes');

router.use('/reviews', reviewRoutes);
router.use('/searches', searchRoutes);
router.use('/users', userRoutes);
// add other routes as needed

module.exports = router;
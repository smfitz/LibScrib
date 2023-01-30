const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const searchRoutes = require('./search-routes.js')
const reviewRoutes = require('./review-routes.js');
const resultsRoutes = require('./results-routes.js');



router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/search', searchRoutes);
router.use('/review', reviewRoutes);
router.use('/results', resultsRoutes);


module.exports = router;



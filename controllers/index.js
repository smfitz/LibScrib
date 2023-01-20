const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const searchRoutes = require('./search.js')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/search', searchRoutes);

module.exports = router;



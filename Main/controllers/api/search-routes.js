const router = require('express').Router();
const searchResults = require('../../Assets/js/script');

// get all books
router.get('/results', async (req, res) => {
    res.render('all', {searchResults});
  });

module.exports = router;

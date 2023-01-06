const router = require('express').Router();


// get all books
router.get('/results', async (req, res) => {
    res.render('all', {searchResults});
  });

module.exports = router;

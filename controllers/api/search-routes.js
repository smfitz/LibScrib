const router = require('express').Router();


// get all books
router.get('/results', async (req, res) => {
    res.render('all');
  });

module.exports = router;

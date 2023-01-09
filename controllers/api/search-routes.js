const router = require("express").Router();
require("dotenv").config();

// get all books
router.get('/results/:book', async (req, res) => {
  const { book } = req.params;

  res.status(200).json(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${process.env.GOOGLE_API_KEY}`);

  
});

// get NYT bestsellers
router.get('/results', async (req, res) => {

  res.status(200).json(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?${process.env.NYT_API_KEY}`);

});

module.exports = router;

const router = require('express').Router();

require("dotenv").config();

// render search page
router.get("/", async (req, res) => {
  try {
    res.render("search");
  } catch (err) {
    res.status(500).json(err);
  }
});

// render search results page
router.get('/:search', async (req, res) => {
  if (!req.params.search) {
    return res.status(400).json({
      status: 'error',
      error: 'search param cannot be empty',
    });
  }
  const bookTitle = req.params.search;
  console.log(bookTitle);
  var apiBookTitle = `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`;
  // res.status(200).json(apiBookTitle);

  const response = await fetch(apiBookTitle, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  res.status(200)
  console.log(data);
  res.render("searchResults", { data });

})






module.exports = router;
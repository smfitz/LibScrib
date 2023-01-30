const router = require('express').Router();
require("dotenv").config();

// router.get("/", async (req, res) => {
//     try {
//       res.render("searchResults");
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

  router.get('/:bookTitle', async (req, res) => {
    if (!req.body) {
      return res.status(400).json({
        status: 'error',
        error: 'bookTitle param cannot be empty',
      });
    }
    const bookTitle = req.params.bookTitle;
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
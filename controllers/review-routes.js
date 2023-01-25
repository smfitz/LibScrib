const router = require('express').Router();

require("dotenv").config();
// render review page
// router.get("/", async (req, res) => {
//     try {
//       res.render("review");
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

  // render single book page
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id);
    var apiBookTitle = `https://www.googleapis.com/books/v1/volumes/${id}`;
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
    res.render("review", { data });
  
  })

  module.exports = router;
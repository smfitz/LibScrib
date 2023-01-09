const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");
require("dotenv").config();
// homepage route

router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

// search route
router.get("/search", async (req, res) => {
  try {
    res.render("search");
  } catch (err) {
    res.status(500).json(err);
  }
});

// book detail route
router.get("/review/:isbn", async (req, res) => {
  try {
    res.render("review");
  } catch (err) {
    res.status(500).json(err);
  }
});

// bestseller route
router.get("/bestsellers", async (req, res) => {
  try {
    res.render("bestsellers");
  } catch (err) {
    res.status(500).json(err);
  }
});

// signup+login+user
// router.get("/search/:book", async (req, res) => {
//   var apiBookTitle = `https://www.googleapis.com/books/v1/volumes?q=batman`;

//   const response = await fetch(apiBookTitle, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const data = await response.json();

//   console.log(data);
// });

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
  }
  res.render("signup");
});


module.exports = router;

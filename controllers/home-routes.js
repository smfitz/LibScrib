const router = require('express').Router();
const { User } = require("../models");
const withAuth = require('../utils/auth')


// homepage route

router.get('/', async (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});

// search route
router.get('/search', async (req, res) => {
    try {
        res.render('search');
    } catch (err) {
        res.status(500).json(err);
    }
});

// bestseller route
router.get('/bestsellers', async (req, res) => {
    try {
        res.render('bestsellers');
    } catch (err) {
        res.status(500).json(err);
    }
});

// signup+login+user
router.get('/user', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
          attributes: { exclude: ['password'] },
          order: [['name', 'ASC']],
        });
    
        const users = userData.map((project) => project.get({ plain: true }));
    
        res.render('homepage', {
          users,
          logged_in: req.session.logged_in,
        });
      } catch (err) {
        res.status(500).json(err);
      }
    });



module.exports = router;
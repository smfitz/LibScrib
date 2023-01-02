const router = require('express').Router();


// included for testing purposes
const searchResults = require('../Assets/js/script');

router.get('/', async (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
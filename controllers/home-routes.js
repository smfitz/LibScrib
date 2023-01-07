const router = require('express').Router();


router.get('/', async (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/search', async (req, res) => {
    try {
        res.render('search');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/bestsellers', async (req, res) => {
    try {
        res.render('bestsellers');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/user', async (req, res) => {
    try {
        res.render('user');
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;
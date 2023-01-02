const router = require('express').Router();
const { Review } = require('../../models');

// get all reviews
router.get('/', (req, res) => {
    console.log("gathering all the lil review posts for you brb");
    Review.findAll({
       attributes: ["id", "isbn", "title", "text", "user_id"],
    })
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});

// post a review
// do we want to force users to log in before posting a review?
router.post('/', (req, res) => {
    console.log("otw to post your review brb");
    Review.create({
        title: req.body.title,
        text: req.body.text,
        user_id: req.session.user_id
    })
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});

// delete a review
router.delete('/:id', (req, res) => {
    Review.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((dbReviewData) => {
        if (!dbReviewData) {
            res.status(404).json({
                message: "No post found with this id"
            });
            return;
        }
        res.json(dbReviewData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;
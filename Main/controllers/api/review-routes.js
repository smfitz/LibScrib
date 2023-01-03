const router = require('express').Router();
const { Review } = require('../../models');
const { withAuth } = require('../../utils/auth');

// Post a review
router.post('/', withAuth, async (req, res) => {
    try {
        const newReview = await Review.create(req.body)
        res.json(newReview)
    }
    catch(err) {
        res.json(err);
    }
})

// Get Review by ID
router.get('/:id', async (req, res) => {
    try{
        const result = await Review.findByPk(req.params.id);
        if (result) {
            const review = result.get({plain:true});
            res.status(200).json(review);
        } else {
            res.status(404).json({"error": "Review not found"});
        }
    }
    catch(err) {
        res.status(500).json(err);
    }
})

// Get all Reviews
router.get('/', async (req, res) => {
    try{
        const result = await Review.findAll();
        const reviews = result.map((review) => {
            return review.get({plain: true})
        })
        res.status(200).json(reviews);
    }
    catch(err) {
        res.status(500).json(err);
    }
});

// Update review
router.put('/:id', withAuth, async (req, res) => {
    try {
        const result = await Review.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        if (!result) {
            res.status(404).json({"message": "Review not found"})
        }
        res.status(200).json(result);

    }
    catch(err) {
        res.status(500).json(err);
    }
})

// Delete a review
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const result = await Review.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!result) {
            res.status(404).json({"message": "Review not found"})
        }
        res.status(200).json(result);

    }
    catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;
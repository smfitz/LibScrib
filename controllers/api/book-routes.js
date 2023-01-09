const router = require('express').Router();
const { Books } = require('../../models');


// create book in storage
router.post('/', async (req, res) => {
    try{
        const bookData = await Books.create(req.body);
        console.log(bookData)
    }
    catch (err) {
        res.json(err)
    }
});


// get all books in sql db

router.get('/', async (req, res) => {
    try{
        const result = await Books.findAll();
        const books = result.map((book) => {
            return book.get({plain: true})
        })
        res.status(200).json(books);
    }
    catch(err) {
        res.status(500).json(err);
    }
});


// get book by isbn
router.get('/:isbn', async (req, res) => {
    try{
        const result = await Books.findOne({where: {isbn: req.params.isbn}});
        if (result) {
            const book = result.get({plain:true});
            res.status(200).json(book);
        } else {
            res.status(404).json({"error": "Review not found"});
        }
    }
    catch(err) {
        res.status(500).json(err);
    }
});


module.exports = router;
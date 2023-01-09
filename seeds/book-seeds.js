const { Books } = require("../models");

const booksData = [
    {
        title: "It Starts With Us",
        author: "Colleen Hoover",
        isbn: "9781668001226",
        image: "https://storage.googleapis.com/du-prd/books/images/9781668001226.jpg"
    },
    {
        title: "Lessons in Chemistry",
        author: "Bonnie Garmus",
        isbn: "9780385547345",
        image: "https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg"
    },
    {
        title: "It Ends With Us",
        author: "Colleen Hoover",
        isbn: "9781501110368",
        image: "https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg"
    },
    {
        title: "Verity",
        author: "Colleen Hoover",
        isbn: "9781538724736",
        image: "https://storage.googleapis.com/du-prd/books/images/9781791392796.jpg"
    },
    {
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        isbn: "9781501161933",
        image: "https://storage.googleapis.com/du-prd/books/images/9781501161933.jpg"
    },
    {
        title: "Mad Honey",
        author: "Jodi Picoult and Jennifer Finney Boylan",
        isbn: "9781984818393",
        image: "https://storage.googleapis.com/du-prd/books/images/9781984818386.jpg"
    },
    {
        title: "Ugly Love",
        author: "Colleen Hoover",
        isbn: "9781476753188",
        image: "https://storage.googleapis.com/du-prd/books/images/9781476753195.jpg"
    },
    {
        title: "Tomorrow, and Tomorrow, and Tomorrow",
        author: "Gabrielle Zevin",
        isbn: "9780593321201",
        image: "https://storage.googleapis.com/du-prd/books/images/9780593321201.jpg"
    },
    {
        title: "The Boys From Biloxi",
        author: "John Grisham",
        isbn: "9780385548922",
        image: "https://storage.googleapis.com/du-prd/books/images/9780385548922.jpg"
    },
    {
        title: "Desert Star",
        author: "Michael Connelly",
        isbn: "9780316421461",
        image: "https://storage.googleapis.com/du-prd/books/images/9780316485654.jpg"
    }
]

const seedBooks = () => Books.bulkCreate(booksData);

module.exports = seedBooks
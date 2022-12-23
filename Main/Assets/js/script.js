var searchHistory = [];
// NYT API key - figure out how to store this in the env
// require('dotenv').config();

// API_KEY
var nytApiKey = '0jkyGzz6qXXhreaR5CNMfI7kY6Z7LTyt'
var googleApiKey = 'AIzaSyDcaV-fHJ_A3ONbUKQtgeDIS7RtCsHj9Ac'


$(`#searchBtn`).on(`click`, function() {

    // stores the user search query in the variable 'bookTitle'
    var bookTitle = $(`#searchBox`).val();

    fetchBookByTitle(bookTitle);

})


// function to retrieve the latitude and longitude for the user's requested city
var fetchBookByTitle = function(bookTitle) {

    // concatenates the API call, the bookTitle variable, and the apiKey variable into the apiBookTitle variable
    var apiBookTitle = `https://api.nytimes.com/svc/books/v3/reviews.json?title=${bookTitle}&api-key=${nytApiKey}`;
    // var apiBookTitle = `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${googleApiKey}`;
    

    // fetch request for the lat and lon of the user's requested city
    fetch(apiBookTitle)
        .then(function(response) {
            if (response.ok) {
                console.log(`response`, response);
                response.json()
        
        .then(function (data) {
            console.log(`data`, data);
            console.log(`Book Title:`, data.results[0].book_title);
            console.log(`Book Author:`, data.results[0].book_author);
            console.log(`ISBN:`, data.results[0].isbn13[0]);
            console.log(`Review URL, subscription required:`, data.results[0].url);


        })

        .catch((error) => console.error('Fetch Error:', error));
        
        }
    })
}


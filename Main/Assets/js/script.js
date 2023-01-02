// var searchResults = [];
// require('dotenv').config();

// // NYT API key - figure out how to store this in the env
// // require('dotenv').config();

// // API_KEY
// // var nytApiKey = "PASTE KEY HERE";
// var googleApiKey = "PASTE KEY HERE";

// $(`#searchBtn`).on(`click`, function () {
//   // stores the user search query in the variable 'bookTitle'
//   var bookTitle = $(`#searchBox`).val();

//   fetchBookByTitleGoogle(bookTitle);
// });


// // function to retrieve information for the user's requested book
// var fetchBookByTitleGoogle = function (bookTitle) {
//   // concatenates the API call, the bookTitle variable, and the apiKey variable into the apiBookTitle variable
//   var apiBookTitle = `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${process.env.API_KEY}`;

//   // fetch request for the user's requested book
//   fetch(apiBookTitle).then(function (response) {
//     if (response.ok) {
//       console.log(`response`, response);
//       response
//         .json()

//         .then(function (data) {
//           for (var i = 0; i <= data.items.length; i++) {
//             console.log(`data`, data);           
//             // console.log(`Book Title:`, data.items[i].volumeInfo.title);
//             // console.log(`Book Author:`, data.items[i].volumeInfo.authors[0]);
//             // console.log(
//             //   `ISBN 13:`,
//             //   data.items[i].volumeInfo.industryIdentifiers[1].identifier
//             // );
//             // console.log(`Description:`, data.items[i].searchInfo.textSnippet);

//             var searchItem = {};
//             searchItem["title"] = data.items[i].volumeInfo.title;
//             searchItem["author"] = data.items[i].volumeInfo.authors[0];
//             searchItem["isbn"] =
//               data.items[i].volumeInfo.industryIdentifiers[1].identifier;
//             // searchItem["description"] = data.items[i].searchInfo.textSnippet;

//             searchResults.push(searchItem);
//           }
//         })
//         .catch((error) => console.error("Fetch Error:", error));
//     }
//   });
// };


// // DO NOT USE NYT, USE GOOGLE API
// // var fetchBookByTitleNYT = function (bookTitle) {
// //   var apiBookTitle = `https://api.nytimes.com/svc/books/v3/reviews.json?title=${bookTitle}&api-key=${nytApiKey}`;

// //   fetch(apiBookTitle).then(function (response) {
// //     if (response.ok) {
// //       console.log(`response`, response);
// //       response
// //         .json()

// //         .then(function (data) {
// //           console.log(`data`, data);
// //           console.log(`Book Title:`, data.results[0].book_title);
// //           console.log(`Book Author:`, data.results[0].book_author);
// //           console.log(`ISBN:`, data.results[0].isbn13[0]);
// //           console.log(
// //             `Review URL, subscription required:`,
// //             data.results[0].url
// //           );
// //           var searchItem = {};
// //           searchItem["title"] = data.results[0].book_title;
// //           searchItem["author"] = data.results[0].book_author;
// //           searchItem["isbn"] = data.results[0].isbn13[0];
// //         })

// //         .catch((error) => console.error("Fetch Error:", error));
// //     }
// //   });
// // };


// module.exports = searchResults
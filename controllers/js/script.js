// var searchResults = [];
// var bestSellersList = [];
// // require('dotenv').config();


// // API_KEY
// // var nytApiKey = "copy here";
// // var googleApiKey = "copy here";

// // $(`#submit`).on('click', function () {
// //   // stores the user search query in the variable 'bookTitle'
// //   var bookTitle = $(`#search`).val();
// //   // fetch data
// //   fetchBookByTitleGoogle(bookTitle);
// // });


// // function to retrieve information for the user's requested book
// var fetchBookByTitleGoogle = function (bookTitle) {
//   // concatenates the API call, the bookTitle variable, and the apiKey variable into the apiBookTitle variable
//   var apiBookTitle = `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${googleApiKey}`;

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


// // Best Seller List NYT
// var fetchBestSellersNYT = function () {
//   var apiBestSell = `https://api.nytimes.com/svc/books/v3/lists.json?list-name=combined-print-and-e-book-fiction&api-key=${nytApiKey}`;

//   fetch(apiBestSell, {
//     method: 'get',
//   })
//   .then(response => { return response.json(); })
//   .then(function(data) { 
//     // console.log(data);
//     for (var i = 0; i <= 5; i++) {
//       var bestSeller = {};

//       bestSeller["title"] = data.results[i].book_details[0].title;
//       bestSeller["author"] = data.results[i].book_details[0].author;
//       bestSeller["isbn"] = data.results[i].isbns[0].isbn13;

//       bestSellersList.push(bestSeller);
//     }
//   })
//   .catch((error) => console.error("Fetch Error:", error));
// }

// fetchBestSellersNYT();

// console.log(bestSellersList);




// module.exports = searchResults
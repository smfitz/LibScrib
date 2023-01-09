var searchResults = [];
// var searchContainer = document.querySelector("#");

async function googleSearch(event) {
  const bookTitle = document.querySelector(".main-search").value;
  // const baseUrl = `http://localhost:3001/api/searches/results`;

  var apiBookTitle = `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`;

  const response = await fetch(apiBookTitle, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);

// async function getInfo(e) {
//   var searchResults = [""];
//   e.preventDefault;
//   const res = await fetch(baseUrl + `/` + bookTitle, {
//     method: "GET",
//   });

//   // complete API call
//   var apiUrl = await res.json();

<<<<<<< Updated upstream
  //   fetch(apiUrl).then(function (response) {
  //     if (response.ok) {
  //       console.log(`response`, response);
  //       response
  //         .json()

  //         .then(function (data) {
  //           for (var i = 1; i <= data.items.length; i++) {
  //             console.log(`data`, data);

  //             var searchItem = {};

  //             searchItem["title"] = data.items[i].volumeInfo.title;

  //             searchItem["author"] = data.items[i].volumeInfo.authors[0];

  //             searchItem["isbn"] = data.items[i].volumeInfo.industryIdentifiers[1].identifier;

  //             if (data.items[i].volumeInfo.imageLinks === true) {
  //               searchItem["image"] === data.items[i].volumeInfo.imageLinks.smallThumbnail;
  //             } else { searchItem["image"] === "No image available" };

  //             if (data.items[i].searchInfo.textSnippet === true) {
  //               searchItem["description"] === data.items[i].searchInfo.textSnippet;
  //             } else { searchItem["description"] === "No description available" };
=======
//   fetch(apiUrl).then(function (response) {
//     if (response.ok) {
//       console.log(`response`, response);
//       response
//         .json()

//         .then(function (data) {
//           for (var i = 1; i <= data.items.length; i++) {
//             console.log(`data`, data);
>>>>>>> Stashed changes

//             var searchItem = {};

//             searchItem["title"] = data.items[i].volumeInfo.title;

//             searchItem["author"] = data.items[i].volumeInfo.authors[0];

//             searchItem["isbn"] = data.items[i].volumeInfo.industryIdentifiers[1].identifier;

//             if (data.items[i].volumeInfo.imageLinks === true) {
//               searchItem["image"] === data.items[i].volumeInfo.imageLinks.smallThumbnail;
//             } else { searchItem["image"] === "No image available" };

//             if (data.items[i].searchInfo.textSnippet === true) {
//               searchItem["description"] === data.items[i].searchInfo.textSnippet;
//             } else { searchItem["description"] === "No description available" };

//             searchResults.push(searchItem);
//             console.log(searchResults);

//           }
//         })

//         // running this code always throws errors, even when I get the results I want. why?
//         .catch((error) => console.error("Fetch Error:", error));
//     }
//   });

<<<<<<< Updated upstream
  //         // running this code always throws errors, even when I get the results I want. why?
  //         .catch((error) => console.error("Fetch Error:", error));
  //     }
  //   });
}
=======
>>>>>>> Stashed changes

document
  .querySelector("#searchBar")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      googleSearch();
    }
  });

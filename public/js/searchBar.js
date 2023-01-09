var searchResults = [];
var searchContainer = document.querySelector("#mainSearchContainer");

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

  printSearchData(data);
}

var printSearchData = function (data) {

  console.log("printSearchData working")
  console.log("data", data)

  searchContainer.innerHTML = "";

  for (var i = 0; i <= data.length; i++) {

    var id = i + 1;
    var title = data.items[i].volumeInfo.title;
    var author = data.items[i].volumeInfo.authors[1];
    var isbn = data.items[i].industryIdentifiers[0];
    var imageLink = data.items[i].volumeInfo.imageLinks.smallThumbnail;

    var col = document.createElement("div");
    var card = document.createElement("div");
    var cardBody = document.createElement("div");
    var bookTitle = document.createElement("h5");
    var bookThumbnail = document.createElement("img");
    var bookAuthor = document.createElement("p");
    var bookIsbn = document.createElement("p");
    col.append(card);
    card.append(cardBody);
    cardBody.append(bookTitle, bookThumbnail, bookAuthor, bookIsbn);

    col.setAttribute('class', 'col-md');
    card.setAttribute('class', 'card bg-primary h-100 text-white');
    cardBody.setAttribute('class', 'card-body p-2');
    bookTitle.setAttribute('class', 'card-title');
    bookAuthor.setAttribute('class', 'card-text');
    bookIsbn.setAttribute('class', 'card-text');
    bookThumbnail.setAttribute('src', imageLink);

    // add content to elements
    bookTitle.textContent = title;
    bookAuthor.textContent = author;
    bookIsbn.textContent = isbn;
    
    searchContainer.append(col);


  }
};

// async function getInfo(e) {
//   var searchResults = [""];
//   e.preventDefault;
//   const res = await fetch(baseUrl + `/` + bookTitle, {
//     method: "GET",
//   });

//   // complete API call
//   var apiUrl = await res.json();

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

//             searchResults.push(searchItem);
//             console.log(searchResults);

//           }
//         })

//         // running this code always throws errors, even when I get the results I want. why?
//         .catch((error) => console.error("Fetch Error:", error));
//     }
//   });

document.querySelector("#searchBar").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    googleSearch();
  }
});

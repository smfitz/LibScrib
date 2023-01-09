// var searchResults = [];

var searchContainer = document.querySelector("#mainSearchContainer");

async function googleSearch(event) {
  const bookTitle = document.querySelector(".main-search").value;
  // const baseUrl = `http://localhost:3001/api/searches/results`;


  console.log("Book title", bookTitle)

  var apiBookTitle = `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`;

  const response = await fetch(apiBookTitle, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  printSearchData(data);
  bookStore(data)
}


var printSearchData = function (data) {

  console.log("printSearchData working")
  console.log("DATA", data)

  searchContainer.innerHTML = "";

  for (var i = 0; i <6; i++) {

    console.log("WELCOME TO THE FORLOOP")

    var title = data.items[i].volumeInfo.title;
    var author = data.items[i].volumeInfo.authors[0];
    var isbn = data.items[i].volumeInfo.industryIdentifiers[0].identifier;
    var imageLink = data.items[i].volumeInfo.imageLinks.thumbnail;

    var col = document.createElement("div");
    var card = document.createElement("div");
    var cardBody = document.createElement("div");
    var bookTitle = document.createElement("h5");
    var link = document.createElement("a")
    var bookThumbnail = document.createElement("img");
    var bookAuthor = document.createElement("p");
    var bookIsbn = document.createElement("p");
    col.append(card);
    card.append(cardBody);
    cardBody.append(bookTitle, bookThumbnail, bookAuthor, bookIsbn);

    col.setAttribute("class", "card-grid-space");
    card.setAttribute("class", "card");
    card.setAttribute("id", "card");
    cardBody.setAttribute("class", "card-body");

    bookTitle.setAttribute("class", "card-title");
    bookTitle.setAttribute("id", "bookTit");

    bookAuthor.setAttribute("class", "card-text");
    bookAuthor.setAttribute("id", "bookAuth");

    bookIsbn.setAttribute("class", "card-text");
    bookIsbn.setAttribute("id", "bookIsbn");
    link.setAttribute("href", "/review/" + isbn)

    bookThumbnail.setAttribute("src", imageLink);
    bookThumbnail.setAttribute("id", "bookImg");
    bookThumbnail.setAttribute("height", "250px");


    // add content to elements
    bookTitle.textContent = title;
    bookAuthor.textContent = author;
    bookIsbn.textContent = isbn;

    col.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(bookTitle);
    cardBody.appendChild(link);
    link.appendChild(bookThumbnail);
    cardBody.appendChild(bookAuthor);
    cardBody.appendChild(bookIsbn);

    searchContainer.append(col);


  }
};



// // store to sql?
var bookStore = function (data) {
  async function bookAddDb(searchItem) {

    var author = searchItem.author
    var title = searchItem.title
    var isbn = searchItem.isbn

    const response = await fetch('/api/books', {
      method: 'POST',
      body: JSON.stringify({ author, title, isbn }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      console.log("added to db")

    } else {
      console.log("sorry charlie no book for u")
      alert('Failed to add data');
    }
  }
  for (var i = 0; i < 6 ; i++) {

    var searchItem = {};

    if (data.items[i].volumeInfo.title) {
      searchItem["title"] = data.items[i].volumeInfo.title;
    } else { searchItem["title"] === "title unavailable" };


    searchItem["author"] = data.items[i].volumeInfo.authors[0];


    if (data.items[i].volumeInfo.industryIdentifiers) {
      searchItem["isbn"] = data.items[i].volumeInfo.industryIdentifiers[0].identifier;
    } else { searchItem["isbn"] === "isbn unavailable" };

    bookAddDb(searchItem);
    console.log(searchItem);


  }
}



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


document
  .querySelector("#searchBar")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      googleSearch();
    }
  });

// document.addEventListener('DOMContentLoaded', function () {

//   var bookTemplate = document.querySelector("#bookTemplate").innerHTML;

//   var compliedBookTemplate = Handlebars.compile(bookTemplate);

// }, false);


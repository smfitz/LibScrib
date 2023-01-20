console.log("linked");

// var searchContainer = document.querySelector("#mainSearchContainer");


const searchHandler = async (event) => {
    event.preventDefault();

    const bookTitle = document.querySelector('input[name="search"]').value.trim();
    console.log(bookTitle);

    const response = await fetch(`/search/results/${bookTitle}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace(`/search/results/${bookTitle}`);
        console.log("book results found")
    } else {
        alert('No results found');
    }
};


document
    .querySelector(".search-bar")
    .addEventListener("submit", searchHandler)
// async function googleSearch(event) {
//   const bookTitle = document.querySelector(".main-search").value;

//   console.log("Book title", bookTitle)

//   var apiBookTitle = `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`;

//   const response = await fetch(apiBookTitle, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();

//   printSearchData(data);
//   bookStore(data)
// }


// var printSearchData = function (data) {

//   console.log("printSearchData working")
//   console.log("DATA", data)

//   searchContainer.innerHTML = "";

//   for (var i = 0; i < 6; i++) {

//     console.log("WELCOME TO THE FORLOOP")

//     var title = data.items[i].volumeInfo.title;
//     var author = data.items[i].volumeInfo.authors[0];
//     var isbn = data.items[i].volumeInfo.industryIdentifiers[0].identifier;
//     var imageLink = data.items[i].volumeInfo.imageLinks.thumbnail;

//     var col = document.createElement("div");
//     var card = document.createElement("div");
//     var cardBody = document.createElement("div");
//     var bookTitle = document.createElement("h5");
//     var link = document.createElement("a")
//     var bookThumbnail = document.createElement("img");
//     var bookAuthor = document.createElement("p");
//     var bookIsbn = document.createElement("p");
//     col.append(card);
//     card.append(cardBody);
//     cardBody.append(bookTitle, bookThumbnail, bookAuthor, bookIsbn);

//     col.setAttribute("class", "card-grid-space");
//     card.setAttribute("class", "card");
//     card.setAttribute("id", "card");
//     cardBody.setAttribute("class", "card-body");

//     bookTitle.setAttribute("class", "card-title");
//     bookTitle.setAttribute("id", "bookTit");

//     bookAuthor.setAttribute("class", "card-text");
//     bookAuthor.setAttribute("id", "bookAuth");

//     bookIsbn.setAttribute("class", "card-text");
//     bookIsbn.setAttribute("id", "bookIsbn");
//     link.setAttribute("href", "/review/" + isbn)

//     bookThumbnail.setAttribute("src", imageLink);
//     bookThumbnail.setAttribute("id", "bookImg");
//     bookThumbnail.setAttribute("height", "250px");


//     // add content to elements
//     bookTitle.textContent = title;
//     bookAuthor.textContent = author;
//     bookIsbn.textContent = isbn;

//     col.appendChild(card);
//     card.appendChild(cardBody);
//     cardBody.appendChild(bookTitle);
//     cardBody.appendChild(link);
//     link.appendChild(bookThumbnail);
//     cardBody.appendChild(bookAuthor);
//     cardBody.appendChild(bookIsbn);

//     searchContainer.append(col);


//   }
// };



// // // store to sql?
// var bookStore = function (data) {
//   async function bookAddDb(searchItem) {

//     var author = searchItem.author
//     var title = searchItem.title
//     var isbn = searchItem.isbn
//     // var description = searchItem.description
//     var image = searchItem.image

//     const response = await fetch('/api/books', {
//       method: 'POST',
//       body: JSON.stringify({ author, title, isbn, image }),
//       headers: { 'Content-Type': 'application/json' },
//     });
//     if (response.ok) {
//       console.log("added to db")

//     } else {
//       console.log("sorry charlie no book for u")
//       alert('Failed to add data');
//     }
//   }
//   for (var i = 0; i < 6; i++) {

//     var searchItem = {};

//     if (data.items[i].volumeInfo.title) {
//       searchItem["title"] = data.items[i].volumeInfo.title;
//     } else { searchItem["title"] === "title unavailable" };


//     searchItem["author"] = data.items[i].volumeInfo.authors[0];


//     if (data.items[i].volumeInfo.industryIdentifiers) {
//       searchItem["isbn"] = data.items[i].volumeInfo.industryIdentifiers[0].identifier;
//     } else { searchItem["isbn"] === "isbn unavailable" };

//     searchItem["image"] = data.items[i].volumeInfo.imageLinks.thumbnail;


//     // searchItem["description"] === data.items[i].searchInfo.textSnippet;

//     console.log(searchItem);
//     bookAddDb(searchItem);



//   }
// }






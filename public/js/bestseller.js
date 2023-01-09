var bestSellerList = [];

async function nytFetch(event) {
  // to protect API key (currently not working)
  // const baseUrl = `https://localhost:3000/api/searches/results`;

  // const res = await fetch(baseUrl, {
  //   method: "GET",
  // });

  // var apiUrl = await res.json();

  var apiURL = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=0jkyGzz6qXXhreaR5CNMfI7kY6Z7LTyt`;

  // fetch from api
  const response = await fetch(apiURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);

  //   <div class="card-grid-space">
  //   <div class="num">02</div>
  //   <div class="card card-2"></div>
  // </div>

  var cardHolder = document.querySelector(".cards-wrapper");

  for (var i = 0; i < 6; i++) {
    // from api
    var title = data.results.lists[0].books[i].title;
    var author = data.results.lists[0].books[i].author;
    var isbn = data.results.lists[0].books[i].primary_isbn13;
    var img = data.results.lists[0].books[i].book_image;
    console.log(title, author, isbn, img);

    var col = document.createElement("div");
    var card = document.createElement("div");
    var cardBody = document.createElement("div");
    var bookTitle = document.createElement("h5");
    var bookThumbnail = document.createElement("img");
    var bookAuthor = document.createElement("p");
    var bookIsbn = document.createElement("p");

    col.setAttribute("class", "card-grid-space");
    card.setAttribute("class", "card");
    cardBody.setAttribute("class", "card-body");
    bookTitle.setAttribute("class", "card-title");
    bookAuthor.setAttribute("class", "card-text");
    bookIsbn.setAttribute("class", "card-text");
    bookThumbnail.setAttribute("src", img);

    bookTitle.textContent = title;
    bookAuthor.textContent = author;
    bookIsbn.textContent = isbn;

    col.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(bookTitle);
    cardBody.appendChild(bookThumbnail);
    cardBody.appendChild(bookAuthor);
    cardBody.appendChild(bookIsbn);

    cardHolder.append(col);
  }
}

nytFetch();

// var fetchBestSellersNYT = function () {
//     var apiBestSell = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${process.env.NYT_API_KEY}`

//     fetch(apiBestSell, {
//       method: 'get',
//     })
//     .then(response => { return response.json(); })
//     .then(function(data) {
//       console.log(data);
//       for (var i = 0; i < 5; i++) {
//         var bestSeller = {};

//         bestSeller["title"] = data.results.lists[0].books[i].title;
//         bestSeller["author"] = data.results.lists[0].books[i].author;
//         bestSeller["isbn"] = data.results.lists[0].books[i].primary_isbn13;
//         bestSeller["image"] = data.results.lists[0].books[i].book_image;

//         bestSellersList.push(bestSeller);
//       }
//     })
//     .catch((error) => console.error("Fetch Error:", error));
//   }

//   fetchBestSellersNYT();

//   console.log(bestSellersList);

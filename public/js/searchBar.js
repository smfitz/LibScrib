var searchResults = [];

async function googleSearch(event) {
  const bookTitle = document.querySelector(".main-search").value;
  const baseUrl = `http://localhost:3001/api/searches/results`;

  document.querySelector("#searchBtn").addEventListener("click", getInfo);

  async function getInfo(e) {
    e.preventDefault;
    const res = await fetch(baseUrl + `/` + bookTitle, {
      method: "GET",
    });

    // complete API call
    var apiUrl = await res.json();

    fetch(apiUrl).then(function (response) {
      if (response.ok) {
        console.log(`response`, response);
        response
          .json()

          .then(function (data) {
            for (var i = 0; i <= data.items.length; i++) {
              console.log(`data`, data);

              var searchItem = {};
              searchItem["title"] = data.items[i].volumeInfo.title;
              searchItem["author"] = data.items[i].volumeInfo.authors[0];
              searchItem["isbn"] =
                data.items[i].volumeInfo.industryIdentifiers[1].identifier;
                if (data.items[i].searchInfo.textSnippet === true) {
              searchItem["description"] = data.items[i].searchInfo.textSnippet;
                } else { data.items[i].searchInfo.textSnippet === "No description available"};
              searchResults.push(searchItem);
              console.log(searchResults);

            }
          })

          // running this code always throws errors, even when I get the results I want. why?
          .catch((error) => console.error("Fetch Error:", error));
      }
    });
  }
}

document.querySelector("#searchBtn").addEventListener("click", googleSearch);
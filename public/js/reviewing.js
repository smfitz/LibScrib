console.log("linked");
var pathArray = window.location.pathname.split( '/' );
console.log(pathArray);
var pathIsbn = pathArray[2];
console.log(pathIsbn);

var bookIMG = document.querySelector('.book-image');
// var bookDesc = document.querySelector('.book-description');



async function bookInfoFetch(event) {
    const response = await fetch('/api/books/' + pathIsbn, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    console.log(data);

    appendBook(data);
}

bookInfoFetch();

var appendBook = function (data) {
    console.log('appending book data');
    console.log("DATA", data);

    var imageLink = data.image;

    bookIMG.setAttribute("src", imageLink);

}
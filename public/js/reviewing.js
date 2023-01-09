console.log("linked");
var pathArray = window.location.pathname.split( '/' );
console.log(pathArray);
var pathIsbn = pathArray[2];

async function bookInfoFetch(event) {
    const response = await fetch('/api/books/' + pathIsbn, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    console.log(data);
}

bookInfoFetch();

console.log("clicky clack")
const bookSelectionHandler = async (event) => {
  event.preventDefault();

  // const card = document.querySelector('.card');
  const bookTit = document.querySelector('#bookTit').value.trim();
  const bookAuth = document.querySelector('#bookAuth').value.trim();
  const bookIsbn = document.querySelector('#bookIsbn').value.trim();
  // const bookImg = document.querySelector('#bookImg').value

  if (email && password) {
    const response = await fetch('/api/books', {
      method: 'POST',
      body: JSON.stringify({ bookTit, bookAuth, bookIsbn }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log("book added to db")
    } else {
      alert('Failed to add book');
    }
  }
};

document
  .querySelector('.card-body')
  .addEventListener('click', bookSelectionHandler);


// // async function choiceEventHandler(event) {
// //     event.preventDefault();
// //     const book_title = document.querySelector('#').value;
// //     const book_author = document.querySelector('#description').value;
// //     const book_isbn = document.querySelector('#guest_name').value;
// //     const book_image = document.querySelector('#guest_name').value;
// //     const book_description = document.querySelector('#guest_name').value;

// //     // Send fetch request to add a new dish
// //     const response = await fetch(`/api/dish`, {
// //       method: 'POST',
// //       body: JSON.stringify({
// //         book_title,
// //         book_author,
// //         book_isbn,
// //         book_image,
// //         book_description,
// //       }),
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //     });
// //     //if the dish is added, the 'all' template will be rerendered
// //     if (response.ok) {
// //       document.location.replace('/');
// //     } else {
// //       alert('Failed to add book');
// //     }
// //   }
  
// //   document.querySelector('.new-dish-form').addEventListener('click', choiceEventHandler);
    
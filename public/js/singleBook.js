console.log("linked");



const reviewPageHandler = async (event) => {
  event.preventDefault();

  const id = document.querySelector('input[name="vol-id"]').value.trim();
  console.log(id + "from singlebook");

  const response = await fetch(`/search/review/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace(`/search/review/${id}`);
    console.log("book retrieved successfully")
  } else {
    alert('Failed to retrieve book');
  }
};

document
  .querySelector('.option')
  .addEventListener('submit', reviewPageHandler);
  

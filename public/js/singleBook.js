// console.log("linked");



// const reviewPageHandler = async (event) => {
//   event.preventDefault();

//   const id = document.querySelector('input[name="vol-id"]').value.trim();
//   console.log(id + "from singlebook");

//   const response = await fetch(`/review/${id}`, {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if (response.ok) {
//     document.location.replace(`/review/${id}`);
//     console.log("book retrieved successfully")
//   } else {
//     alert('Failed to retrieve book');
//   }
// };

// document
//   .getElementById('#btn')
//   .addEventListener('click', reviewPageHandler);

if (document.addEventListener) {
  document.addEventListener("click", handleClick, false);
}
else if (document.attachEvent) {
  document.attachEvent("onclick", handleClick);
}

function handleClick(event) {
  event = event || window.event;
  event.target = event.target || event.srcElement;

  var element = event.target;

  // Climb up the document tree from the target of the event
  while (element) {
      if (element.nodeName === "BUTTON" && /option/.test(element.className)) {
          // The user clicked on a <button> or clicked on an element inside a <button>
          // with a class name called "foo"
          doSomething(element);
          break;
      }

      element = element.parentNode;
  }
}

async function  doSomething(button) {
  const id = document.querySelector('input[name="vol-id"]').value.trim();
    console.log(id + " from singlebook");
  
    const response = await fetch(`/review/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace(`/review/${id}`);
      console.log("book retrieved successfully")
    } else {
      alert('Failed to retrieve book');
    }
};


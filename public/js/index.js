// Scroll Animation //

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

// USER PAGE SIGN IN FUNCTIONALITY

let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

// signinBtn.onclick = function() {
//     nameField.style.maxHeight = "0";
//     title.innerHTML = "Sign In"
// }

// signupBtn.onclick = function() {
//     nameField.style.maxHeight = "65px"
//     title.innerHTML = "Sign Up"
// }

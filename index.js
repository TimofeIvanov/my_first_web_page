console.log("hello")
let button = document.querySelector(".button")
let body = document.querySelector(".body")
console.log(button)
button.addEventListener('click', function () {
    body.style.backgroundColor = "black";
});

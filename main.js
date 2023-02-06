const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav__elements");

let toggleMode = document.getElementById("toggleMode");


hamburger.onclick = function () {
    menu.classList.toggle("show");
}

toggleMode.addEventListener("click", function() {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
})
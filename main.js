const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav__elements"); 


hamburger.onclick = function () {
    menu.classList.toggle("show");
}
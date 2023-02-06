const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav__elements");
let logo = document.getElementById("logo")

let toggleMode = document.getElementById("toggleMode");


hamburger.onclick = function () {
    menu.classList.toggle("show");
}

toggleMode.addEventListener("click", function() {
    document.body.classList.toggle("darkTheme")
    if (toggleMode.className == "fa fa-toggle-on") {
        toggleMode.className = "fa fa-toggle-off"
    } else {
        toggleMode.className = "fa fa-toggle-on"
    }
})
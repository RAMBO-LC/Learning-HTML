var a = document.querySelector("h1");
var b = document.querySelector("body");

a.addEventListener("click", function () {
    if (b.style.backgroundColor === "black") {

        b.style.backgroundColor = "white";
        b.style.color = "black"

        a.innerHTML = "Light Mode"
    }
    else {

        b.style.backgroundColor = "black";
        b.style.color = "white"

        a.innerHTML = "dark Mode"

    }
})
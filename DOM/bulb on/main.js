var a = document.querySelector("#bulb");
var b = document.querySelector("body");

var flag = 0;

a.addEventListener("click", function () {
    if (a.innerHTML === "ON") {
        a.style.backgroundColor = "grey"
        b.style.backgroundColor = "lightgray"

        a.innerHTML = "OFF";
        console.log("LIGHT ON")
    }
    else {
        a.style.backgroundColor = "yellow"
        b.style.backgroundColor = "lightyellow"

        a.innerHTML = "ON";
        console.log("LIGHT OFF")

    }

})
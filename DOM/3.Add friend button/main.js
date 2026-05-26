var a = document.querySelector("button");

a.addEventListener("click", function () {

    if (a.innerHTML === "Add Friend") {
        a.innerHTML = "Request Sent";
        a.style.backgroundColor = "grey";

        setTimeout(function () {
            a.innerHTML = "UnFollow";
            a.style.backgroundColor = "green";
        }, 2500);

    } else if (a.innerHTML === "UnFollow") {
        a.innerHTML = "Add Friend";
        a.style.backgroundColor = "cornflowerblue";
    }

});
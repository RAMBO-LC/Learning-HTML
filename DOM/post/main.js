var like = document.querySelector(".ri-heart-3-line");
var image = document.querySelector("#box2 img");
var bigLike = document.querySelector("#big-like");

like.addEventListener("click", function () {
    if (like.innerHTML === "like") {
        like.innerHTML = "liked";
        like.classList.remove("ri-heart-3-line");
        like.classList.add("ri-heart-3-fill");
        console.log("liked")
    }
    else if (like.innerHTML === "liked") {
        like.innerHTML = "like";
        like.classList.remove("ri-heart-3-fill");
        like.classList.add("ri-heart-3-line");
        console.log("like removed")

    }
});

image.addEventListener("dblclick", function () {

    bigLike.classList.add("show");

    setTimeout(function () {
        bigLike.classList.remove("show");
    }, 1000);

    like.innerHTML = "liked";
    like.classList.remove("ri-heart-3-line");
    like.classList.add("ri-heart-3-fill");
    console.log("liked")


});
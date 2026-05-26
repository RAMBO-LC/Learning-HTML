let cursor = document.querySelector("#cursor");
let b = "Hi"

document.addEventListener("mousemove", (e) => {
    cursor.style.right = e.x +"px";
    cursor.style.bottom = e.y +"px";
    

})
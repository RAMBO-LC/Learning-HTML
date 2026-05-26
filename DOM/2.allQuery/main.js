var a = document.querySelector("h1");

console.log(a)//1 of <h1>1</h1>

var b = document.querySelectorAll("h1");

console.log(b) //NodeList

b.forEach(function(e){
    console.log(e) //Seperate
    //<h1>1</h1>
    //<h1>2</h1>
    //<h1>3</h1>
    //<h1>4</h1>
})
// second on click method
const btn2 = document.querySelector("#v2")

btn2.onlick = function () {
    console.log("you clicked me");
}


// third on click method -- addEventListener
const btn3 = document.querySelector("#v3");
btn3.addEventListener('click', function () {
    alert("Clicked")
})
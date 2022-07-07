// .style method allows you to access all css properties on an element -- the css properties are camelCased on JS
// makes it easy to change an element's color or font-size, etc...
// will only know if a css property is pre-defined if it is inline in the HTML -- usually not where we want to be writing css

const h1 = document.querySelector("h1");

h1.style.color = "red";

h1.style.fontSize = "42px"

const allLinks = document.querySelectorAll("a");

for (let link of allLinks) {
    link.style.color = "green";
}

// exercise
// document.querySelector("#container").style.textAlign = "center";
// document.querySelector("img").style.width = "150px"
// document.querySelector("img").style.borderRadius = "50%"

// exercise
// const allSpans = document.querySelectorAll("h1 span")

// for (let i in colors) {
//     allSpans[i].style.color = colors[i];
// }
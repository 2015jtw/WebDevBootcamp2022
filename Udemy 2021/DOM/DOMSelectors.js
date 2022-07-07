
// how to use getElementById
// can assign it to a var
// very important to include document.selector
const banner = document.getElementById("banner");

// document.getElementsByTagName is a plural selector that grabs all elements with the same tag (div, img, p, h1)
// select all imgs in the html file
const images = document.getElementsByTagName("img");

// exercise to grab all the sources of the 4 images in the html file
for (let img of images) {
    console.log(img.src)
}

// can take this further by making all of these imgs into one of them
// 
// document.getElementsByClassName is a plural selector that grabs all elements with the same class 
// select all imgs in the html file
// const images = document.getElementsByTagName("img");


// querySelector is a newer all-in-one method to select a single element
// finds 1st h1 element
document.querySelector('h1');

// finds 1st element with id of red
document.querySelector('#red');

// finds 1st element with class of big
document.querySelector(".big");

// can chain on other css style selectors to find other instances of something
document.querySelector("img:nth-of-type(2)");


// querySelectorAll is same idea, but returns a collection of matching elements
document.querySelectorAll("p a"); //using descendant css selector to find all anchor tags inside paragraphs --> will return a nodelist 


// exercise
const doneTodos = document.querySelectorAll(".done");

const checkbox = document.querySelector("input:nth-of-type(2)[type=checkbox]");


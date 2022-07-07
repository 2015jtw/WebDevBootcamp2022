// can select attributes of elements using .id or .class or .href or .title
document.querySelector("a").title;

// can also use method .getAttribute() to do the same thing
// can also use method .setAttribute() to do the opposite

// exercise
const image = document.querySelector("img").src = "https://www.flaticon.com/svg/static/icons/svg/528/528166.svg"

document.querySelector("img").alt = "chicken";

// .classList method is wonderful for accessing all of an object's classes, and adding new ones, removing ones, toggling class, etc...
// document.querySelector("h2").classList.add("border");
// content.classList.remove("border");


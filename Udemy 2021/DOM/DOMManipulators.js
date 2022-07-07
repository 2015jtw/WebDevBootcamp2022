// .innerText is a manipulator method that shows all text for an element
const showP = document.querySelector("h1").innerText;

const allLinks = document.querySelectorAll("a")

// will change all links to show I AM A LINK
for (let link in allLinks) {
    link.innerText = 'I AM A LINK!!!'
}

// .innerHTML works much of the same way as innerText, but includes html tags
// useful for updating content with html elements --> can make italic, bold, etc...
document.querySelector("h1").innerHTML = "<i> HEY THERE</i>"
const button = document.querySelector("#randomColor");

// display newColor on h1
const header = document.querySelector('h1');

button.addEventListener('click', () => {
    const newColor = randColor();
    document.body.style.backgroundColor = newColor;
    header.innerText = newColor;

})

function randColor() {
    // generate random rgb color
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    const sum = r + g + b;

    if (sum < 300) {
        header.style.color = 'white';
    }
    else {
        header.style.color = 'black';
    }

    return `rgb(${r}, ${g}, ${b})`;
}


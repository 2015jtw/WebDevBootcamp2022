// returning a function from a function
function makeMystery() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("LOL");
        }
    }
    else {
        alert("you have been infected.")
    }
}

// create a function that generates a function based on some input
function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}


// making function methods
const myMath = {
    PI: 3.142254,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num * num * num;
    }
}

// using keyword this in object
const cat = {
    name: "che",
    breed: "tabby",
    color: "orange",
    meow() {
        console.log(`${this.name} says hi`);
    }
}
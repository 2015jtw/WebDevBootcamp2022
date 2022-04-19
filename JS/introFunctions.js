
// basic function
function singSong() {
    console.log("DDDDDAAAAAAAA");
    console.log("LLAAAALALAA")
}

singSong();

// function with argument
function greet(person) {
    console.log(`Hello, ${person} how are you doing?`);
}

greet('bob');

// function with multiple arguments
function fullName(firstName, lasttName) {
    console.log(`Hello, my first name is ${firstName} and my last name is ${lasttName}`);
}

fullName("Josh", "Worden")

// function with multiple args of different types
function stringMultiplied(str, multiply) {
    let result = ''
    for (let i = 0; i < multiply; i++) {
        result += str;
    }
    console.log(result);
}

stringMultiplied("lol", 3)
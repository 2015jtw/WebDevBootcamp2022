let max = parseInt(prompt("enter your max number"));

while (!max) {
    max = parseInt(prompt("enter a valid number"));
}

const targetNum = Math.floor(Math.random() * 10) + 1;

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high. Enter a new guess.");
    }
    else {
        guess = prompt("Too low. Enter a new guess.");
    }
}

if (guess === 'q') {
    console.log("Okay, you quit!")
}
else {
    console.log(`You got it! It took you ${attempts} guesses`);
}

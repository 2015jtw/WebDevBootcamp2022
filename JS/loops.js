
// want to print 1-10 using for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// make a for loop that prints out only even numbers
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }

}

// want to count down from 100 in itervals of 10
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

// iterating over an array
const animals = ['cat', 'dog', 'cow', 'horse', 'giraffe', 'zebra', 'elephant'];

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// iterate over an array from the last index to the first
for (let i = animals.length - 1; i >= 0; i--) {
    console.log(animals[i])
}

// nested for loops
for (let i = 0; i <= 10; i++) {
    console.log(`i is: ${i}`);
    for (let j = 1; j < 4; j++) {
        console.log(`   j is: ${j}`)
    }
}

// while loop
let num = 1;

while (num < 10) {
    console.log(num);
    num++;
}

// show break keyword with while loop
let input = prompt("say something")
while (true) {
    input = prompt(input);
    if (input === "stop copying me") {
        break;
    }

}
console.log("okay, you win!")


// iterate over objects
let testScores = {
    brian: "95",
    damon: "85",
    diyora: "65",
    josh: "55"
}

for (let scores in testScores) {
    console.log(`${scores} got a: ${testScores[scores]}`)
}
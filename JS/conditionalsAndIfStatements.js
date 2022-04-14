// age < 5 FREE
// 5-10 pay $10
// 10-65 pay $20
// +65 pay $10

const age = 66;

if (age < 5) {
    console.log("You are a baby. You get in for free.")
}

else if (age < 10) {
    console.log("You are a child. You pay $10")
}
else if (age < 65) {
    console.log("you are an adult. You can $20")
}

else {
    console.log("you are a senior. You pay $10")
}

// using nested if statements

const password = prompt("please enter a new password");

// password must be +6 characters
if (password.length > 6) {

    // password cant include spaces
    if (password.indexOf(' ') === -1) {
        console.log("good job, you have a valid password");
    }
    else {
        console.log("password can't contain spaces")
    }
}
else {
    console.log("password too short")
}


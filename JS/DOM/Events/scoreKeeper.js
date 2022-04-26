// select the score keeper spans
// const player1 = document.querySelector("#player1");
// const player2 = document.querySelector("#player2");

// select the select to set the winCondition
const scoreToWin = document.querySelector("#playTo");

// select the point adder buttons
// const btnPlayer1 = document.querySelector("#btnPlayer1");
// const btnPlayer2 = document.querySelector("#btnPlayer2");
const reset = document.querySelector("#reset");

// current score vars, winning score, and isGameOver boolean
// let scoreP1 = 0;
// let scoreP2 = 0;
let winCondition = 3;
let isGameOver = false;

// make objects for player 1 and player 2 - refactoring code lots of recycled code
const p1 = {
    score: 0,
    button: document.querySelector("#btnPlayer1"),
    display: document.querySelector("#player1")
}

const p2 = {
    score: 0,
    button: document.querySelector("#btnPlayer2"),
    display: document.querySelector("#player2")
}

// refactored function for updating scorers
function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winCondition) {
            isGameOver = true;
            player.display.classList.add('winner')
            opponent.display.classList.add('loser');
            player.button.disabled = true;
            opponent.button.disabled = true;

        }
        player.display.textContent = player.score;

    }
}

// adding points to player 2 event listener
p1.button.addEventListener('click', function () {
    updateScore(p1, p2);

})

// adding points to player 2 event listener
p2.button.addEventListener('click', function () {
    updateScore(p2, p1);

})

// grab win condition from select
scoreToWin.addEventListener('change', function () {
    console.log(this.value);
    winCondition = parseInt(this.value);
    resetFunc();
})

// refactor reset into its own function
function resetFunc() {

    isGameOver = false;

    // refactor this by looping through -- imagine if there were 4 players instead DRY
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = '0';
        p.display.classList.remove('winner', 'loser');
        p.button.disabled = false;
    }

    // reset scores
    // p1.score = 0;
    // p2.score = 0;
    // p1.display.textContent = '0';
    // p2.display.textContent = '0';


    // remove winner and loser css classes
    // p1.display.classList.remove('winner', 'loser')
    // p2.display.classList.remove('winner', 'loser');

    // after resetting, want to un disable buttons
    // p1.button.disabled = false;
    // p2.button.disabled = false;
}

// reset event listener
reset.addEventListener('click', resetFunc);



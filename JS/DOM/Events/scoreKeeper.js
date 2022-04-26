// select the score keeper spans
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

// select the select to set the winCondition
const scoreToWin = document.querySelector("#playTo");

// select the point adder buttons
const btnPlayer1 = document.querySelector("#btnPlayer1");
const btnPlayer2 = document.querySelector("#btnPlayer2");
const reset = document.querySelector("#reset");

// current score vars, winning score, and isGameOver boolean
let scoreP1 = 0;
let scoreP2 = 0;
let winCondition = 3;
let isGameOver = false;

// adding points to player 2 event listener
btnPlayer1.addEventListener('click', function () {
    if (!isGameOver) {
        scoreP1++;
        if (scoreP1 === winCondition) {
            isGameOver = true;
            player1.classList.add('winner')
            player2.classList.add('loser');
            btnPlayer1.disabled = true;
            btnPlayer2.disabled = true;

        }
        player1.textContent = scoreP1;

    }

})

// adding points to player 2 event listener
btnPlayer2.addEventListener('click', function () {
    if (!isGameOver) {
        scoreP2++;
        if (scoreP2 === winCondition) {
            isGameOver = true;
            player2.classList.add('winner')
            player1.classList.add('loser')
            btnPlayer1.disabled = true;
            btnPlayer2.disabled = true;
        }
        player2.textContent = scoreP2;

    }

})

// grab win condition from select
scoreToWin.addEventListener('change', function () {
    console.log(this.value);
    winCondition = parseInt(this.value);
    resetFunc();
})

// refactor reset into its own function
function resetFunc() {
    // reset scores
    scoreP1 = 0;
    scoreP2 = 0;
    player1.textContent = '0';
    player2.textContent = '0';
    isGameOver = false;

    // remove winner and loser css classes
    player1.classList.remove('winner', 'loser')
    player2.classList.remove('winner', 'loser');
}

// reset event listener
reset.addEventListener('click', resetFunc);



//note: the first script that loads is "start-script.js"
//that one loads as soon as the page loads

//defining the current x/o, round, number of filled squares
let gameWon = 0;
let winner = "";
let currentXo;
let currentRound = 1;
let numFilled = 0;

//defining game over
let gameOver = 0;
const gameOverElem = document.getElementById("game-over-result");

//multidimensional array to represent the squares and their content
let squareMatrix = [];

//factory function to fill the squares
//n will eventually become either x or o
//i and j are just positions like in a C++ matrix
const squareFactory = (xo, i, j, isClickable) => {
    return {xo, i, j, isClickable};
};

//filling up squareMatrix with initial values
//to make the array multidimensional
for (let i=0; i<=2; i++) {
    let arr = [];
    for(let j=0; j<=2; j++) {
        const newSquare = squareFactory("n", i, j, "yes");
        arr.push(newSquare);
    }
    squareMatrix.push(arr);
}

//function to make a square unclickable
function makeSquareUnclickable(i, j) {

    squareMatrix[i][j].isClickable = "no";

    let currentSquareElem = document.getElementById("xo-square-" + i + j);
    currentSquareElem.removeEventListener("pointerdown", addXo);
}

//function to evaluate if someone won
//there are only 8 possible cases
function checkWinner() {
    if (
        (squareMatrix[0][0].xo == "x") && (squareMatrix[0][1].xo == "x") && (squareMatrix[0][2].xo == "x")
        ||
        (squareMatrix[1][0].xo == "x") && (squareMatrix[1][1].xo == "x") && (squareMatrix[1][2].xo == "x")
        ||
        (squareMatrix[2][0].xo == "x") && (squareMatrix[2][1].xo == "x") && (squareMatrix[2][2].xo == "x")
        ||
        (squareMatrix[0][0].xo == "x") && (squareMatrix[1][0].xo == "x") && (squareMatrix[2][0].xo == "x")
        ||
        (squareMatrix[0][1].xo == "x") && (squareMatrix[1][1].xo == "x") && (squareMatrix[2][1].xo == "x")
        ||
        (squareMatrix[0][2].xo == "x") && (squareMatrix[1][2].xo == "x") && (squareMatrix[2][2].xo == "x")
        ||
        (squareMatrix[0][0].xo == "x") && (squareMatrix[1][1].xo == "x") && (squareMatrix[2][2].xo == "x")
        ||
        (squareMatrix[0][2].xo == "x") && (squareMatrix[1][1].xo == "x") && (squareMatrix[2][0].xo == "x")
    ) {
        gameOver = 1;
        winner = "x"
        //making the entire board unclickable
        const xoContainer = document.getElementById("xo-container");
        xoContainer.classList.add("unclickable");
        xoContainer.childNodes.forEach(element => {
            element.removeEventListener("pointerdown", addXo);
        });
        gameOverElem.innerHTML = "X won!";
    }
    if (
        (squareMatrix[0][0].xo == "o") && (squareMatrix[0][1].xo == "o") && (squareMatrix[0][2].xo == "o")
        ||
        (squareMatrix[1][0].xo == "o") && (squareMatrix[1][1].xo == "o") && (squareMatrix[1][2].xo == "o")
        ||
        (squareMatrix[2][0].xo == "o") && (squareMatrix[2][1].xo == "o") && (squareMatrix[2][2].xo == "o")
        ||
        (squareMatrix[0][0].xo == "o") && (squareMatrix[1][0].xo == "o") && (squareMatrix[2][0].xo == "o")
        ||
        (squareMatrix[0][1].xo == "o") && (squareMatrix[1][1].xo == "o") && (squareMatrix[2][1].xo == "o")
        ||
        (squareMatrix[0][2].xo == "o") && (squareMatrix[1][2].xo == "o") && (squareMatrix[2][2].xo == "o")
        ||
        (squareMatrix[0][0].xo == "o") && (squareMatrix[1][1].xo == "o") && (squareMatrix[2][2].xo == "o")
        ||
        (squareMatrix[0][2].xo == "o") && (squareMatrix[1][1].xo == "o") && (squareMatrix[2][0].xo == "o")
    ) {
        gameOver = 1;
        winner = "o"
        //making the entire board unclickable
        const xoContainer = document.getElementById("xo-container");
        xoContainer.classList.add("unclickable");
        xoContainer.childNodes.forEach(element => {
            element.removeEventListener("pointerdown", addXo);
        });
        gameOverElem.innerHTML = "O won!";
    }
    if (numFilled == 9 && gameOver == 0) {
        gameOverElem.innerHTML = "It's a tie!";
    }
}

//function to add x or 0 as a player
const addXo = function(e) {
    if (currentRound %2 == 0) {
        currentXo = "o";
    }
    else {
        currentXo = "x";
    }
    
    let i = e.target.id[e.target.id.length-2];
    let j = e.target.id[e.target.id.length-1];
    let currentSquare = document.getElementById(e.target.id);

    squareMatrix[i][j].xo = currentXo;
    squareMatrix[i][j].isClickable = "no";       
    currentSquare.innerHTML = currentXo;
    numFilled++;
                       
    currentRound++;
    makeSquareUnclickable(i, j);
    
    if (localStorage.getItem("playVs") == "computer") {
        computerMove(currentXo);
    }
    checkWinner();

}

//function to make the computer make a move
function computerMove(xo) {
    if (currentRound %2 == 0) {
        xo = "o";
    }
    else {
        xo = "x";
    }

    let moveWasMade = 0;
    let i = 0;
    let j = 0;
    //the page dies if I don't do this if statemen (infinite loop?)
    if (currentRound < 9) {
        while (!moveWasMade) {
            let randomI = Math.floor(Math.random() * 3);
            let randomJ = Math.floor(Math.random() * 3);
            if (squareMatrix[randomI][randomJ].xo == "n") {
                squareMatrix[randomI][randomJ].xo = xo;
                i = randomI;
                j = randomJ;
                let currentSquare = document.getElementById("xo-square-" + i + j);
                currentSquare.innerHTML = xo;
                numFilled++;
                moveWasMade = 1;
            }
        }
    }

    
    currentRound++;
    checkWinner();
    makeSquareUnclickable(i, j);  
}

//special case in which the computer goes first
if (currentRound == 1 && localStorage.getItem("playVs") == "computer" && localStorage.getItem("xoSelection") == "o") {
    currentXo = "x";
    computerMove("x");
}




//function to make a square clickable
function makeSquareClickable(i, j) {

    let currentSquareElem = document.getElementById("xo-square-" + i + j);
    currentSquareElem.addEventListener("pointerdown", addXo);

}

//making all squares clickable before the game starts
//by default, the isClickable property is "yes"
//but the DOM elements anre not yet clickable
for (let i=0; i<squareMatrix.length; i++) {
    for (let j=0; j<squareMatrix.length; j++) {
        currentI = squareMatrix[i][j].i;
        currentJ = squareMatrix[i][j].j;
        makeSquareClickable(currentI, currentJ);
    }
}





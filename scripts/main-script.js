//test to see if the script runs
console.log("main-script.js is running...");
console.log(localStorage.getItem("xoSelection"));
console.log(localStorage.getItem("playVs"));

//note: the first script that loads is "start-script.js"
//that one loads as soon as the page loads

//defining the current x/o and the players
let currentXo;

//multidimensional array to represent the squares and their content
let squareMatrix = [];

//factory function to fill the squares
//n will eventually become either x or o
//i and j are just positions like in a C++ matrix
const squareFactory = (xo, i, j, isClickable) => {
    return {xo, i, j, isClickable};
};

//defining variables for the squares on the board
//let xoContainerElem = document.getElementById("xo-container");
//let xoContainerElemChildren = xoContainerElem.children;

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

//function to process the end of the game
function endGame() {
    console.log("endGame");
    //making the board unclickable
    //makeSquareUnclickable();
}

//function to evaluate if someone won
//there are only 8 possible cases
//let currentRound = 1;
let winner = "";
function checkWinner(currentPlayer) {
    if (
        (squareMatrix[0][0].xo == currentPlayer) && (squareMatrix[0][1].xo == currentPlayer) && (squareMatrix[0][2].xo == currentPlayer)
        ||
        (squareMatrix[1][0].xo == currentPlayer) && (squareMatrix[1][1].xo == currentPlayer) && (squareMatrix[1][2].xo == currentPlayer)
        ||
        (squareMatrix[2][0].xo == currentPlayer) && (squareMatrix[2][1].xo == currentPlayer) && (squareMatrix[2][2].xo == currentPlayer)
        ||
        (squareMatrix[0][0].xo == currentPlayer) && (squareMatrix[1][0].xo == currentPlayer) && (squareMatrix[2][0].xo == currentPlayer)
        ||
        (squareMatrix[0][1].xo == currentPlayer) && (squareMatrix[1][1].xo == currentPlayer) && (squareMatrix[2][1].xo == currentPlayer)
        ||
        (squareMatrix[0][2].xo == currentPlayer) && (squareMatrix[1][2].xo == currentPlayer) && (squareMatrix[2][2].xo == currentPlayer)
        ||
        (squareMatrix[0][0].xo == currentPlayer) && (squareMatrix[1][1].xo == currentPlayer) && (squareMatrix[2][2].xo == currentPlayer)
        ||
        (squareMatrix[0][2].xo == currentPlayer) && (squareMatrix[1][1].xo == currentPlayer) && (squareMatrix[2][0].xo == currentPlayer)
    ) {
        console.log(`test win: ${currentPlayer} won!`);
        winner = currentPlayer;
        endGame(winner);
    }
}

//function to add x or 0 as a player
const addXoAsPlayer = function(e) {

    console.log("addXoAsPlayer runs");
    let currentXo = "";
    

}

//function to add x or 0 as computer
const addXoAsComputer = function() {
    console.log("addXoAsComputer runs");
}

//function to make a square clickable
function makeSquareClickable(i, j) {
    console.log("currentSquare: " + i + j);
    let currentSquareElem = document.getElementById("xo-square-" + i + j);
    console.log(currentSquareElem);
    currentSquareElem.addEventListener("pointerdown", addXoAsPlayer);
}

//function to make a square unclickable
function makeSquareUnclickable(currentSquare) {

}

//making all squares clickable before the game starts
//by default, the isClickable property is "yes"
//but the DOM elements anre not yet clickable
console.log(squareMatrix);
for (let i=0; i<squareMatrix.length; i++) {
    for (let j=0; j<squareMatrix.length; j++) {
        console.log(squareMatrix[i][j]);
        currentI = squareMatrix[i][j].i;
        currentJ = squareMatrix[i][j].j;
        console.log(currentI + "" + currentJ);
        makeSquareClickable(currentI, currentJ);
    }
}

//function to process the rounds of the game
function playRounds() {
    
    for (let i=1; i<=9; i++) {
        console.log("round " + i);

        //deciding if it's x or o this round
        if (i %2 == 0) {
            currentXo = "o"
            console.log("currentXo: " + currentXo);
        }
        else {
            currentXo = "x"
            console.log("currentXo: " + currentXo);
        }

        //deciding if the move will be made by human or computer
        //my turn vs human
        //my turn vs computer
        //their turn as human
        //their turn as computer
        switch (true) {
            //my turn vs human
            case (currentXo == localStorage.getItem("xoSelection")) && (localStorage.getItem("playVs") == "human"):
                console.log("my turn vs human");
                break;
            //my turn vs computer
            case (currentXo == localStorage.getItem("xoSelection")) && (localStorage.getItem("playVs") == "computer"):
                console.log("my turn vs computer");
                break;
            //their turn as human
            case (currentXo != localStorage.getItem("xoSelection")) && (localStorage.getItem("playVs") == "human"):
                console.log("their turn as human");
                break;
            //their turn as computer
            case (currentXo != localStorage.getItem("xoSelection")) && (localStorage.getItem("playVs") == "computer"):
                console.log("their turn as computer");
                break;
            default:
                break;
            
        }

    }
}

playRounds();




//note: the first script that loads is "start-script.js"
//that one loads as soon as the page loads

//defining the current x/o and the players
let currentXo;
let currentRound = 1;

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


//function to evaluate if someone won
//there are only 8 possible cases
function checkWinner() {
    console.log("checkWinner runs");
    console.log("currentPlayer: " + currentXo);
    if (
        (squareMatrix[0][0].xo == currentXo) && (squareMatrix[0][1].xo == currentXo) && (squareMatrix[0][2].xo == currentXo)
        ||
        (squareMatrix[1][0].xo == currentXo) && (squareMatrix[1][1].xo == currentXo) && (squareMatrix[1][2].xo == currentXo)
        ||
        (squareMatrix[2][0].xo == currentXo) && (squareMatrix[2][1].xo == currentXo) && (squareMatrix[2][2].xo == currentXo)
        ||
        (squareMatrix[0][0].xo == currentXo) && (squareMatrix[1][0].xo == currentXo) && (squareMatrix[2][0].xo == currentXo)
        ||
        (squareMatrix[0][1].xo == currentXo) && (squareMatrix[1][1].xo == currentXo) && (squareMatrix[2][1].xo == currentXo)
        ||
        (squareMatrix[0][2].xo == currentXo) && (squareMatrix[1][2].xo == currentXo) && (squareMatrix[2][2].xo == currentXo)
        ||
        (squareMatrix[0][0].xo == currentXo) && (squareMatrix[1][1].xo == currentXo) && (squareMatrix[2][2].xo == currentXo)
        ||
        (squareMatrix[0][2].xo == currentXo) && (squareMatrix[1][1].xo == currentXo) && (squareMatrix[2][0].xo == currentXo)
    ) {
        console.log("winner: " + currentXo);
    }
}

//function to add x or 0 as a player
const addXo = function(e) {

    console.log("round " + currentRound);

    if (currentRound %2 == 0) {
        currentXo = "o";
    }
    else {
        currentXo = "x";
    }
    
    let i = e.target.id[e.target.id.length-2];
    let j = e.target.id[e.target.id.length-1];
    let currentSquare = document.getElementById(e.target.id);

    //deciding if the move will be made by human or computer
        switch (true) {
            //my turn vs human
            case (currentXo == localStorage.getItem("xoSelection")) && (localStorage.getItem("playVs") == "human"):
                //console.log("my turn vs human");
                squareMatrix[i][j].xo = currentXo;        
                currentSquare.innerHTML = currentXo;
                break;
            //my turn vs computer
            case (currentXo == localStorage.getItem("xoSelection")) && (localStorage.getItem("playVs") == "computer"):
                //console.log("my turn vs computer");
                squareMatrix[i][j].xo = currentXo;
                currentSquare.innerHTML = currentXo;
                break;
            //their turn as human
            case (currentXo != localStorage.getItem("xoSelection")) && (localStorage.getItem("playVs") == "human"):
                //console.log("their turn as human");
                squareMatrix[i][j].xo = currentXo;
                currentSquare.innerHTML = currentXo;
                break;
            //their turn as computer
            case (currentXo != localStorage.getItem("xoSelection")) && (localStorage.getItem("playVs") == "computer"):
                //console.log("their turn as computer");
                squareMatrix[i][j].xo = currentXo;
                currentSquare.innerHTML = currentXo;
                break;
            default:
                break;
                
            }
    currentRound++;
    makeSquareUnclickable(i, j);
    checkWinner();

}


//function to make a square clickable
function makeSquareClickable(i, j) {

    let currentSquareElem = document.getElementById("xo-square-" + i + j);
    currentSquareElem.addEventListener("pointerdown", addXo);

}

//function to make a square unclickable
function makeSquareUnclickable(i, j) {

    squareMatrix[i][j].isClickable = "no";

    let currentSquareElem = document.getElementById("xo-square-" + i + j);
    currentSquareElem.removeEventListener("pointerdown", addXo);
}

//making all squares clickable before the game starts
//by default, the isClickable property is "yes"
//but the DOM elements anre not yet clickable
console.log(squareMatrix);
for (let i=0; i<squareMatrix.length; i++) {
    for (let j=0; j<squareMatrix.length; j++) {

        currentI = squareMatrix[i][j].i;
        currentJ = squareMatrix[i][j].j;

        makeSquareClickable(currentI, currentJ);
    }
}





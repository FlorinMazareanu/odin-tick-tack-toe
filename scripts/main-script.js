//test to see if the script runs
console.log("main-script.js is running...");

//test imports
import { testImportExport } from "./start-script";

//note: the first script that loads is "start-script.js"
//that one loads as soon as the page loads

//multidimensional array to represent the squares and their content
let squareMatrix = [];

//factory function to fill the squares
//n will eventually become either x or 0
//i and j are just positions like in a C++ matrix
const squareFactory = (xo, i, j) => {
    return {xo, i, j};
};

//filling up squareMatrix with initial values
//to make the array multidimensional
for (let i=0; i<=2; i++) {
    let arr = [];
    for(let j=0; j<=2; j++) {
        const newSquare = squareFactory("n", i, j);
        arr.push(newSquare);
    }
    squareMatrix.push(arr);
}

//function to add x or 0
const addXO = function(e) {
    //console.log(e.target.id);
    let i = e.target.id[e.target.id.length-2];
    let j = e.target.id[e.target.id.length-1];
    let elem = document.getElementById(e.target.id);
    elem.innerHTML = squareMatrix[i][j].xo;
    console.log("i: " + i);
    console.log("j: " + j);
    console.log(squareMatrix[i][j].xo);

}

//adding event listeners to the squares
let xoContainerElem = document.getElementById("xo-container");
//console.log(xoContainerElem);
//console.log(xoContainerElem.children);
//console.log(xoContainerElem.childElementCount);
let xoContainerElemChildren = xoContainerElem.children;
for (let i=0; i< xoContainerElemChildren.length; i++) {
    //console.log(xoContainerElemChildren[i]);
    xoContainerElemChildren[i].addEventListener("pointerdown", addXO);
}

//function that iterates through the game's rounds
function gamePlayer(xo, ch) {
    console.log("you play as " + xo);
    for (let i=1; i<=9; i++) {
        console.log("round " + i + " vs "+ ch);
    }
}

/*
if ((localStorage.getItem("xoSelection") == "x" || localStorage.getItem("xoSelection") == "y") && (localStorage.getItem("playVs") == "human" || localStorage.getItem("playVs") == "computer")) {
    gamePlayer(localStorage.getItem("xoSelection"), localStorage.getItem("playVs"));
}
*/

/*
if (
    (localStorage.getItem("xoSelection") == "x" || localStorage.getItem("xoSelection") == "y") 
    && 
    (localStorage.getItem("playVs") == "human" || localStorage.getItem("playVs") == "computer")
) {
    gamePlayer(localStorage.getItem("xoSelection"), localStorage.getItem("playVs"));
}
*/

//a promise test
/*
const testPromise = new Promise((resolve, reject) => {
    if (1 < 2) {
        resolve("1 < 2 indeed");
    }
});

testPromise.then((success) => {
    console.log("success!");
    console.log(success);
});
*/

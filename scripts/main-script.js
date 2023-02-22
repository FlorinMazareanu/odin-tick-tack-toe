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



//console.log(squareMatrix);
//console.log(squareMatrix[0][0].xo);

//let test = localStorage.getItem(0);
//console.log(test);
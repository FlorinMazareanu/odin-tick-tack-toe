//multidimensional array to represent the squares and their content
let squareMatrix = [];

//factory function to fill the squares
//n will eventually become either x or 0
//i and j are just positions like in a C++ matrix
const squareFactory = (xo, i, j) => {
    return {xo, i, j};
};

//filling up squareMatrix with initial values
for (let i=0; i<=2; i++) {
    let arr = [];
    for(let j=0; j<=2; j++) {
        const newSquare = squareFactory("n", i, j);
        arr.push(newSquare);
    }
    squareMatrix.push(arr);
}

console.log(squareMatrix);
console.log(squareMatrix[0][0].xo);




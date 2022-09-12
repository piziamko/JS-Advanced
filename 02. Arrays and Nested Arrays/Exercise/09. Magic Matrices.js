function solve(matrix) {
    let isMagic = true;
    let total;

    for (let i = 0; i < matrix.length; i++) {
        let currentRowSum = 0;
        let currentColSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            currentRowSum += matrix[i][j] || 0;
            currentColSum += matrix[j][i] || 0;
        }
        if (typeof total === 'undefined') {
            total = currentRowSum;
        }
        if (!(currentRowSum === currentColSum && currentRowSum === total)) {
            isMagic = false;
            break;
        }
    }
    return isMagic;
}

// console.log(solve([
//     [4, 5, 6],
//     [6, 5, 4],
//     [0, 0, 0, 15],
//     [5, 5, 5, 0]
// ]));
// console.log(solve([
//     [11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1],
// ]));
// console.log(solve([
//         [1, 0, 0],
//         [0, 0, 1],
//         [0, 1, 0],
//     ]
// ));


//9.	Magic Matrices

function magic(matrix) {
    let rowSums = [];
    let colSums = [];

    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        let sum = row.reduce((result,currentElement) => (result+currentElement),0);
        rowSums.push(sum);
    }

    for (let i = 0; i < matrix.length; i++) {
        let newRow = [];
        for(let y = 0; y< matrix.length; y++){
            let index = matrix.length - 1 -y;
            newRow.push(matrix[index][i]);
        }

        let sum = newRow.reduce((result,curr)=> (result+curr),0);
        colSums.push(sum);
        
    }
    return rowSums.concat(colSums).every((el,i , arr) => el === arr[0]);
}

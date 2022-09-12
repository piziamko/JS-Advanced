function solveSmarterWay(array) {
    let [matrixRows, matrixCols, startingRow, startingCol] = array;
    let matrix = new Array(matrixRows).fill(true).map(() => new Array(matrixCols).fill(true));

    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col ++){
        matrix[row][col] = Math.max(Math.abs(row - startingRow), Math.abs(col - startingCol)) + 1
        }
    }

    matrix.forEach(line => console.log(line.join(' ')))
}

// Variant 2

function foo(arr) {
    let matrix = new Array(arr[0]).fill(new Array(arr[1]).fill(''))

    return matrix
        .map((x, i) => x.map((y, j) => Math.max(Math.abs(j - arr[3]), Math.abs(i - arr[2])) + 1))
        .map(x => x.join(" "))
        .join("\n")
}

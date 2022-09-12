function solve(matrixRow, matrixCol) {
    let matrix = new Array(matrixRow).fill(undefined).map(() => new Array(matrixCol).fill(-1));
    let currentNumber = 0;
    let maxNumber = matrixRow * matrixCol;
    let [row, col] = [0, -1];
    const directions = [
        (r, c) => [r, c + 1],
        (r, c) => [r + 1, c],
        (r, c) => [r, c - 1],
        (r, c) => [r - 1, c],
    ];
    let direction = directions.shift();

    while (currentNumber < maxNumber) {
        let [nextRow, nextCol] = direction(row, col);

        if (!(matrix[nextRow] && matrix[nextRow][nextCol]) || matrix[nextRow][nextCol] !== -1) {
            directions.push(direction);
            direction = directions.shift();
            continue;
        }

        [row, col] = [nextRow, nextCol];
        matrix[row][col] = ++currentNumber;

    }

    matrix.forEach(line => console.log(line.join(' ')))
}

// Variant 2

function foo(w, h) {
    let matrix = new Array(h).fill(new Array(w).fill([]))
    matrix = matrix.map(x => x.map(y => ""))
    let [startRow, endRow, startClmn, endClmn, counter] = [0, h - 1, 0, w - 1, 0]

    while (startClmn <= endClmn && startRow <= endRow) {
        for (let i = startClmn; i <= endClmn; i++) {
            matrix[startRow][i] = ++counter
        }
        startRow++
        for (let i = startRow; i <= endClmn; i++) {
            matrix[i][endClmn] = ++counter
        }
        endClmn--
        for (let i = endClmn; i >= startClmn; i--) {
            matrix[endRow][i] = ++counter
        }
        endRow--
        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startClmn] = ++counter
        }
        startClmn++
    }

    return matrix.map(x => x.join(" ")).join("\n")
}

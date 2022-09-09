// function printSquare(n = 5) {
//     const row = "* ".repeat(n).trim()
// 	for (let i = 0; i < n; i++) {
// 		console.log(row)
// 	}
// }


function solve(size) {
    for (let row = 1; row <= size; row++) {
        let line = '';
        for (let col = 1; col <= size; col++) {
            line += '* ';
        }
        console.log(line);
    }
}

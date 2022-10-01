function solve(numbers, start, end) {
    if (!Array.isArray(numbers)) {
        return NaN;
    }

    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, numbers.length - 1);

    return numbers.slice(startIndex, endIndex + 1)
        .reduce((acc, x) => acc + Number(x), 0);
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(solve([10, 'twenty', 30, 40], 0, 2));
console.log(solve([], 1, 2));
console.log(solve('text', 0, 2));

//  Variant 2

// function solve (arr, i, i1) {
//     i = arr[i] === undefined ? 0 : i
//     i1 = arr[i] === undefined ? arr.length - 1 : i1

//     try {
//         return (arr.slice(i, i1 + 1)
//             .reduce((a, v) => a + v, 0) * 10) / 10
//     } catch (e) {
//         return NaN
//     }
// }

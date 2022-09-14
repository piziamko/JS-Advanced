// function getFibonator() {
//     let [prev, curr] = [1, 0];

//     return () => {
//         let next = prev + curr;
//         prev = curr;
//         curr = next;
//         return curr;
//     }
// }

//let fib = getFibonator();
//console.log(fib());
//console.log(fib());
//console.log(fib());
//console.log(fib());
//console.log(fib());
//console.log(fib());
//console.log(fib());

// Variant 2

function solve() {
    const lastNumbers = [0, 0];

    function fib() {
        const result = lastNumbers.reduce((acc, num) => acc + num, 0) || 1;
        lastNumbers.shift()
        lastNumbers.push(result)
        return result
    }

    return fib;
}

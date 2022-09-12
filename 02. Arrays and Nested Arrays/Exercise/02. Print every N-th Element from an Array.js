function solve(array, n) {
    let result = [];
    for (let i = 0; i < array.length; i += n) {
        result.push(array[i]);
    }
    return(result);
}

// Variant 2

// function everyNElement(arr, step) {
//     const result = [];
//     for (let i = 0; i < arr.length; i += step) {
//         result.push(arr[i]);
//     }
//     return result;
// }

//Variant 3

// const solve3 = (arr, step) => {
//     return arr.filter((el, index) => index % step === 0);
// }

// console.log(solve3(['5', 
// '20', 
// '31', 
// '4', 
// '20'], 
// 2
// ));

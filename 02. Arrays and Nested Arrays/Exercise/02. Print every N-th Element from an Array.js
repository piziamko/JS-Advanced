function everyNElement(arr, step) {
    const result = [];
    for (let i = 0; i < arr.length; i += step) {
        result.push(arr[i]);
    }
    return result;
}

//another solution

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

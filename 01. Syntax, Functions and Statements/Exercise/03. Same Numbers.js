function solve(input){
    const arr = Array.from(input.toString());
    let result = arr.reduce((acc, curr) => Number(acc) + Number(curr));
    let isEqual = arr.every((e, i, a) => e === a[0]);
    console.log(isEqual);
    console.log(result);
}

// solve(2222222);
// solve(1234)

// Variant 2 

// function sameNumbers(num){
//     let numAsString = num.toString();
//     let firstDigit = numAsString[0];
//     let isSame = true;
//     let sum = 0;
//     for (let i = 0; i < numAsString.length; i++){
//         if (numAsString[i] !== firstDigit){
//             isSame = false;
//         }
//         sum += Number(numAsString[i]);
//     }

//     console.log(isSame);
//     console.log(sum);
// }

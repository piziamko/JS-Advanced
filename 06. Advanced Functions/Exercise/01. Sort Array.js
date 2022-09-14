// function sort(array, argument) {
//     const sort = {
//         asc: (array) => array.sort((a, b) => a - b),
//         desc: (array) => array.sort((a, b) => b - a)
//     };

//     return sort[argument](array);
// }

// Variant 2

function sorting(array, order) {
    return array.sort((a, b) => order === 'asc' ? a - b : b - a);
}

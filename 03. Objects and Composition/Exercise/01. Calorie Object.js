function calorie(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i += 2) {
        result[arr[i]] = Number(arr[i + 1]);
    }

    return result;
}

console.log(calorie(
    ['Yoghurt', '48', 'Rise', '138', 'Apple', '52']
));
console.log(calorie(
    ['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']
));

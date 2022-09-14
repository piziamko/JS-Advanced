function findTypeOfInput() {
    let data = {}

    Array.from(arguments).forEach((line) => {
        const type = typeof line;
        console.log((`${type}: ${line}`));

        if (!data[type]) {
            data[type] = 0;
        }
        data[type]++;
    });

    Object.keys(data)
        .sort((a, b) => data[b] - data[a])
        .forEach((key) => console.log(`${key} = ${data[key]}`));

}

//  Variant 2 

function solve() {
    const result = {};
    for (const arg of arguments) {
        const type = typeof arg;
        console.log(`${type}: ${arg}`);
        result[type] = (result[type] || 0)+1;
    }
    Object.entries(result)
        .sort((a,b) => b[1] - a[1])
        .forEach(
            kvp => console.log(`${kvp[0]} = ${kvp[1]}`));
}

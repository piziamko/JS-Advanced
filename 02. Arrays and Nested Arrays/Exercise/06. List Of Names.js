function solve(names) {
    names.sort((a, b) => a.localeCompare(b));
    names.forEach((name, index) => console.log(`${index + 1}.${name}`));
}


//6.	List of Names

// function sortNames(names) {
//     return names
//         .slice(0)
//         .sort((a, b) => a.localeCompare(b))
//         .map((name, index) => {
//             return `${index + 1}.${name}`;
//         })
//         .join('\n');
// }

// console.log(sortNames(
//     ["John", "Bob", "Christina", "Ema"]
// ));

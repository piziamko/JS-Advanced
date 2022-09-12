function solve(text) {
    let result = text
        .toUpperCase()
        .split(/[\W]+/)
        .filter((w) => w.length > 0)
        .join(', ');

    console.log(result);
}

//solve('Hi, how are you?');

//Variante 2

// function solve(text){
//     let regex = /(\w+)/g
//     let matches = text.match(regex)
//     matches = matches.map(word => word.toUpperCase())
//     console.log(matches.join(', '))
// }

// solve('Hi, how are you?');
// solve('hello');

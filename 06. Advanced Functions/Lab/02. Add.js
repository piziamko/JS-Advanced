function solution(num) {
    function add (a, b) {
        return a + b;
    }
    return add.bind(this, num)
}


let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));

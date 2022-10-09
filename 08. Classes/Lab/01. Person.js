class Person {
    constructor (f, l, a, e) {
        this.firstName = f
        this.lastName = l
        this.age = a
        this.email = e
    }

    toString = () => `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
}

module.exports = Person
let person = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
console.log(person.toString()); 

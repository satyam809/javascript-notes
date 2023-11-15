
//prototype is a fundamental concept that allows you to add properties and methods to objects
// Constructor function for creating Person objects
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype of Person
Person.prototype.introduce = function() {
    return `Hi, my name is ${this.name} and I'm ${this.age} years old.`;
};

// Adding a property to the prototype of Person

Person.prototype.planet = "Earth";

// Creating instances of Person
var person1 = new Person('Alice', 25);
var person2 = new Person('Bob', 30);

console.log(person1.introduce());  // Hi, my name is Alice and I'm 25 years old.
console.log(person2.introduce());  // Hi, my name is Bob and I'm 30 years old.
console.log(person1.planet);

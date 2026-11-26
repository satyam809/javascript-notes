# Functions

A **function** is reusable code that performs a task.

```js
function greet(name) {
  console.log("Hello " + name);
}

greet("Mia"); // Hello Mia
```

## Function declarations and expressions

### Function declaration

A function declaration has a name and can be used before it is declared.

```js
sayHi();

function sayHi() {
  console.log("Hi!");
}
```

### Function expression

A function expression is created and stored in a variable. It cannot be used before the variable is initialized.

```js
const sayHi = function () {
  console.log("Hi!");
};

sayHi();
```

## Arrow functions

**Arrow functions** are a short way to write function expressions.

```js
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5
```

Use braces when the function needs more than one statement:

```js
const greet = (name) => {
  const message = "Hello " + name;
  return message;
};
```

## Default parameters

A **default parameter** is used when an argument is missing or `undefined`.

```js
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();       // Hello Guest
greet("Mia");  // Hello Mia
```

## Rest and spread operators

The rest and spread operators both use `...`, but they work differently.

### Rest parameters

**Rest** collects extra arguments into an array.

```js
function addAll(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(addAll(1, 2, 3)); // 6
```

### Spread syntax

**Spread** expands an array or object into individual values.

```js
const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // 3

const copy = [...numbers]; // [1, 2, 3]
```

Spread also works with objects:

```js
const user = { name: "Mia", age: 20 };
const updatedUser = { ...user, age: 21 };
```

**Quick rule:** Use declarations for named reusable functions, arrow functions for short callbacks, rest to collect values, and spread to expand values.

# Data Types & Coercion

## Primitives and objects

**Primitives** are simple values: strings, numbers, booleans, `null`, `undefined`, `bigint`, and `symbol`.
**Objects** can group values. Arrays and functions are objects too.

```js
const color = "blue"; // primitive
const colors = ["blue", "green"]; // object (array)
```

## Truthy and falsy

In an `if`, JavaScript treats values as either **truthy** or **falsy**.

Falsy values include: `false`, `0`, `""`, `null`, `undefined`, and `NaN`. Almost everything else is truthy, including empty arrays and objects.

```js
if ("hello") console.log("This runs"); // non-empty string is truthy
if (0) console.log("This does not run"); // 0 is falsy
```

## Type conversion (coercion)

**Implicit conversion** happens automatically:

```js
console.log("5" + 2); // "52" (number becomes a string)
console.log("5" - 2); // 3 (string becomes a number)
```

**Explicit conversion** is done by you:

```js
const age = Number("5"); // 5, a number
const label = String(5); // "5", a string
```

**Tip:** Use explicit conversion when you want the result to be clear.

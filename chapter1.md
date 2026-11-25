# Variables & Scope

A **variable** is a named place to store a value:

```js
let name = "Mia";
name = "Sam"; // let can be reassigned
```

## `var`, `let`, and `const`

- `var`: can be reassigned; scoped to its function (or global scope).
- `let`: can be reassigned; scoped to the `{ }` block where it is declared.
- `const`: cannot be reassigned; also scoped to its `{ }` block. Its value must be set when declared.

```js
const age = 20;
// age = 21; // Error: cannot reassign a const

const person = { name: "Mia" };
person.name = "Sam"; // Allowed: the object itself was not reassigned
```

## Scope

**Scope** is where a variable can be used:

- **Global scope:** declared outside functions and blocks; available throughout the script.
- **Function scope:** declared with `var` inside a function; available throughout that function.
- **Block scope:** declared with `let` or `const` inside `{ }`; available only in that block.

```js
function example() {
  if (true) {
    var a = "function scoped";
    let b = "block scoped";
  }

  console.log(a); // "function scoped"
  // console.log(b); // Error: b only exists inside the if block
}
```

## Temporal Dead Zone (TDZ)

The **TDZ** is the time between entering a block and reaching a `let` or `const` declaration. You cannot use that variable before its declaration:

```js
{
  // console.log(count); // Error: count is in the TDZ
  let count = 1;
  console.log(count); // 1
}
```

**Quick rule:** Prefer `const` by default, use `let` when the value needs to change, and avoid `var` in modern JavaScript.
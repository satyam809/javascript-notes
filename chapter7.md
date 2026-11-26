# **📒 Hoisting & Execution Context (JavaScript)**

**1. Execution Context**

→ Execution Context = Environment where JavaScript code runs.

JavaScript executes code in 2 phases:

**A. Creation Phase**

- Memory is allocated to variables and functions.
- `var` gets `undefined`.
- `let` and `const` stay uninitialized.
- Functions are stored in memory.

**B. Execution Phase**

- Code runs line by line.
- Variables get their actual values.
- Functions execute when called.

**Example:**

```
console.log(a); // undefined
var a = 10;

console.log(a); // 10
```

**2. Hoisting**

→ Hoisting means JavaScript prepares variables and functions in memory before executing code.

Example:

```
console.log(a); // undefined
var a = 10;
```

Note:

- `var` → undefined
- `let` / `const` → Cannot access before initialization
- Function declaration → Can be called before declaration.

**3. Call Stack**

→ Call Stack manages which function runs first and which runs next.

It follows **LIFO (Last In, First Out)**.

Example:

```
function one() {
  two();
}

function two() {
  console.log("Hello");
}

one();
```

Flow:

```
one()  → pushed into stack
two()  → pushed into stack
two()  → completed and removed
one()  → completed and removed
```

**4. Lexical Environment**

→ Lexical Environment means where a variable is located and how JavaScript finds it.

JavaScript searches:

1. Inside the current function.
2. In the parent function.
3. In the global scope.

Example:

```
let a = 10;

function test() {
  let b = 20;
  console.log(a); // 10
}

test();
```

Here, `test()` can access `a` because it is in the outer scope.

### **⭐ Quick Revision**

| Topic               | Simple Meaning                         |
| ------------------- | -------------------------------------- |
| Execution Context   | Where code runs                        |
| Creation Phase      | Memory allocation                      |
| Execution Phase     | Code execution                         |
| Hoisting            | Declarations prepared before execution |
| Call Stack          | Manages function execution             |
| Lexical Environment | Variable access based on scope         |

**Remember:** JavaScript first prepares memory, then executes the code.
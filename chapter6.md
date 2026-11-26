# **JavaScript Notes – ES6+ Essentials**

## **1. Template Literals**

**Meaning:** Used to insert variables directly inside a string using backticks (`` ` ``).

```
const name = "Satyam";
const age = 28;

console.log(`My name is ${name} and age is ${age}`);
```

**Output:**

```
My name is Satyam and age is 28
```

**Remember:** Template literals = Easy string + variable.

## **2. Optional Chaining (?.)**

**Meaning:** Safely access object properties without getting an error if a property is `null` or `undefined`.

```
const user = {
    name: "Satyam"
};

console.log(user.address?.city); // undefined
```

Without `?.`, accessing `user.address.city` would throw an error.

**Remember:** `?.` = Check before accessing.

## **3. Nullish Coalescing (??)**

**Meaning:** Provides a default value only when the value is `null` or `undefined`.

```
const username = null;

const result = username ?? "Guest";

console.log(result); // Guest
```

**Important difference:**

```
console.log(0 || 100); // 100
console.log(0 ?? 100); // 0
```

- `||` → Uses default for any falsy value (`0`, `false`, `""`, `null`, `undefined`).
- `??` → Uses default only for `null` or `undefined`.

**Remember:** `??` = Default value if null or undefined.

## **4. ES Modules (import/export)**

**Meaning:** Used to share code between different JavaScript files.

**Export (file: math.js)**

```
export const add = (a, b) => a + b;
```

**Import (file: app.js)**

```
import { add } from "./math.js";

console.log(add(10, 20)); // 30
```

**Remember:**

- `export` = Send code.
- `import` = Receive code.

## **5. ES Modules vs CommonJS**

Both are used to share code between files.

| ES Modules (ESM)        | CommonJS (CJS)        |
| ----------------------- | --------------------- |
| `import`                | `require()`           |
| `export`                | `module.exports`      |
| Modern JavaScript       | Traditional Node.js   |
| Supports static imports | Uses require function |

**ES Modules Example:**

```
export const name = "Satyam";

// Import
import { name } from "./user.js";
```

**CommonJS Example:**

```
// Export
module.exports = { name: "Satyam" };

// Import
const { name } = require("./user.js");
```

## **Quick Revision (Interview Important)**

| Concept           | Simple Meaning                   |
| ----------------- | -------------------------------- |
| Template literals | Insert variables into strings    |
| `?.`              | Safely access properties         |
| `??`              | Default for null/undefined       |
| `export`          | Share code                       |
| `import`          | Use shared code                  |
| CommonJS          | `require()` and `module.exports` |
| ES Modules        | `import` and `export`            |

**Real-world usage:**

- Template literals → Dynamic messages.
- Optional chaining → Access API response safely.
- Nullish coalescing → Set default values.
- ES Modules → Import/export components in React and modules in Node.js.

**Interview Tip:** Remember the difference between `||` and `??`, and between `import/export` and `require/module.exports`. These are commonly asked JavaScript concepts.